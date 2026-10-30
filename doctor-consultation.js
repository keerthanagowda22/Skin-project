document.addEventListener('DOMContentLoaded', () => {
    const locationButton = document.getElementById('locationButton');
    const locationStatus = document.getElementById('locationStatus');
    const placeSearchForm = document.getElementById('placeSearchForm');
    const placeType = document.getElementById('placeType');
    const placeLocation = document.getElementById('placeLocation');
    const mapOpenLink = document.getElementById('mapOpenLink');
    const placesMap = document.getElementById('placesMap');
    const placesStatus = document.getElementById('placesStatus');
    const placeResults = document.getElementById('placeResults');
    const resultsCount = document.getElementById('resultsCount');
    const contactResults = document.getElementById('contactResults');
    const contactResultsStatus = document.getElementById('contactResultsStatus');

    let map;
    let placesService;
    let geocoder;
    let markers = [];
    let selectedPosition = null;
    let searchGeneration = 0;

    const makeMapsUrl = (location) => {
        const query = location === 'near me' ? `${placeType.value} near me` : `${placeType.value} near ${location}`;
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    };

    const updateMapsLink = (location) => {
        const url = makeMapsUrl(location);
        mapOpenLink.href = url;
    };

    const setStatus = (message, error = false) => {
        placesStatus.textContent = message;
        placesStatus.classList.toggle('error', error);
    };

    const clearResults = () => {
        placeResults.replaceChildren();
        contactResults.replaceChildren();
        markers.forEach((marker) => marker.setMap(null));
        markers = [];
    };

    const showEmbeddedMap = (location) => {
        placesMap.replaceChildren();
        const frame = document.createElement('iframe');
        frame.title = `Google Maps search for ${placeType.value} near ${location}`;
        frame.src = `https://maps.google.com/maps?q=${encodeURIComponent(`${placeType.value} near ${location}`)}&output=embed`;
        frame.loading = 'lazy';
        frame.referrerPolicy = 'no-referrer-when-downgrade';
        frame.allowFullscreen = true;
        placesMap.append(frame);
    };

    const showMapSetupMessage = () => {
        setStatus('The map is shown here. Add a restricted Google Maps API key in google-maps-config.js to load clinic names and phone numbers directly in the results.');
    };

    const loadGoogleMaps = () => new Promise((resolve, reject) => {
        if (!window.GOOGLE_MAPS_API_KEY) {
            reject(new Error('Google Maps API key is not configured.'));
            return;
        }

        if (window.google?.maps?.places) {
            resolve();
            return;
        }

        window.initDoctorConsultationMap = resolve;
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(window.GOOGLE_MAPS_API_KEY)}&libraries=places,geometry&callback=initDoctorConsultationMap`;
        script.async = true;
        script.defer = true;
        script.onerror = () => reject(new Error('Google Maps could not be loaded. Check the API key and enabled APIs.'));
        document.head.append(script);
    });

    const initializeMap = async () => {
        try {
            await loadGoogleMaps();
        } catch (error) {
            showMapSetupMessage();
            return false;
        }

        if (!map) {
            map = new google.maps.Map(placesMap, {
                center: { lat: 20.5937, lng: 78.9629 },
                zoom: 5,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: true
            });
            placesService = new google.maps.places.PlacesService(map);
            geocoder = new google.maps.Geocoder();
        }

        return true;
    };

    const buildPlaceCard = (place) => {
        const card = document.createElement('article');
        card.className = 'place-card';

        const text = document.createElement('div');
        text.className = 'place-card-text';
        const name = document.createElement('h3');
        name.textContent = place.name || 'Healthcare provider';
        const address = document.createElement('p');
        address.textContent = place.vicinity || place.formatted_address || 'Address not provided by Google Maps.';
        text.append(name, address);

        const details = document.createElement('div');
        details.className = 'place-card-details';
        const detailsButton = document.createElement('button');
        detailsButton.className = 'place-details-button';
        detailsButton.type = 'button';
        detailsButton.textContent = 'Phone & contact';
        detailsButton.addEventListener('click', () => {
            if (!place.place_id) {
                details.textContent = 'Google Maps did not provide a place ID for this listing.';
                return;
            }
            detailsButton.disabled = true;
            detailsButton.textContent = 'Loading…';
            placesService.getDetails({
                placeId: place.place_id,
                fields: ['name', 'formatted_phone_number', 'international_phone_number', 'website', 'url', 'formatted_address']
            }, (fullPlace, status) => {
                detailsButton.disabled = false;
                detailsButton.textContent = 'Phone & contact';
                if (status !== google.maps.places.PlacesServiceStatus.OK || !fullPlace) {
                    details.textContent = 'Contact details are not available for this listing. Open it in Google Maps to check.';
                    return;
                }

                details.replaceChildren();
                if (fullPlace.formatted_phone_number) {
                    const contactRow = document.createElement('span');
                    contactRow.className = 'place-phone';
                    contactRow.textContent = `Phone: ${fullPlace.formatted_phone_number}`;
                    details.append(contactRow);

                    const phone = document.createElement('a');
                    phone.href = `tel:${fullPlace.formatted_phone_number.replace(/[^\d+]/g, '')}`;
                    phone.textContent = 'Call';
                    details.append(phone);

                    if (fullPlace.international_phone_number?.startsWith('+')) {
                        const whatsappNumber = fullPlace.international_phone_number.replace(/\D/g, '');
                        const whatsapp = document.createElement('a');
                        whatsapp.href = `https://wa.me/${whatsappNumber}`;
                        whatsapp.target = '_blank';
                        whatsapp.rel = 'noopener noreferrer';
                        whatsapp.textContent = 'WhatsApp';
                        details.append(whatsapp);
                    } else {
                        const whatsappInfo = document.createElement('span');
                        whatsappInfo.textContent = 'WhatsApp link unavailable (international number not listed)';
                        details.append(whatsappInfo);
                    }
                } else {
                    const noPhone = document.createElement('span');
                    noPhone.textContent = 'Phone number not listed';
                    details.append(noPhone);
                }

                if (fullPlace.website) {
                    const website = document.createElement('a');
                    website.href = fullPlace.website;
                    website.target = '_blank';
                    website.rel = 'noopener noreferrer';
                    website.textContent = 'Website';
                    details.append(website);
                }
            });
        });

        const openMaps = document.createElement('a');
        openMaps.className = 'place-maps-link';
        openMaps.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name || 'clinic')}&query_place_id=${encodeURIComponent(place.place_id || '')}`;
        openMaps.target = '_blank';
        openMaps.rel = 'noopener noreferrer';
        openMaps.textContent = 'Directions ↗';
        details.append(detailsButton, openMaps);
        card.append(text, details);

        if (place.geometry?.location) {
            const marker = new google.maps.Marker({
                map,
                position: place.geometry.location,
                title: place.name || 'Healthcare provider'
            });
            marker.addListener('click', () => {
                map.panTo(marker.getPosition());
                map.setZoom(Math.max(map.getZoom() || 12, 14));
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });
            markers.push(marker);
        }

        return card;
    };

    const buildContactCard = (place, fullPlace) => {
        const card = document.createElement('article');
        card.className = 'provider-contact-card';

        const providerName = document.createElement('h3');
        providerName.textContent = fullPlace.name || place.name || 'Healthcare provider';
        const providerAddress = document.createElement('p');
        providerAddress.textContent = fullPlace.formatted_address || place.vicinity || 'Address not provided by Google Maps.';
        card.append(providerName, providerAddress);

        const actions = document.createElement('div');
        actions.className = 'provider-contact-actions';
        const phoneNumber = fullPlace.international_phone_number || fullPlace.formatted_phone_number;
        if (phoneNumber) {
            const numberLabel = document.createElement('span');
            numberLabel.className = 'provider-phone-number';
            numberLabel.textContent = phoneNumber;
            actions.append(numberLabel);

            const callLink = document.createElement('a');
            callLink.className = 'provider-action call-provider';
            callLink.href = `tel:${phoneNumber.replace(/[^\d+]/g, '')}`;
            callLink.textContent = 'Call';
            actions.append(callLink);

            if (fullPlace.international_phone_number?.startsWith('+')) {
                const whatsappLink = document.createElement('a');
                whatsappLink.className = 'provider-action whatsapp-provider';
                whatsappLink.href = `https://wa.me/${fullPlace.international_phone_number.replace(/\D/g, '')}`;
                whatsappLink.target = '_blank';
                whatsappLink.rel = 'noopener noreferrer';
                whatsappLink.textContent = 'WhatsApp';
                actions.append(whatsappLink);
            } else {
                const whatsappNote = document.createElement('span');
                whatsappNote.className = 'provider-contact-note';
                whatsappNote.textContent = 'WhatsApp unavailable: no international number listed';
                actions.append(whatsappNote);
            }
        } else {
            const noNumber = document.createElement('span');
            noNumber.className = 'provider-contact-note';
            noNumber.textContent = 'Phone number not listed by Google';
            actions.append(noNumber);
        }

        const directions = document.createElement('a');
        directions.className = 'provider-directions';
        directions.href = fullPlace.url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name || 'clinic')}&query_place_id=${encodeURIComponent(place.place_id || '')}`;
        directions.target = '_blank';
        directions.rel = 'noopener noreferrer';
        directions.textContent = 'Directions ↗';
        actions.append(directions);
        card.append(actions);
        return card;
    };

    const loadContactCards = (places, generation) => {
        const contactPlaces = places.slice(0, 10);
        contactResultsStatus.textContent = `Loading phone details for ${contactPlaces.length} nearby listings…`;

        const detailsRequests = contactPlaces.map((place) => new Promise((resolve) => {
            placesService.getDetails({
                placeId: place.place_id,
                fields: ['name', 'formatted_phone_number', 'international_phone_number', 'formatted_address', 'url']
            }, (fullPlace, status) => {
                resolve({
                    place,
                    fullPlace: status === google.maps.places.PlacesServiceStatus.OK ? fullPlace : null
                });
            });
        }));

        Promise.all(detailsRequests).then((details) => {
            if (generation !== searchGeneration) return;
            const cards = document.createDocumentFragment();
            let availableNumbers = 0;
            details.forEach(({ place, fullPlace }) => {
                if (fullPlace?.formatted_phone_number || fullPlace?.international_phone_number) {
                    availableNumbers += 1;
                }
                cards.append(buildContactCard(place, fullPlace || {}));
            });
            contactResults.replaceChildren(cards);
            contactResultsStatus.textContent = availableNumbers
                ? `Showing contact options for the nearest ${details.length} listings. ${availableNumbers} have a phone number from Google; WhatsApp works only for providers registered with WhatsApp.`
                : `Loaded ${details.length} nearby listings, but Google did not provide phone numbers for them. Try another area or check their Google Maps listings.`;
        });
    };

    const searchNearby = (position) => {
        const generation = ++searchGeneration;
        selectedPosition = position;
        clearResults();
        map.setCenter(position);
        map.setZoom(13);
        setStatus('Searching Google Maps for nearby places…');
        resultsCount.textContent = 'Searching…';
        contactResultsStatus.textContent = 'Finding nearby clinics for this location…';

        const requests = placeType.value === 'hospital'
            ? [{ type: 'hospital' }]
            : (placeType.value === 'dermatologist'
                ? ['dermatologist', 'skin doctor']
                : ['skin clinic', 'dermatology clinic', 'skin care clinic']
            ).map((keyword) => ({ keyword }));

        Promise.all(requests.map((request) => new Promise((resolve) => {
            placesService.nearbySearch({ location: position, radius: 25000, ...request }, (places, status) => {
                resolve({
                    places: status === google.maps.places.PlacesServiceStatus.OK ? places || [] : [],
                    status
                });
            });
        }))).then((searchResults) => {
            if (generation !== searchGeneration) return;
            const uniquePlaces = new Map();
            searchResults.forEach(({ places }) => {
                places.forEach((place) => {
                    if (place.place_id) uniquePlaces.set(place.place_id, place);
                });
            });
            const foundPlaces = [...uniquePlaces.values()];

            if (!foundPlaces.length) {
                const noPlaces = searchResults.every(({ status }) => status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS);
                setStatus(noPlaces
                    ? 'No matching places were found nearby. Try another area or open Google Maps for a broader search.'
                    : 'Google Maps could not load place listings. Check the API key, Places API access, and billing settings.', !noPlaces);
                contactResultsStatus.textContent = noPlaces
                    ? 'No nearby providers were returned for this search. Try another city or search type.'
                    : 'Could not load clinic contacts. Check the Google Maps API key, Places access, and billing settings.';
                resultsCount.textContent = 'No results';
                return;
            }

            const sortedPlaces = foundPlaces.sort((first, second) => {
                const firstDistance = first.geometry?.location
                    ? google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(position), first.geometry.location)
                    : Number.MAX_VALUE;
                const secondDistance = second.geometry?.location
                    ? google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(position), second.geometry.location)
                    : Number.MAX_VALUE;
                return firstDistance - secondDistance;
            });
            const fragment = document.createDocumentFragment();
            sortedPlaces.forEach((place) => fragment.append(buildPlaceCard(place)));
            placeResults.append(fragment);
            setStatus(`Showing ${sortedPlaces.length} matching Google Maps listing${sortedPlaces.length === 1 ? '' : 's'} within approximately 25 km. Google may have additional results.`);
            resultsCount.textContent = `${sortedPlaces.length} nearby`;
            loadContactCards(sortedPlaces, generation);
        });
    };

    const geocodeAndSearch = (location) => {
        const generation = ++searchGeneration;
        updateMapsLink(location);
        initializeMap().then((ready) => {
            if (generation !== searchGeneration) return;
            if (!ready) {
                showEmbeddedMap(location);
                showMapSetupMessage();
                resultsCount.textContent = 'Map search';
                contactResultsStatus.textContent = 'Add a Google Maps API key to load nearby provider names and phone numbers here.';
                return;
            }
            setStatus(`Finding ${placeType.value} near ${location}…`);
            geocoder.geocode({ address: location }, (results, status) => {
                if (generation !== searchGeneration) return;
                if (status !== 'OK' || !results?.length) {
                    setStatus(`Could not locate “${location}”. Try a more specific city, area, or postal code.`, true);
                    return;
                }
                searchNearby(results[0].geometry.location);
            });
        });
    };

    locationButton.addEventListener('click', () => {
        const requestGeneration = ++searchGeneration;
        if (!navigator.geolocation) {
            locationStatus.textContent = 'This browser does not support location access. Enter a city or area instead.';
            return;
        }

        locationStatus.textContent = 'Getting your current location…';
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                if (requestGeneration !== searchGeneration) return;
                const position = { lat: coords.latitude, lng: coords.longitude };
                placeLocation.value = `${coords.latitude.toFixed(5)}, ${coords.longitude.toFixed(5)}`;
                updateMapsLink(placeLocation.value);
                locationStatus.textContent = 'Using your current location. Nearby search covers approximately 25 km.';
                initializeMap().then((ready) => {
                    if (requestGeneration !== searchGeneration) return;
                    if (ready) {
                        searchNearby(position);
                    } else {
                        showEmbeddedMap(placeLocation.value);
                        showMapSetupMessage();
                        resultsCount.textContent = 'Map search';
                        contactResultsStatus.textContent = 'Add a Google Maps API key to load nearby provider names and phone numbers here.';
                    }
                });
            },
            (error) => {
                if (requestGeneration !== searchGeneration) return;
                const messages = {
                    1: 'Location permission was denied. Enter a city or area to search instead.',
                    2: 'Your location could not be determined. Check device location settings or enter an area manually.',
                    3: 'Location request timed out. Try again or enter an area manually.'
                };
                locationStatus.textContent = messages[error.code] || 'Unable to get your location. Enter an area or city instead.';
            },
            { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
        );
    });

    placeSearchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const location = placeLocation.value.trim();
        if (!location) {
            locationStatus.textContent = 'Enter a city, area, or postal code, or use your current location.';
            placeLocation.focus();
            return;
        }
        locationStatus.textContent = `Searching near ${location}.`;
        geocodeAndSearch(location);
    });

    placeLocation.addEventListener('input', () => {
        selectedPosition = null;
    });

    placeType.addEventListener('change', () => {
        if (selectedPosition) {
            updateMapsLink(placeLocation.value.trim());
            initializeMap().then((ready) => {
                if (ready) searchNearby(selectedPosition);
            });
        } else if (placeLocation.value.trim()) {
            updateMapsLink(placeLocation.value.trim());
            showEmbeddedMap(placeLocation.value.trim());
        } else {
            updateMapsLink('near me');
            showEmbeddedMap('near me');
        }
    });

    updateMapsLink('near me');
    showEmbeddedMap('near me');
    if (!window.GOOGLE_MAPS_API_KEY) {
        showMapSetupMessage();
    }
});

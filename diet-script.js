document.addEventListener('DOMContentLoaded', () => {
    const diseaseMap = {
        acne: {
            label: 'Acne',
            title: 'Acne-friendly daily diet routine',
            subtitle: 'Simple daily food habits to support clearer skin, reduce inflammation, and keep your routine practical and sustainable.',
            focusOne: 'Build meals around low-sugar, anti-inflammatory foods that support skin health and reduce breakouts.',
            focusTwo: 'Use gentle movement and stress-relief habits to prevent flare-ups in daily life.',
            content: {
                nutrition: {
                    heading: 'Acne-Friendly Daily Meal Pattern',
                    items: [
                        'Breakfast: oats with berries, chia seeds, and yogurt for fiber, antioxidants, and gut support.',
                        'Lunch: lean protein with leafy salad, colorful vegetables, and a healthy oil dressing.',
                        'Snack: fruits or nuts instead of fried snacks and sugary desserts.',
                        'Dinner: grilled fish or lentils with vegetables and whole grains to reduce inflammation.'
                    ],
                    paragraph: 'A steady routine with balanced meals, lower sugar, and enough water helps support clearer skin without making life complicated.'
                },
                yoga: {
                    heading: 'Daily Stress-Reducing Routine',
                    items: [
                        'Start the morning with 5 minutes of slow breathing to reduce stress.',
                        'Try light yoga poses such as Cat-Cow, Child\'s Pose, and easy stretches after work.',
                        'Practice a short meditation before bed to improve sleep and reduce skin irritation.',
                        'Keep your routine calm and consistent rather than intense or exhausting.'
                    ],
                    paragraph: 'Stress can worsen acne, so simple daily calming habits are just as important as food choices.'
                },
                habits: {
                    heading: 'Healthy Daily Habits for Acne',
                    items: [
                        'Drink water regularly through the day instead of relying on soda or sweet drinks.',
                        'Avoid skipping meals and keep snacks simple and nourishing.',
                        'Keep your skin-care routine gentle and avoid harsh scrubs or picking.',
                        'Aim for regular sleep and low-stress routines to support skin recovery.'
                    ],
                    paragraph: 'Daily consistency matters more than a perfect diet. Small, practical habits work best over time.'
                }
            }
        },
        eczema: {
            label: 'Eczema',
            title: 'Eczema-friendly daily routine',
            subtitle: 'Gentle, calming nutrition and easy habits that help support skin comfort and reduce irritation in daily life.',
            focusOne: 'Choose soothing, anti-inflammatory foods and stay hydrated to support your skin barrier.',
            focusTwo: 'Keep movement, rest, and stress control gentle so your routine feels sustainable.',
            content: {
                nutrition: {
                    heading: 'Daily Diet for Comfort & Calm',
                    items: [
                        'Breakfast: oatmeal with fruits and seeds for fiber, minerals, and gentle nourishment.',
                        'Lunch: simple grain bowl with vegetables, beans, and a light dressing.',
                        'Snack: cucumber, berries, or yogurt if you want something cool and soothing.',
                        'Dinner: baked fish, rice, or lentils with cooked vegetables to keep meals easy and gentle.'
                    ],
                    paragraph: 'A simple daily eating pattern with hydration and low-irritation foods can help you feel more comfortable and consistent.'
                },
                yoga: {
                    heading: 'Gentle Body Care Routine',
                    items: [
                        'Use slow breathing when the skin feels itchy or stressed.',
                        'Try restorative yoga or seated stretches with minimal effort and no strain.',
                        'Take a short meditation break during the day to reduce irritation triggers.',
                        'Keep movement light and avoid overheating or over-exercising.'
                    ],
                    paragraph: 'Eczema is often sensitive to stress and skin irritation, so calm, low-impact habits are very helpful.'
                },
                habits: {
                    heading: 'Daily Habits for Skin Comfort',
                    items: [
                        'Drink water regularly and avoid too many processed or sugary foods.',
                        'Moisturize after bathing and keep the routine simple and consistent.',
                        'Wear breathable clothes and avoid harsh soaps or strong fragrances.',
                        'Track what triggers flare-ups so you can keep your routine practical.'
                    ],
                    paragraph: 'Consistency with gentle habits is usually more helpful than extreme diets or sudden changes.'
                }
            }
        },
        psoriasis: {
            label: 'Psoriasis',
            title: 'Psoriasis-friendly everyday nutrition',
            subtitle: 'Daily meals and wellness habits that support calmer skin, lower stress, and help you maintain a routine you can stick to.',
            focusOne: 'Use anti-inflammatory foods and regular meals to support skin balance and energy.',
            focusTwo: 'Keep stress management gentle and consistent to reduce flare-ups in daily life.',
            content: {
                nutrition: {
                    heading: 'Daily Meal Routine for Balance',
                    items: [
                        'Breakfast: fruit, oats, and nuts for energy, fiber, and healthy fats.',
                        'Lunch: vegetable-rich meal with beans, grains, and lean protein.',
                        'Snack: yogurt, seeds, or fruit instead of processed snacks.',
                        'Dinner: fish, lentils, or tofu with vegetables and a simple whole-food side.'
                    ],
                    paragraph: 'Regular, balanced meals help your body feel steadier and may support calmer skin during difficult weeks.'
                },
                yoga: {
                    heading: 'Low-Stress Recovery Routine',
                    items: [
                        'Begin the day with deep breathing and gentle stretching.',
                        'Use slow yoga poses to reduce tension without irritating the skin.',
                        'Take a 10-minute meditation break in the evening to reduce stress.',
                        'Avoid intense workouts during flare-ups and focus on comfort.'
                    ],
                    paragraph: 'Stress reduction is a strong part of psoriasis care, and gentle routines make it easier to stay consistent.'
                },
                habits: {
                    heading: 'Simple Daily Wellness Habits',
                    items: [
                        'Keep sleep time regular and avoid late-night stress.',
                        'Drink enough water and limit processed or fried foods.',
                        'Moisturize and protect your skin from drying conditions.',
                        'Notice your personal triggers and keep your meal and rest routine consistent.'
                    ],
                    paragraph: 'A realistic daily routine usually works better than a strict diet and is easier to maintain long term.'
                }
            }
        },
        default: {
            label: 'Skin Health',
            title: 'Nutrition & Wellness for Healthy Skin',
            subtitle: 'A sustainable daily diet and wellness routine that helps support skin health, energy, and long-term habits.',
            focusOne: 'Choose vitamins, minerals, and whole foods that support repair, hydration, and skin balance.',
            focusTwo: 'Gentle yoga, meditation, and healthy routines help reduce stress and improve daily care.',
            content: {
                nutrition: {
                    heading: 'Daily Skin-Supporting Foods',
                    items: [
                        'Breakfast: oats, berries, yogurt, and nuts for steady energy and antioxidants.',
                        'Lunch: leafy greens, grains, beans, and lean protein for balanced meals.',
                        'Snack: fruit, seeds, or yogurt instead of sugary processed foods.',
                        'Dinner: colorful vegetables, fish or legumes, and whole grains for repair and hydration.'
                    ],
                    paragraph: 'A realistic skin-friendly diet is built around simple, colorful meals and consistent hydration.'
                },
                yoga: {
                    heading: 'Daily Calm & Movement',
                    items: [
                        'Begin the day with deep breathing to help your body feel calmer.',
                        'Add light stretching or yoga for better circulation and lower stress.',
                        'Take short meditations during stressful moments to prevent flare-ups.',
                        'Keep movement gentle, regular, and enjoyable.'
                    ],
                    paragraph: 'A calm lifestyle supports better skin health and makes it easier to keep up with healthy habits.'
                },
                habits: {
                    heading: 'Healthy Daily Routine',
                    items: [
                        'Drink enough water through the day and limit sugary drinks.',
                        'Eat balanced meals instead of skipping food or relying on junk snacks.',
                        'Protect your skin with sleep, hydration, and gentle care habits.',
                        'Keep your routine simple, steady, and realistic for everyday life.'
                    ],
                    paragraph: 'The key is consistency. Healthy skin comes from sustainable routines, not perfect diets.'
                }
            }
        }
    };

    const savedDisease = localStorage.getItem('lastPredictedDisease');
    const profile = diseaseMap[(savedDisease || '').toLowerCase()] || diseaseMap.default;

    const title = document.getElementById('dietTitle');
    const subtitle = document.getElementById('dietSubtitle');
    const conditionPill = document.getElementById('dietConditionPill');
    const focusTitleOne = document.getElementById('focusTitleOne');
    const focusTextOne = document.getElementById('focusTextOne');
    const focusTitleTwo = document.getElementById('focusTitleTwo');
    const focusTextTwo = document.getElementById('focusTextTwo');

    title.textContent = profile.title;
    subtitle.textContent = profile.subtitle;
    conditionPill.textContent = `Personalized for: ${profile.label}`;
    focusTitleOne.textContent = 'Balanced Nutrition';
    focusTextOne.textContent = profile.focusOne;
    focusTitleTwo.textContent = 'Meditation & Yoga';
    focusTextTwo.textContent = profile.focusTwo;

    const tabMap = {
        nutrition: profile.content.nutrition,
        yoga: profile.content.yoga,
        habits: profile.content.habits
    };

    const tabs = document.querySelectorAll('.diet-tab');
    const sections = document.querySelectorAll('.diet-section-content');

    const populateSection = (tabName) => {
        const section = document.querySelector(`.diet-section-content[data-content="${tabName}"]`);
        const content = tabMap[tabName];
        if (!section || !content) return;

        section.innerHTML = `
            <h3>${content.heading}</h3>
            <ul>
                ${content.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p>${content.paragraph}</p>
        `;
    };

    const activateTab = (target) => {
        tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === target);
        });
        sections.forEach(section => {
            section.classList.toggle('hidden', section.dataset.content !== target);
        });
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            activateTab(tab.dataset.tab);
        });
    });

    Object.keys(tabMap).forEach(populateSection);
    activateTab('nutrition');
});

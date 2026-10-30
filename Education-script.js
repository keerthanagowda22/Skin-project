// Education Module Script with Comprehensive Disease Database

// Disease Database - Organized alphabetically
const diseaseDatabase = [
    {
        id: 1,
        name: 'Acne',
        type: 'inflammatory',
        description: 'A common skin condition characterized by pustules, blackheads, and whiteheads, typically occurring on the face, neck, chest, and back. It occurs when hair follicles become clogged with dead skin cells and sebum.',
        causes: [
            'Excess sebum production',
            'Clogged hair follicles',
            'Bacterial growth (Propionibacterium acnes)',
            'Hormonal changes (especially during puberty)',
            'Poor skin hygiene',
            'Certain medications',
            'Diet high in refined carbohydrates'
        ],
        symptoms: [
            'Blackheads and whiteheads',
            'Small red bumps (papules)',
            'Painful, pus-filled bumps (pustules)',
            'Large nodules under the skin',
            'Cysts',
            'Redness and irritation'
        ],
        prevention: [
            'Wash face twice daily with gentle cleanser',
            'Use oil-free moisturizer',
            'Avoid touching face',
            'Keep hair away from face',
            'Choose non-comedogenic products',
            'Reduce stress',
            'Maintain healthy diet'
        ],
        remedies: {
            home: [
                'Tea tree oil (diluted)',
                'Aloe vera gel',
                'Benzoyl peroxide',
                'Salicylic acid face wash',
                'Ice compress',
                'Lemon juice and honey mask'
            ],
            allopathic: [
                'Benzoyl peroxide topical',
                'Salicylic acid products',
                'Tretinoin (vitamin A derivative)',
                'Antibiotics (oral or topical)',
                'Isotretinoin (severe cases)',
                'Oral contraceptives (for females)'
            ],
            ayurvedic: [
                'Neem face pack',
                'Turmeric and sandalwood mask',
                'Tulsi and honey paste',
                'Triphala water cleanser',
                'Ashwagandha supplements',
                'Brahmi oil massage'
            ]
        }
    },
    {
        id: 2,
        name: 'Athlete\'s Foot',
        type: 'fungal',
        description: 'A fungal infection that typically occurs between the toes, causing itching, burning, and cracked skin. Also known as tinea pedis, it thrives in warm, moist environments.',
        causes: [
            'Fungal infection (Trichophyton species)',
            'Walking barefoot in communal areas',
            'Poor foot hygiene',
            'Excessive sweating',
            'Tight or non-breathable footwear',
            'Weakened immune system',
            'Diabetes'
        ],
        symptoms: [
            'Itching and burning sensation',
            'Cracked, flaky, or peeling skin',
            'Blisters',
            'Red or discolored skin',
            'Soften or breakdown of skin',
            'Scaling between toes'
        ],
        prevention: [
            'Keep feet dry, especially between toes',
            'Wear breathable footwear',
            'Use antifungal powder',
            'Avoid walking barefoot in public areas',
            'Change socks if they get damp',
            'Cut toenails short',
            'Avoid sharing personal items'
        ],
        remedies: {
            home: [
                'Vinegar soaks',
                'Tea tree oil',
                'Garlic paste',
                'Baking soda powder',
                'Hydrogen peroxide',
                'Coconut oil'
            ],
            allopathic: [
                'Topical antifungal creams (Terbinafine)',
                'Miconazole cream',
                'Tolnaftate spray',
                'Oral antifungals (severe cases)',
                'Antifungal powders'
            ],
            ayurvedic: [
                'Neem oil application',
                'Turmeric powder paste',
                'Manjisthadi taila',
                'Triphala powder',
                'Sesame oil with camphor',
                'Karanja oil'
            ]
        }
    },
    {
        id: 3,
        name: 'Eczema (Dermatitis)',
        type: 'inflammatory',
        description: 'A chronic inflammatory skin condition that causes intense itching, redness, and dry skin. It can occur at any age and often starts in childhood.',
        causes: [
            'Genetic predisposition',
            'Immune system dysfunction',
            'Dry skin barrier',
            'Allergens and irritants',
            'Environmental factors',
            'Stress and emotional factors',
            'Certain foods (in some cases)'
        ],
        symptoms: [
            'Intense itching (especially at night)',
            'Dry, cracked, sensitive skin',
            'Redness and swelling',
            'Small, raised bumps',
            'Fluid leakage when scratched',
            'Thick, swollen skin'
        ],
        prevention: [
            'Keep skin moisturized',
            'Avoid harsh soaps and detergents',
            'Take short, warm baths',
            'Pat skin dry gently',
            'Avoid known triggers',
            'Use humidifier',
            'Manage stress'
        ],
        remedies: {
            home: [
                'Oatmeal baths',
                'Coconut oil moisturizer',
                'Aloe vera gel',
                'Honey application',
                'Cucumber paste',
                'Chamomile compress'
            ],
            allopathic: [
                'Topical corticosteroids',
                'Antihistamines',
                'Emollients',
                'Topical calcineurin inhibitors',
                'Phototherapy',
                'Oral immunosuppressants (severe)'
            ],
            ayurvedic: [
                'Neem paste application',
                'Turmeric with coconut oil',
                'Aloe vera with jasmine oil',
                'Manjisthadi taila massage',
                'Triphala water bath',
                'Sesame oil massage'
            ]
        }
    },
    {
        id: 4,
        name: 'Psoriasis',
        type: 'inflammatory',
        description: 'A chronic autoimmune skin disorder characterized by thick, silvery scales and inflamed skin. It typically appears as red patches covered with white, flaky scales.',
        causes: [
            'Genetic factors',
            'Immune system dysfunction',
            'Stress',
            'Certain medications',
            'Infections (strep throat)',
            'Skin injuries',
            'Cold weather'
        ],
        symptoms: [
            'Red patches with thick, white scales',
            'Small scaling marks (seborrheic keratosis)',
            'Itching and burning sensations',
            'Dry cracked skin',
            'Swollen, stiff joints',
            'Thickened, ridged nails',
            'Patchy rash'
        ],
        prevention: [
            'Manage stress',
            'Get adequate sleep',
            'Avoid skin injury',
            'Avoid alcohol',
            'Protect skin in cold weather',
            'Limit sun exposure',
            'Maintain healthy diet'
        ],
        remedies: {
            home: [
                'Apple cider vinegar',
                'Turmeric paste',
                'Epsom salt baths',
                'Aloe vera',
                'Tea tree oil',
                'Dead sea salt'
            ],
            allopathic: [
                'Topical steroids',
                'Coal tar preparations',
                'Salicylic acid',
                'Vitamin D analogues',
                'Phototherapy (UVB)',
                'Oral medications',
                'Biologic therapies'
            ],
            ayurvedic: [
                'Manjisthadi taila',
                'Panchakarma therapy',
                'Triphala supplements',
                'Neem oil massage',
                'Turmeric milk',
                'Brahmi oil'
            ]
        }
    },
    {
        id: 5,
        name: 'Ringworm',
        type: 'fungal',
        description: 'A contagious fungal infection that appears as a ring-shaped rash on the skin. Despite its name, it is caused by fungi, not worms. Also known as tinea corporis.',
        causes: [
            'Fungal infection (Trichophyton, Microsporum)',
            'Contact with infected person or animal',
            'Contaminated soil or surfaces',
            'Poor hygiene',
            'Warm, moist skin',
            'Compromised immune system',
            'Athlete\'s foot or nail fungus'
        ],
        symptoms: [
            'Ring-shaped red rash',
            'Itching and burning sensation',
            'Scales or dry crust',
            'Central area may clear leaving ring',
            'Multiple rings on skin',
            'Rash may ooze or become inflamed'
        ],
        prevention: [
            'Keep skin clean and dry',
            'Avoid contact with infected individuals',
            'Don\'t share personal items',
            'Wear protective footwear',
            'Wash hands after touching animals',
            'Avoid scratching the area',
            'Use antifungal powder'
        ],
        remedies: {
            home: [
                'Vinegar application',
                'Garlic paste',
                'Tea tree oil',
                'Lemon juice',
                'Honey and turmeric paste',
                'Coconut oil'
            ],
            allopathic: [
                'Topical antifungal creams',
                'Miconazole',
                'Terbinafine',
                'Tolnaftate',
                'Oral antifungals (spreading cases)',
                'Antifungal sprays'
            ],
            ayurvedic: [
                'Neem oil application',
                'Turmeric paste',
                'Manjisthadi taila',
                'Karanja oil',
                'Sesame oil with camphor',
                'Triphala paste'
            ]
        }
    },
    {
        id: 6,
        name: 'Warts',
        type: 'viral',
        description: 'Small, tough growths caused by human papillomavirus (HPV). They can appear anywhere on the skin and are typically benign but may be removed for cosmetic reasons.',
        causes: [
            'Human papillomavirus (HPV) infection',
            'Direct contact with infected skin',
            'Skin cuts or breaks',
            'Weakened immune system',
            'Warm, moist environments',
            'Sharing contaminated items',
            'Plantar warts from walking barefoot'
        ],
        symptoms: [
            'Small, hard bump on skin',
            'Flesh-colored or grayish growths',
            'Rough surface',
            'Black specks inside wart',
            'Tender or painless depending on location',
            'Cluster of warts'
        ],
        prevention: [
            'Avoid touching infected warts',
            'Keep hands and feet dry',
            'Avoid walking barefoot',
            'Don\'t share personal items',
            'Wash hands regularly',
            'Avoid picking at warts',
            'Keep immune system strong'
        ],
        remedies: {
            home: [
                'Apple cider vinegar',
                'Garlic paste',
                'Onion juice',
                'Tea tree oil',
                'Lemon juice',
                'Salicylic acid pads'
            ],
            allopathic: [
                'Salicylic acid topical',
                'Cryotherapy (freezing)',
                'Laser therapy',
                'Electrocautery',
                'Imiquimod cream',
                'Surgical removal'
            ],
            ayurvedic: [
                'Neem leaf paste',
                'Turmeric paste',
                'Tulsi and coconut oil',
                'Sesame oil massage',
                'Ashwagandha paste',
                'Brahmi oil application'
            ]
        }
    },
    {
        id: 7,
        name: 'Herpes Zoster (Shingles)',
        type: 'viral',
        description: 'A painful viral infection causing a blistering rash. It\'s caused by reactivation of the varicella-zoster virus that causes chickenpox.',
        causes: [
            'Reactivation of varicella-zoster virus',
            'Weakened immune system',
            'Advanced age',
            'Stress',
            'Certain medications',
            'Previous chickenpox infection',
            'Cancer or HIV/AIDS'
        ],
        symptoms: [
            'Burning pain or tingling',
            'Fluid-filled blisters in a band pattern',
            'Red rash following blister pattern',
            'Itching',
            'Fever and chills',
            'Fatigue',
            'Headache'
        ],
        prevention: [
            'Get vaccinated (Shingrix)',
            'Manage stress',
            'Get adequate sleep',
            'Maintain healthy diet',
            'Exercise regularly',
            'Avoid contact with non-immune persons',
            'Keep stress levels low'
        ],
        remedies: {
            home: [
                'Cool compress',
                'Cotton clothing',
                'Oatmeal baths',
                'Aloe vera gel',
                'Calamine lotion',
                'Honey application'
            ],
            allopathic: [
                'Antiviral medications (Acyclovir)',
                'Pain relief medications',
                'Topical anesthetics',
                'Corticosteroids',
                'Antihistamines',
                'Antibiotics if infected'
            ],
            ayurvedic: [
                'Neem leaf paste',
                'Turmeric milk',
                'Sesame oil massage',
                'Sandalwood paste',
                'Brahmi oil',
                'Triphala supplements'
            ]
        }
    },
    {
        id: 8,
        name: 'Vitiligo',
        type: 'inflammatory',
        description: 'A skin condition characterized by loss of skin pigmentation, resulting in irregular white patches. It occurs when melanocytes (pigment-producing cells) are destroyed.',
        causes: [
            'Autoimmune disorder',
            'Genetic predisposition',
            'Stress and emotional shock',
            'Vitamin B12 and iron deficiency',
            'Thyroid disorder',
            'Sun exposure and sunburn',
            'Skin damage or injury'
        ],
        symptoms: [
            'White patches on skin',
            'Loss of color in hair and eyebrows',
            'Loss of color inside mouth',
            'White spots around eyes and genital area',
            'Patches often bilateral',
            'Burning or itching at patch site'
        ],
        prevention: [
            'Avoid skin trauma',
            'Use high SPF sunscreen',
            'Manage stress',
            'Maintain healthy diet',
            'Treat underlying conditions',
            'Avoid harsh chemicals',
            'Get adequate sleep'
        ],
        remedies: {
            home: [
                'Neem juice intake',
                'Turmeric and coconut oil',
                'Ginger and honey',
                'Babchi oil massage',
                'Basil leaves paste',
                'Sesame oil with turmeric'
            ],
            allopathic: [
                'Topical corticosteroids',
                'Topical calcineurin inhibitors',
                'Phototherapy (UVB)',
                'Excimer laser',
                'Depigmentation therapy',
                'Skin grafting'
            ],
            ayurvedic: [
                'Neem oil massage',
                'Turmeric supplements',
                'Babchi seed oil',
                'Sesame oil with turmeric',
                'Ashwagandha',
                'Brahmi oil massage'
            ]
        }
    },
    {
        id: 9,
        name: 'Chickenpox',
        type: 'viral',
        description: 'A highly contagious viral infection characterized by itchy blisters that appear in waves. It\'s caused by the varicella-zoster virus and usually occurs in childhood.',
        causes: [
            'Varicella-zoster virus infection',
            'Droplet transmission from infected person',
            'Contact with infected blisters',
            'No previous immunity',
            'Lack of vaccination'
        ],
        symptoms: [
            'Rash with fluid-filled blisters',
            'Fever and chills',
            'Fatigue and body aches',
            'Loss of appetite',
            'Headache',
            'Itchy sensations',
            'Blisters appear in crops'
        ],
        prevention: [
            'Get vaccinated (Varicella vaccine)',
            'Avoid contact with infected persons',
            'Practice good hygiene',
            'Wash hands regularly',
            'Use separate towels',
            'Maintain healthy immune system',
            'Get adequate rest'
        ],
        remedies: {
            home: [
                'Oatmeal baths',
                'Cool compress',
                'Calamine lotion',
                'Aloe vera',
                'Cotton clothing',
                'Honey and turmeric paste'
            ],
            allopathic: [
                'Antiviral medications',
                'Acetaminophen for fever',
                'Antihistamines for itching',
                'Topical antibiotics',
                'Avoid aspirin',
                'Stay hydrated'
            ],
            ayurvedic: [
                'Neem leaves bath',
                'Turmeric milk',
                'Tulsi and honey',
                'Triphala supplements',
                'Sesame oil massage',
                'Sandalwood paste'
            ]
        }
    },
    {
        id: 10,
        name: 'Dandruff',
        type: 'fungal',
        description: 'A common scalp condition characterized by white or yellowish flakes on the scalp and hair. It\'s caused by a combination of factors including a yeast-like fungus.',
        causes: [
            'Malassezia fungus',
            'Seborrheic dermatitis',
            'Dry scalp',
            'Poor hygiene',
            'Stress',
            'Weather changes',
            'Sensitivity to hair products'
        ],
        symptoms: [
            'White or yellowish flakes',
            'Itchy scalp',
            'Oily scalp with dandruff',
            'Red or inflamed scalp',
            'Flakes in hair and on clothing',
            'Mild odor'
        ],
        prevention: [
            'Wash hair regularly',
            'Use antifungal shampoo',
            'Avoid harsh products',
            'Manage stress',
            'Maintain scalp hygiene',
            'Avoid excessive heat styling',
            'Eat healthy diet'
        ],
        remedies: {
            home: [
                'Tea tree oil shampoo',
                'Apple cider vinegar rinse',
                'Neem oil massage',
                'Coconut oil massage',
                'Lemon juice rinse',
                'Honey and olive oil mask'
            ],
            allopathic: [
                'Zinc pyrithione shampoo',
                'Selenium sulfide shampoo',
                'Ketoconazole shampoo',
                'Salicylic acid shampoo',
                'Topical corticosteroids',
                'Antifungal solutions'
            ],
            ayurvedic: [
                'Neem oil massage',
                'Brahmi oil with turmeric',
                'Sesame oil massage',
                'Triphala powder treatment',
                'Tulsi and coconut oil',
                'Manjisthadi taila'
            ]
        }
    },
    {
        id: 11,
        name: 'Pityriasis Rosea',
        type: 'inflammatory',
        description: 'A self-limiting inflammatory skin condition that causes a distinctive scaly rash. It typically affects teenagers and young adults.',
        causes: [
            'Unknown (possibly viral)',
            'Human herpesvirus 7 suspected',
            'Immune system response',
            'Seasonal variation',
            'Not contagious'
        ],
        symptoms: [
            'Herald patch (initial spot)',
            'Scaly rash on trunk and limbs',
            'Pink or salmon-colored patches',
            'Christmas tree distribution pattern',
            'Mild itching',
            'Rarely fever or malaise',
            'Oral lesions possible'
        ],
        prevention: [
            'Good personal hygiene',
            'Avoid skin irritation',
            'Manage stress',
            'Use mild soaps',
            'Avoid hot baths',
            'Keep skin moisturized',
            'Adequate sleep'
        ],
        remedies: {
            home: [
                'Oatmeal baths',
                'Coconut oil application',
                'Calamine lotion',
                'Cool compress',
                'Aloe vera gel',
                'Honey application'
            ],
            allopathic: [
                'Topical corticosteroids',
                'Antihistamines for itching',
                'Salicylic acid lotion',
                'Emollients',
                'UVB phototherapy',
                'Oral antibiotics (if secondary)'
            ],
            ayurvedic: [
                'Neem paste application',
                'Turmeric and coconut oil',
                'Sandalwood paste',
                'Sesame oil massage',
                'Aloe vera with brahmi oil',
                'Triphala water bath'
            ]
        }
    },
    {
        id: 12,
        name: 'Scabies',
        type: 'parasitic',
        description: 'A highly contagious skin infection caused by a microscopic mite that burrows into the skin. It causes intense itching and the characteristic burrow marks.',
        causes: [
            'Sarcoptes scabiei mite infection',
            'Skin-to-skin contact with infected person',
            'Contact with contaminated bedding',
            'Poor hygiene',
            'Crowded living conditions',
            'Weakened immune system',
            'Share contaminated items'
        ],
        symptoms: [
            'Intense itching (worse at night)',
            'Burrows or wavy lines on skin',
            'Red bumps or rash',
            'Pustules or crusts',
            'Common areas: hands, feet, genitals',
            'Nodules in some cases',
            'Secondary bacterial infection'
        ],
        prevention: [
            'Maintain good hygiene',
            'Avoid close contact with infected',
            'Wash bedding regularly',
            'Keep nails short',
            'Avoid sharing personal items',
            'Seek early treatment',
            'Quarantine until treated'
        ],
        remedies: {
            home: [
                'Sulfur powder application',
                'Tea tree oil',
                'Neem oil massage',
                'Garlic and oil paste',
                'Calamine lotion',
                'Turmeric paste'
            ],
            allopathic: [
                'Permethrin cream (5%)',
                'Sulfur ointment',
                'Benzyl benzoate lotion',
                'Crotamiton cream',
                'Oral ivermectin',
                'Topical antihistamines'
            ],
            ayurvedic: [
                'Neem oil massage',
                'Turmeric and sesame oil',
                'Triphala powder',
                'Brahmi oil application',
                'Manjisthadi taila',
                'Ashwagandha supplement'
            ]
        }
    },
    {
        id: 13,
        name: 'Rosacea',
        type: 'inflammatory',
        description: 'A chronic skin condition that causes flushing, redness, and visible blood vessels, typically on the face. It often affects adults and can progressively worsen.',
        causes: [
            'Unknown (possibly genetic/environmental)',
            'Vascular or immune system dysfunction',
            'Triggers: spicy food, alcohol, heat',
            'Stress and emotional factors',
            'Sun exposure',
            'Extreme temperatures',
            'Certain skincare products'
        ],
        symptoms: [
            'Facial flushing and redness',
            'Persistent facial redness',
            'Visible blood vessels',
            'Small bumps or pustules',
            'Eye irritation (in some)',
            'Thickened, bumpy skin',
            'Burning or stinging sensation'
        ],
        prevention: [
            'Identify and avoid triggers',
            'Use sunscreen daily',
            'Avoid extreme temperatures',
            'Limit spicy foods and alcohol',
            'Manage stress',
            'Use gentle skincare',
            'Protect face from wind'
        ],
        remedies: {
            home: [
                'Green tea compress',
                'Aloe vera gel',
                'Chamomile compress',
                'Honey mask',
                'Coconut oil',
                'Cold compress'
            ],
            allopathic: [
                'Topical antibiotics (Metronidazole)',
                'Azelaic acid',
                'Sulfur-containing products',
                'Topical corticosteroids',
                'Laser therapy',
                'Oral antibiotics'
            ],
            ayurvedic: [
                'Sandalwood paste',
                'Turmeric and honey',
                'Brahmi oil massage',
                'Cooling herbs (Shatavari)',
                'Triphala water wash',
                'Sesame oil with ghee'
            ]
        }
    },
    {
        id: 14,
        name: 'Urticaria (Hives)',
        type: 'inflammatory',
        description: 'A skin reaction characterized by sudden appearance of itchy welts or hives. It can be acute or chronic and is often triggered by allergies.',
        causes: [
            'Allergic reaction to food, drugs, or insect bites',
            'Stress and emotional factors',
            'Heat or cold exposure',
            'Infections',
            'Autoimmune conditions',
            'Exercise',
            'Unknown (idiopathic) in many cases'
        ],
        symptoms: [
            'Itchy welts or bumps on skin',
            'Raised red or skin-colored bumps',
            'Hives appear suddenly',
            'Intense itching',
            'Swelling of face or lips',
            'May itch or sting',
            'Hives migrate around body'
        ],
        prevention: [
            'Identify and avoid triggers',
            'Manage stress levels',
            'Avoid extreme temperatures',
            'Wear protective clothing',
            'Use fragrance-free products',
            'Maintain healthy diet',
            'Get adequate rest'
        ],
        remedies: {
            home: [
                'Calamine lotion',
                'Cool compress',
                'Baking soda bath',
                'Oatmeal bath',
                'Aloe vera gel',
                'Chamomile compress'
            ],
            allopathic: [
                'Antihistamines (Cetirizine, Loratadine)',
                'Topical corticosteroids',
                'Epinephrine (severe cases)',
                'Omalizumab (chronic)',
                'Cyclosporine (refractory)',
                'Avoid triggers'
            ],
            ayurvedic: [
                'Neem leaf paste',
                'Turmeric and honey',
                'Tulsi tea',
                'Triphala supplement',
                'Brahmi oil massage',
                'Cooling herbs (Manjishtha)'
            ]
        }
    },
    {
        id: 15,
        name: 'Keratosis Pilaris',
        type: 'inflammatory',
        description: 'A common, harmless skin condition characterized by small, hard bumps that may make skin feel rough, usually on upper arms, thighs, cheeks, or buttocks.',
        causes: [
            'Buildup of keratin protein',
            'Genetic predisposition',
            'Associated with dry skin',
            'Low vitamin A',
            'Immune-related conditions',
            'Environmental factors',
            'More common in cold weather'
        ],
        symptoms: [
            'Small, hard, red or skin-colored bumps',
            'Rough skin texture',
            'Slight itching or irritation',
            'Bumps on arms and thighs (common)',
            'May worsen in cold seasons',
            'Cosmetic concern only',
            'No pain or serious complications'
        ],
        prevention: [
            'Keep skin moisturized',
            'Avoid harsh scrubbing',
            'Use gentle cleansers',
            'Get adequate vitamin A',
            'Maintain healthy diet',
            'Stay hydrated',
            'Use humidifier in dry conditions'
        ],
        remedies: {
            home: [
                'Moisturizing creams',
                'Coconut oil massage',
                'Gentle exfoliation',
                'Vitamin A-rich foods',
                'Lactic acid lotion',
                'Urea cream'
            ],
            allopathic: [
                'Topical retinoids',
                'Salicylic acid lotion',
                'Urea-containing creams',
                'Lactic acid products',
                'Moisturizing emollients',
                'Prescription retinoids'
            ],
            ayurvedic: [
                'Sesame oil massage',
                'Turmeric and coconut oil',
                'Aloe vera application',
                'Brahmi oil massage',
                'Vitamin A rich herbs',
                'Triphala supplements'
            ]
        }
    },
    {
        id: 16,
        name: 'Molluscum Contagiosum',
        type: 'viral',
        description: 'A common viral infection that causes small, raised bumps on the skin. It\'s more common in children and is spread through direct contact.',
        causes: [
            'Poxvirus infection',
            'Direct skin-to-skin contact',
            'Contact with contaminated objects',
            'Sexual transmission in adults',
            'Weakened immune system',
            'Atopic dermatitis',
            'Spreads through scratching'
        ],
        symptoms: [
            'Small, dome-shaped bumps',
            'Central dimple in bumps',
            'Usually painless',
            'Firm to touch',
            'Can appear anywhere on body',
            'May form in clusters',
            'Surrounding skin may be inflamed'
        ],
        prevention: [
            'Avoid direct contact with lesions',
            'Don\'t share personal items',
            'Cover affected areas',
            'Avoid swimming',
            'Don\'t scratch or pick bumps',
            'Maintain good hygiene',
            'Wash hands regularly'
        ],
        remedies: {
            home: [
                'Apple cider vinegar',
                'Tea tree oil',
                'Garlic paste',
                'Lemon juice',
                'Honey application',
                'Turmeric paste'
            ],
            allopathic: [
                'Cryotherapy (freezing)',
                'Curettage (scraping)',
                'Chemical peeling agents',
                'Laser treatment',
                'Imiquimod cream',
                'Salicylic acid'
            ],
            ayurvedic: [
                'Neem leaf paste',
                'Turmeric and coconut oil',
                'Sesame oil with camphor',
                'Brahmi oil massage',
                'Ashwagandha paste',
                'Tulsi and honey'
            ]
        }
    },
    {
        id: 17,
        name: 'Seborrheic Keratosis',
        type: 'inflammatory',
        description: 'A common, benign skin growth that usually appears as brown, black, or tan warty spots on the skin. It\'s harmless but can be removed for cosmetic reasons.',
        causes: [
            'Age-related skin growth',
            'Genetic predisposition',
            'Sun exposure',
            'Fair skin type',
            'Family history',
            'Unknown causes in many cases'
        ],
        symptoms: [
            'Brown, black, or tan growths',
            'Waxy or scaly texture',
            'Slightly raised from skin',
            'Well-defined borders',
            'May itch or bleed if irritated',
            'Usually on face, chest, or back',
            'Multiple growths may appear'
        ],
        prevention: [
            'Protect from sun exposure',
            'Use sunscreen daily',
            'Wear protective clothing',
            'Avoid irritation',
            'Regular skin checks',
            'Genetic predisposition',
            'Age-related growth'
        ],
        remedies: {
            home: [
                'Apple cider vinegar soaks',
                'Tea tree oil',
                'Lemon juice',
                'Garlic extract',
                'Avoid picking or rubbing',
                'Sunscreen application'
            ],
            allopathic: [
                'Cryotherapy (freezing)',
                'Surgical removal',
                'Laser treatment',
                'Electrocautery',
                'Chemical peels',
                'Curettage'
            ],
            ayurvedic: [
                'Neem oil application',
                'Turmeric paste',
                'Sesame oil massage',
                'Brahmi oil',
                'Sandalwood paste',
                'Ash (bhasma) application'
            ]
        }
    },
    {
        id: 18,
        name: 'Contact Dermatitis',
        type: 'inflammatory',
        description: 'An allergic or irritant skin reaction that occurs when skin contacts a triggering substance. It causes redness, itching, and sometimes blistering.',
        causes: [
            'Irritant exposure (soaps, detergents)',
            'Allergic reaction (nickel, plants)',
            'Poison ivy, oak, or sumac',
            'Chemical exposure',
            'Latex gloves',
            'Fragrances and dyes',
            'Heavy metals'
        ],
        symptoms: [
            'Red, itchy rash',
            'Burning sensation',
            'Blistering or weeping',
            'Swelling and inflammation',
            'Appears after exposure',
            'Confined to contact area',
            'May become secondary infection'
        ],
        prevention: [
            'Identify and avoid triggers',
            'Wear gloves when handling irritants',
            'Use fragrance-free products',
            'Wash contaminated area promptly',
            'Patch test new products',
            'Use barrier creams',
            'Moisturize regularly'
        ],
        remedies: {
            home: [
                'Cool water rinse',
                'Oatmeal bath',
                'Calamine lotion',
                'Cool compress',
                'Aloe vera gel',
                'Baking soda paste'
            ],
            allopathic: [
                'Topical corticosteroids',
                'Antihistamines',
                'Topical antibiotics',
                'Oral steroids (severe)',
                'Emollients',
                'Avoid irritant'
            ],
            ayurvedic: [
                'Neem leaf paste',
                'Turmeric and coconut oil',
                'Aloe vera with brahmi oil',
                'Cool herbs (Sandalwood)',
                'Triphala water bath',
                'Sesame oil massage'
            ]
        }
    },
    {
        id: 19,
        name: 'Pityriasis Versicolor',
        type: 'fungal',
        description: 'A fungal infection that affects skin pigmentation, causing light or dark patches on the skin. Also known as tinea versicolor.',
        causes: [
            'Malassezia fungus overgrowth',
            'Warm, humid climate',
            'Poor hygiene',
            'Weakened immune system',
            'Excessive sweating',
            'Oily skin',
            'Use of oily products'
        ],
        symptoms: [
            'Light or dark patches on skin',
            'Discolored patches (tan, brown, pink)',
            'Especially on chest and back',
            'Patches don\'t tan normally',
            'Mild itching or discomfort',
            'Patches may spread',
            'More visible in summer'
        ],
        prevention: [
            'Keep skin clean and dry',
            'Wear breathable clothing',
            'Avoid excessive sweating',
            'Use antifungal powder',
            'Shower after exercise',
            'Avoid oily products',
            'Regular skin care'
        ],
        remedies: {
            home: [
                'Vinegar application',
                'Tea tree oil',
                'Coconut oil',
                'Lemon juice',
                'Baking soda paste',
                'Neem oil'
            ],
            allopathic: [
                'Topical antifungal cream',
                'Ketoconazole shampoo',
                'Selenium sulfide lotion',
                'Oral antifungals',
                'Tolnaftate spray',
                'Miconazole cream'
            ],
            ayurvedic: [
                'Neem oil massage',
                'Turmeric paste',
                'Manjisthadi taila',
                'Karanja oil',
                'Sesame oil with turmeric',
                'Triphala powder'
            ]
        }
    },
    {
        id: 20,
        name: 'Melasma',
        type: 'inflammatory',
        description: 'A skin condition characterized by symmetric patches of hyperpigmentation, commonly on the face. It\'s more common in women and people with darker skin tones.',
        causes: [
            'Sun exposure (primary)',
            'Hormonal changes (pregnancy, OCP)',
            'Genetic predisposition',
            'Certain medications',
            'Skincare products (irritants)',
            'Thyroid disorders',
            'HRT use'
        ],
        symptoms: [
            'Symmetric brown patches on face',
            'Patches on cheeks, bridge of nose, forehead',
            'Sharp demarcation from normal skin',
            'Usually painless',
            'Appears gradually',
            'Worsens with sun exposure',
            'No systemic symptoms'
        ],
        prevention: [
            'Use high SPF sunscreen daily',
            'Wear protective clothing',
            'Avoid sun exposure',
            'Use wide-brimmed hat',
            'Avoid hormonal supplements',
            'Avoid photo-irritant cosmetics',
            'Seek shade'
        ],
        remedies: {
            home: [
                'Sunscreen application',
                'Vitamin C serum',
                'Kojic acid application',
                'Turmeric and milk',
                'Lemon and honey',
                'Aloe vera with honey'
            ],
            allopathic: [
                'Hydroquinone cream',
                'Tretinoin (vitamin A)',
                'Combination creams',
                'Chemical peels',
                'Laser therapy',
                'Microdermabrasion'
            ],
            ayurvedic: [
                'Neem oil massage',
                'Turmeric and milk mask',
                'Sandalwood paste',
                'Manjishtha (cooling)',
                'Brahmi oil massage',
                'Sesame oil with turmeric'
            ]
        }
    },
    {
        id: 21,
        name: 'Impetigo',
        type: 'bacterial',
        description: 'A highly contagious bacterial skin infection that appears as honey-colored crusts or blisters, typically affecting children. It\'s caused by streptococcal or staphylococcal bacteria.',
        causes: [
            'Streptococcal or staphylococcal bacteria',
            'Skin cuts or insect bites',
            'Poor hygiene',
            'Warm, humid climate',
            'Contact with infected person',
            'Eczema or dermatitis',
            'Crowded living conditions'
        ],
        symptoms: [
            'Small red bumps that turn to blisters',
            'Honey-colored or yellow crusts',
            'Fluid-filled blisters',
            'Itching or tenderness',
            'Commonly on face and limbs',
            'May be painless',
            'Spreads easily to other areas'
        ],
        prevention: [
            'Keep skin clean',
            'Treat cuts and insect bites',
            'Maintain good hygiene',
            'Avoid sharing personal items',
            'Keep nails short',
            'Don\'t scratch lesions',
            'Isolate infected person'
        ],
        remedies: {
            home: [
                'Honey application',
                'Salt water compress',
                'Tea tree oil',
                'Aloe vera gel',
                'Garlic paste',
                'Keep area clean and dry'
            ],
            allopathic: [
                'Topical antibiotics (Mupirocin)',
                'Oral antibiotics (widespread)',
                'Antiseptic solution',
                'Topical cloxacillin',
                'Oral amoxicillin-clavulanate',
                'Pain relief'
            ],
            ayurvedic: [
                'Neem leaf paste',
                'Turmeric and sesame oil',
                'Brahmi oil application',
                'Tulsi and honey',
                'Triphala water bath',
                'Ashwagandha supplement'
            ]
        }
    },
    {
        id: 22,
        name: 'Folliculitis',
        type: 'bacterial',
        description: 'An infection of hair follicles that causes red, inflamed bumps, often resembling acne. It can be caused by bacteria, fungi, or chemical irritation.',
        causes: [
            'Bacterial infection (Staphylococcus)',
            'Fungal infection',
            'Shaving or waxing',
            'Tight clothing',
            'Excessive sweating',
            'Poor hygiene',
            'Razor bumps'
        ],
        symptoms: [
            'Small red bumps around hair follicles',
            'Pustules or pus-filled bumps',
            'Itching or burning sensation',
            'Tender to touch',
            'Commonly on legs, underarms, face',
            'May drain fluid',
            'Can be painful'
        ],
        prevention: [
            'Use clean razors',
            'Avoid tight clothing',
            'Keep skin clean and dry',
            'Shave with grain',
            'Use proper shaving cream',
            'Avoid hot tubs',
            'Maintain good hygiene'
        ],
        remedies: {
            home: [
                'Warm compress',
                'Tea tree oil',
                'Aloe vera gel',
                'Honey application',
                'Turmeric paste',
                'Avoid irritation'
            ],
            allopathic: [
                'Topical antibiotics',
                'Oral antibiotics (severe)',
                'Antifungal cream (fungal)',
                'Topical corticosteroids',
                'Benzoyl peroxide',
                'Retinoid cream'
            ],
            ayurvedic: [
                'Neem oil massage',
                'Turmeric and sesame oil',
                'Brahmi oil application',
                'Triphala water bath',
                'Tulsi and honey',
                'Ashwagandha supplement'
            ]
        }
    },
    {
        id: 23,
        name: 'Cellulit is',
        type: 'bacterial',
        description: 'A serious bacterial skin infection that causes rapid spreading inflammation, redness, and warmth. It requires immediate medical attention as it can lead to serious complications.',
        causes: [
            'Streptococcal or staphylococcal bacteria',
            'Break in skin barrier',
            'Insect bites or cuts',
            'Surgery or injuries',
            'Weakened immune system',
            'Lymphedema',
            'Venous or lymphatic disease'
        ],
        symptoms: [
            'Rapid spreading redness',
            'Warmth and swelling',
            'Tender and painful',
            'Fever and chills',
            'Blistering or weeping',
            'Lymph node enlargement',
            'Systemic symptoms'
        ],
        prevention: [
            'Keep skin clean',
            'Treat cuts immediately',
            'Maintain good hygiene',
            'Maintain healthy immune system',
            'Avoid lymphedema',
            'Wear protective clothing',
            'Seek immediate medical care'
        ],
        remedies: {
            home: [
                'Rest and elevation',
                'Compression (if advised)',
                'MUST seek medical care',
                'Warm compress (early)',
                'Maintain cleanliness',
                'Monitor symptoms'
            ],
            allopathic: [
                'Oral antibiotics (urgent)',
                'IV antibiotics (severe)',
                'Early intervention critical',
                'Pain relief',
                'Fever management',
                'Possible hospitalization'
            ],
            ayurvedic: [
                'Must seek allopathic care first',
                'Turmeric after antibiotics',
                'Brahmi oil massage',
                'Neem leaf paste',
                'Cooling herbs',
                'Support immune system'
            ]
        }
    },
    {
        id: 24,
        name: 'Laser Hair Removal Effects',
        type: 'inflammatory',
        description: 'Temporary side effects and complications that can occur after laser hair removal treatments, though the procedure is generally safe.',
        causes: [
            'Improper laser settings',
            'Sensitive skin',
            'Sun exposure before/after',
            'Certain medications',
            'Hormonal factors',
            'Darker skin types',
            'Poor aftercare'
        ],
        symptoms: [
            'Redness and swelling',
            'Temporary hyperpigmentation',
            'Temporary hypopigmentation',
            'Blistering (rare)',
            'Scarring (rare)',
            'Eye damage (if improper)',
            'Ingrown hairs'
        ],
        prevention: [
            'Avoid sun before/after treatment',
            'Use SPF 30+ sunscreen',
            'Avoid tanning beds',
            'Don\'t pluck or wax before',
            'Use proper skin type settings',
            'Follow aftercare instructions',
            'Choose certified technician'
        ],
        remedies: {
            home: [
                'Cool compress',
                'Aloe vera gel',
                'Moisturizing lotion',
                'Hydration',
                'Avoid sun',
                'Loose clothing'
            ],
            allopathic: [
                'Topical corticosteroids',
                'Topical antibiotics',
                'Hydroquinone (pigmentation)',
                'Vitamin C serum',
                'Retinoids',
                'Professional treatment'
            ],
            ayurvedic: [
                'Aloe vera with brahmi oil',
                'Sandalwood paste',
                'Cooling herbs',
                'Turmeric and milk',
                'Sesame oil massage',
                'Brahmi oil cooling'
            ]
        }
    },
    {
        id: 25,
        name: 'Lichen Planus',
        type: 'inflammatory',
        description: 'An inflammatory skin condition that causes purple, flat-topped bumps on the skin, often accompanied by itching. It can also affect the mouth and nails.',
        causes: [
            'Unknown (autoimmune suspected)',
            'Genetic predisposition',
            'Viral infections',
            'Hepatitis C exposure',
            'Stress',
            'Certain medications',
            'Chemical exposure'
        ],
        symptoms: [
            'Purple, flat-topped bumps',
            'White lacey patterns in mouth',
            'Intense itching',
            'Polygonal lesions',
            'Often on wrists and legs',
            'Nails may become thin/ridged',
            'Hair loss possible'
        ],
        prevention: [
            'Avoid irritants',
            'Manage stress',
            'Protect from sun',
            'Use gentle skincare',
            'Avoid trauma to skin',
            'Get hepatitis screening',
            'Maintain good hygiene'
        ],
        remedies: {
            home: [
                'Cool compress',
                'Aloe vera gel',
                'Turmeric paste',
                'Calamine lotion',
                'Stress reduction',
                'Moisturizing creams'
            ],
            allopathic: [
                'Topical corticosteroids',
                'Topical retinoids',
                'Oral corticosteroids',
                'Antihistamines',
                'Topical calcineurin inhibitors',
                'Topical immunosuppressants'
            ],
            ayurvedic: [
                'Neem leaf paste',
                'Turmeric and coconut oil',
                'Brahmi oil massage',
                'Cooling herbs (Manjishtha)',
                'Triphala supplement',
                'Ashwagandha for stress'
            ]
        }
    },
    {
        id: 26,
        name: 'Pityriasis Alba',
        type: 'inflammatory',
        description: 'A mild, common skin condition characterized by pale patches, particularly in children with darker skin. It\'s associated with eczema and appears after inflammatory lesions heal.',
        causes: [
            'Mild eczema or dermatitis',
            'Sun exposure',
            'Dry skin',
            'Genetic predisposition',
            'Nutritional deficiency',
            'Post-inflammatory hypopigmentation',
            'More visible in darker skin'
        ],
        symptoms: [
            'Pale patches on face and neck',
            'Fine scaling on patches',
            'Slightly raised lesions initially',
            'No symptoms (asymptomatic)',
            'Borders less defined',
            'Improves with treatment',
            'Cosmetic concern mainly'
        ],
        prevention: [
            'Keep skin moisturized',
            'Avoid harsh soaps',
            'Use gentle cleansers',
            'Reduce sun exposure',
            'Address underlying eczema',
            'Use appropriate skincare',
            'Maintain hydration'
        ],
        remedies: {
            home: [
                'Emollient creams',
                'Coconut oil massage',
                'Aloe vera gel',
                'Honey mask',
                'Sunscreen application',
                'Hydrated skin care'
            ],
            allopathic: [
                'Topical corticosteroids',
                'Emollients',
                'Topical calcineurin inhibitors',
                'Sunscreen SPF 30+',
                'Treat underlying eczema',
                'Phototherapy'
            ],
            ayurvedic: [
                'Sesame oil massage',
                'Turmeric and coconut oil',
                'Aloe vera with brahmi oil',
                'Brahmi oil application',
                'Cooling herbs',
                'Triphala supplement'
            ]
        }
    },
    {
        id: 27,
        name: 'Henoch-Schönlein Purpura',
        type: 'inflammatory',
        description: 'A systemic vasculitis that affects the skin and other organs, causing purpura (purple spots) on the legs and buttocks. It\'s more common in children.',
        causes: [
            'Autoimmune vasculitis',
            'Infection trigger (strep, viral)',
            'Genetic predisposition',
            'Medications possibly',
            'Unknown exact cause',
            'IgA immune complex deposition',
            'Post-infectious'
        ],
        symptoms: [
            'Purple purpura on legs/buttocks',
            'Abdominal pain',
            'Joint pain and swelling',
            'Hematuria (blood in urine)',
            'Fever',
            'Rash appears in crops',
            'Systemic symptoms'
        ],
        prevention: [
            'Treat infections promptly',
            'Manage underlying conditions',
            'Avoid triggering medications',
            'Monitor symptoms closely',
            'Regular medical checkups',
            'Screen for complications',
            'Early intervention'
        ],
        remedies: {
            home: [
                'Rest and elevation',
                'Cool compress',
                'Pain relief (non-aspirin)',
                'Monitor urine output',
                'Maintain hydration',
                'Supportive care'
            ],
            allopathic: [
                'Corticosteroids',
                'NSAIDs (if tolerated)',
                'Immunosuppressants',
                'Monitor for complications',
                'Rheumatology referral',
                'Urinalysis monitoring'
            ],
            ayurvedic: [
                'Turmeric supplement',
                'Cooling herbs',
                'Brahmi oil massage',
                'Triphala supplement',
                'Support immune system',
                'Gentian and other cooling'
            ]
        }
    },
    {
        id: 28,
        name: 'Tinea Cruris',
        type: 'fungal',
        description: 'A fungal infection of the groin area, also known as \'jock itch\'. It\'s characterized by itching and redness in the groin and inner thigh areas.',
        causes: [
            'Trichophyton rubrum fungus',
            'Warm, moist environment',
            'Poor hygiene',
            'Excessive sweating',
            'Tight clothing',
            'Weakened immune system',
            'Sharing contaminated items'
        ],
        symptoms: [
            'Red, scaly rash in groin',
            'Itching and burning sensation',
            'Ring-shaped lesions',
            'Maceration of skin',
            'May spread to abdomen/thighs',
            'Worse with moisture',
            'Unpleasant odor possible'
        ],
        prevention: [
            'Keep area dry',
            'Wear breathable underwear',
            'Change out of wet clothes',
            'Use antifungal powder',
            'Maintain good hygiene',
            'Avoid tight clothing',
            'Use separate towels'
        ],
        remedies: {
            home: [
                'Vinegar application',
                'Tea tree oil',
                'Coconut oil',
                'Baking soda powder',
                'Lemon juice',
                'Neem oil'
            ],
            allopathic: [
                'Topical antifungal cream',
                'Miconazole cream',
                'Terbinafine',
                'Tolnaftate spray',
                'Oral antifungals',
                'Antifungal powder'
            ],
            ayurvedic: [
                'Neem oil massage',
                'Turmeric powder paste',
                'Manjisthadi taila',
                'Sesame oil with turmeric',
                'Karanja oil',
                'Triphala powder'
            ]
        }
    },
    {
        id: 29,
        name: 'Pityriasis Steatoides',
        type: 'inflammatory',
        description: 'A seborrheic dermatitis-like condition characterized by oily, scaly patches, usually on the scalp and face. It\'s related to sebaceous gland dysfunction.',
        causes: [
            'Malassezia yeast overgrowth',
            'Sebaceous gland dysfunction',
            'Poor hygiene',
            'Stress',
            'Cold, dry weather',
            'Genetic predisposition',
            'Neurological conditions'
        ],
        symptoms: [
            'Oily, scaly patches',
            'Yellow or brownish scales',
            'Itching scalp',
            'Redness on scalp',
            'Hair loss possible',
            'Flakes in hair and clothing',
            'Mild odor'
        ],
        prevention: [
            'Regular shampooing',
            'Antifungal shampoo',
            'Manage stress',
            'Avoid harsh products',
            'Maintain scalp hygiene',
            'Use gentle cleansers',
            'Healthy diet'
        ],
        remedies: {
            home: [
                'Tea tree oil shampoo',
                'Apple cider vinegar rinse',
                'Neem oil massage',
                'Coconut oil treatment',
                'Honey and olive oil',
                'Lemon juice rinse'
            ],
            allopathic: [
                'Ketoconazole shampoo',
                'Selenium sulfide lotion',
                'Zinc pyrithione',
                'Salicylic acid shampoo',
                'Topical corticosteroids',
                'Antifungal solutions'
            ],
            ayurvedic: [
                'Neem oil massage',
                'Brahmi oil with turmeric',
                'Sesame oil massage',
                'Triphala powder treatment',
                'Tulsi and coconut oil',
                'Manjisthadi taila'
            ]
        }
    },
    {
        id: 30,
        name: 'Necrobiotic Xanthogranuloma',
        type: 'inflammatory',
        description: 'A rare granulomatous skin condition that typically affects the periorbital area and is often associated with multiple myeloma or other blood disorders.',
        causes: [
            'Associated with multiple myeloma',
            'Monoclonal immunoglobulin (IgG)',
            'Autoimmune response',
            'Genetic predisposition',
            'Unknown exact mechanism',
            'Associated malignancy',
            'Granulomatous reaction'
        ],
        symptoms: [
            'Red or yellow papules',
            'Around eyes (periorbital)',
            'Nodules and plaques',
            'Non-pruritic usually',
            'Progressive disease',
            'May ulcerate',
            'Systemic symptoms if malignancy'
        ],
        prevention: [
            'Screen for malignancy',
            'Manage underlying conditions',
            'Regular medical checkups',
            'Protect affected areas',
            'Avoid known triggers',
            'Monitor for progression',
            'Early treatment'
        ],
        remedies: {
            home: [
                'Protect affected area',
                'Cool compress',
                'Gentle skincare',
                'Manage underlying disease',
                'Monitor symptoms',
                'Follow medical advice'
            ],
            allopathic: [
                'Topical corticosteroids',
                'Oral steroids (systemic)',
                'Treat underlying malignancy',
                'Chemotherapy agents',
                'Surgical excision',
                'Systemic treatment'
            ],
            ayurvedic: [
                'Supportive therapy',
                'Turmeric supplement',
                'Brahmi and other cooling',
                'Immune support',
                'Ashwagandha',
                'Triphala supplement'
            ]
        }
    }
];

// Fun Facts/Tips
const tips = [
    'The largest organ of your body is your skin, covering about 16 feet of surface area!',
    'Your skin sheds approximately 30,000 to 40,000 dead cells every minute.',
    'Humans shed about 1.5 pounds of skin cells per year.',
    'Your skin has three layers: the epidermis, dermis, and hypodermis.',
    'The skin on your hands and feet has no sebaceous glands (no oil glands).',
    'Skin can heal from cuts and abrasions without leaving permanent scars in most cases.',
    'Your skin contains about 19 million skin cells and can regenerate itself every 28 days.',
    'The average person has about 1,500 to 2,000 sweat glands per square inch of skin.',
    'Your fingerprints are unique and never change throughout your lifetime.',
    'Dark circles under eyes are usually caused by blood vessels showing through thin skin.'
];

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initEducationModule);

function initEducationModule() {
    loadLanguage();
    loadUserName();
    setupEventListeners();
    displayDiseases();
    rotateRandomTip();
    loadBookmarks();
}

function setupEventListeners() {
    // Back button
    document.getElementById('backBtn').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });

    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        window.location.href = 'index.html';
    });

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', filterDiseases);

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterDiseases();
        });
    });

    // Next tip button
    document.getElementById('nextTipBtn').addEventListener('click', rotateRandomTip);

    document.getElementById('diseasesGrid').addEventListener('click', (event) => {
        const button = event.target.closest('button');
        const card = button && button.closest('.disease-card');
        if (!button || !card) return;

        const diseaseId = Number(card.dataset.diseaseId);
        if (button.classList.contains('card-btn')) {
            openDiseaseModal(diseaseId);
        } else if (button.classList.contains('card-bookmark-btn')) {
            toggleBookmark(event, diseaseId);
        }
    });

    document.getElementById('bookmarksList').addEventListener('click', (event) => {
        const button = event.target.closest('button[data-disease-id]');
        if (button) openDiseaseModal(Number(button.dataset.diseaseId));
    });

    document.getElementById('bookmarkBtn').addEventListener('click', () => {
        const disease = getOpenDisease();
        if (disease) toggleBookmark(null, disease.id);
    });
    document.getElementById('shareBtn').addEventListener('click', () => {
        const disease = getOpenDisease();
        if (disease) shareDisease(disease);
    });
    document.getElementById('printBtn').addEventListener('click', () => {
        const disease = getOpenDisease();
        if (disease) printDisease(disease);
    });

    // Modal close button
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);

    // Modal background click
    document.getElementById('diseaseModal').addEventListener('click', (e) => {
        if (e.target.id === 'diseaseModal') {
            closeModal();
        }
    });

    // Clear bookmarks button
    document.getElementById('clearBookmarksBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all bookmarks?')) {
            localStorage.removeItem('bookmarkedDiseases');
            loadBookmarks();
            displayDiseases();
        }
    });

    // Remedy tabs
    document.querySelectorAll('.remedy-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.remedy-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            updateRemediesDisplay(e.target.dataset.remedy);
        });
    });
}

function loadUserName() {
    const userName = localStorage.getItem('userName') || 'User';
    // Note: Update this if your HTML structure requires it
}

function displayDiseases() {
    const grid = document.getElementById('diseasesGrid');
    grid.innerHTML = '';

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    const bookmarkedDiseases = JSON.parse(localStorage.getItem('bookmarkedDiseases') || '[]');

    const filtered = diseaseDatabase.filter(disease => {
        const matchesSearch = disease.name.toLowerCase().includes(searchTerm) ||
                            disease.description.toLowerCase().includes(searchTerm);
        const matchesFilter = activeFilter === 'all' || disease.type === activeFilter;
        return matchesSearch && matchesFilter;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999; padding: 40px 20px;">No diseases found matching your search.</p>';
        return;
    }

    filtered.forEach(disease => {
        const isBookmarked = bookmarkedDiseases.includes(disease.id);
        const card = document.createElement('div');
        card.className = 'disease-card';
        card.dataset.diseaseId = disease.id;
        card.innerHTML = `
            <div class="disease-card-header">
                <h3>${disease.name}</h3>
                <span class="disease-type-badge">${disease.type.charAt(0).toUpperCase() + disease.type.slice(1)}</span>
            </div>
            <div class="disease-card-body">
                <p class="disease-card-description">${disease.description}</p>
                <div class="disease-card-footer">
                    <button class="card-btn" type="button">Read More</button>
                    <button class="card-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" type="button" title="Bookmark this disease">
                        🔖
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterDiseases() {
    displayDiseases();
}

function openDiseaseModal(diseaseId) {
    const disease = diseaseDatabase.find(d => d.id === diseaseId);
    if (!disease) return;

    const modalDiseaseName = document.getElementById('modalDiseaseName');
    modalDiseaseName.textContent = disease.name;
    modalDiseaseName.dataset.diseaseId = disease.id;
    document.getElementById('modalDiseaseDescription').textContent = disease.description;

    // Populate causes
    const causesList = document.getElementById('modalDiseaseCauses');
    causesList.innerHTML = disease.causes.map(cause => `<li>${cause}</li>`).join('');

    // Populate symptoms
    const symptomsList = document.getElementById('modalDiseaseSymptoms');
    symptomsList.innerHTML = disease.symptoms.map(symptom => `<li>${symptom}</li>`).join('');

    // Populate prevention
    const preventionList = document.getElementById('modalDiseasePrevention');
    preventionList.innerHTML = disease.prevention.map(prevention => `<li>${prevention}</li>`).join('');

    // Set up bookmark button
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    const bookmarkedDiseases = JSON.parse(localStorage.getItem('bookmarkedDiseases') || '[]');
    const isBookmarked = bookmarkedDiseases.includes(diseaseId);
    bookmarkBtn.classList.toggle('bookmarked', isBookmarked);

    // Set up remedies (default to home)
    document.querySelectorAll('.remedy-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.remedy === 'home') tab.classList.add('active');
    });
    updateRemediesDisplay('home', disease);

    document.getElementById('diseaseModal').classList.remove('hidden');
}

function getOpenDisease() {
    const diseaseId = Number(document.getElementById('modalDiseaseName').dataset.diseaseId);
    return diseaseDatabase.find(disease => disease.id === diseaseId);
}

function updateRemediesDisplay(remedyType, disease = null) {
    const diseaseId = parseInt(document.getElementById('modalDiseaseName').getAttribute('data-id') ||
        diseaseDatabase.find(d => d.name === document.getElementById('modalDiseaseName').textContent)?.id);
   
    if (!disease) {
        disease = diseaseDatabase.find(d => d.id === diseaseId);
    }

    if (!disease) {
        const remedies = document.getElementById('modalDiseaseRemedies');
        diseaseDatabase.forEach((d, index) => {
            if (d.name === document.getElementById('modalDiseaseName').textContent) {
                disease = d;
            }
        });
    }

    const remedies = document.getElementById('modalDiseaseRemedies');
    if (disease && disease.remedies[remedyType]) {
        remedies.innerHTML = disease.remedies[remedyType]
            .map(remedy => `<li>${remedy}</li>`)
            .join('');
    }
}

// Override updateRemediesDisplay to work with modal properly
function updateRemediesDisplay(remedyType) {
    const diseaseName = document.getElementById('modalDiseaseName').textContent;
    const disease = diseaseDatabase.find(d => d.name === diseaseName);
   
    if (disease && disease.remedies[remedyType]) {
        const remedies = document.getElementById('modalDiseaseRemedies');
        remedies.innerHTML = disease.remedies[remedyType]
            .map(remedy => `<li>${remedy}</li>`)
            .join('');
    }
}

function closeModal() {
    document.getElementById('diseaseModal').classList.add('hidden');
}

function toggleBookmark(event, diseaseId) {
    if (event) {
        event.stopPropagation();
    }
   
    let bookmarkedDiseases = JSON.parse(localStorage.getItem('bookmarkedDiseases') || '[]');
   
    if (bookmarkedDiseases.includes(diseaseId)) {
        bookmarkedDiseases = bookmarkedDiseases.filter(id => id !== diseaseId);
    } else {
        bookmarkedDiseases.push(diseaseId);
    }
   
    localStorage.setItem('bookmarkedDiseases', JSON.stringify(bookmarkedDiseases));
    displayDiseases();
    loadBookmarks();
   
    // Keep the modal's bookmark state in sync when its disease is bookmarked.
    const modalDiseaseName = document.getElementById('modalDiseaseName');
    if (!document.getElementById('diseaseModal').classList.contains('hidden') &&
        Number(modalDiseaseName.dataset.diseaseId) === diseaseId) {
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        bookmarkBtn.classList.toggle('bookmarked', bookmarkedDiseases.includes(diseaseId));
    }
}

function loadBookmarks() {
    const bookmarkedDiseases = JSON.parse(localStorage.getItem('bookmarkedDiseases') || '[]');
    const bookmarksList = document.getElementById('bookmarksList');
    const bookmarksSection = document.getElementById('bookmarksSection');
   
    if (bookmarkedDiseases.length === 0) {
        bookmarksList.innerHTML = '<p>No bookmarks yet. Click the 🔖 icon on any disease to save it.</p>';
        bookmarksSection.classList.add('hidden');
        return;
    }
   
    bookmarksSection.classList.remove('hidden');
    bookmarksList.innerHTML = '';
   
    bookmarkedDiseases.forEach(id => {
        const disease = diseaseDatabase.find(d => d.id === id);
        if (disease) {
            const item = document.createElement('div');
            item.className = 'bookmark-item';
            item.innerHTML = `
                <div>
                    <h4>${disease.name}</h4>
                    <p>${disease.type}</p>
                </div>
                <button class="card-btn" type="button" data-disease-id="${disease.id}">View</button>
            `;
            bookmarksList.appendChild(item);
        }
    });
}

function rotateRandomTip() {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('tipContent').textContent = randomTip;
}

function shareDisease(disease) {
    const text = `Check out "${disease.name}" in the Skin Disease Detection Educational Module! ${disease.description}`;
   
    if (navigator.share) {
        navigator.share({
            title: disease.name,
            text: text
        }).catch(err => console.log('Share failed:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            alert('Disease information copied to clipboard!');
        });
    }
}

function printDisease(disease) {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write(`
        <html>
        <head>
            <title>${disease.name}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { color: #667eea; }
                h2 { color: #764ba2; margin-top: 20px; }
                ul { line-height: 1.8; }
            </style>
        </head>
        <body>
            <h1>${disease.name}</h1>
            <p><strong>Type:</strong> ${disease.type}</p>
            <p><strong>Description:</strong> ${disease.description}</p>
           
            <h2>Causes</h2>
            <ul>${disease.causes.map(c => `<li>${c}</li>`).join('')}</ul>
           
            <h2>Symptoms</h2>
            <ul>${disease.symptoms.map(s => `<li>${s}</li>`).join('')}</ul>
           
            <h2>Prevention Tips</h2>
            <ul>${disease.prevention.map(p => `<li>${p}</li>`).join('')}</ul>
           
            <h2>Home Remedies</h2>
            <ul>${disease.remedies.home.map(r => `<li>${r}</li>`).join('')}</ul>
           
            <h2>Allopathic Treatments</h2>
            <ul>${disease.remedies.allopathic.map(r => `<li>${r}</li>`).join('')}</ul>
           
            <h2>Ayurvedic Remedies</h2>
            <ul>${disease.remedies.ayurvedic.map(r => `<li>${r}</li>`).join('')}</ul>
           
            <p style="margin-top: 40px; color: #999; font-size: 12px;">
                Generated from Skin Disease Detection Educational Module
            </p>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

function loadLanguage() {
    const userLanguage = localStorage.getItem('language') || 'en';
    // Translations are handled by translations.js
    translatePage(userLanguage);
}

function translatePage(lang) {
    // This function will be called by translations.js
    if (window.applyTranslations) {
        window.applyTranslations(lang);
    }
}

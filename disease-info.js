const diseaseInfoDatabase = [
    {
        name: 'Acne',
        description: 'Acne is a common skin condition that happens when hair follicles become clogged with oil and dead skin cells. It often appears on the face, chest, neck, or back.',
        symptoms: [
            'Blackheads or whiteheads',
            'Red or painful pimples',
            'Pustules or cysts',
            'Oily skin or skin that feels clogged',
            'Marks or dark spots after acne heals'
        ],
        causes: [
            'Excess oil production',
            'Blocked pores',
            'Bacterial growth in skin follicles',
            'Hormonal changes',
            'Stress and poor sleep in some people',
            'Certain skincare products or medicines'
        ],
        prevention: [
            'Wash the face gently twice daily',
            'Use non-comedogenic skincare products',
            'Avoid picking or squeezing pimples',
            'Keep the skin clean and avoid heavy oil-based products',
            'Consult a dermatologist if acne is persistent or painful'
        ],
        whenToConsult: [
            'If acne is painful, spreading quickly, or leaving scars',
            'If the rash is severe or does not improve with general skin care',
            'If there are signs of skin infection such as warmth, swelling, or pus'
        ],
        allopathic: [
            'Common medical approaches include topical treatments such as benzoyl peroxide, salicylic acid, or retinoids.',
            'Doctors may also consider topical or oral antibiotics in selected cases, depending on the type and severity of acne.',
            'Treatment depends on the individual condition and should be discussed with a qualified healthcare professional.'
        ],
        ayurvedic: [
            'Many people discuss gentle traditional practices such as neem, turmeric, aloe vera, and herbal face packs for oily skin and acne-prone skin.',
            'These are general traditional practices and are not a guarantee of treatment or cure.',
            'People should consult a qualified Ayurvedic practitioner before using remedies, especially if they are taking other medicines.'
        ],
        homeopathic: [
            'Homeopathic information is often discussed in a general educational sense, but homeopathy is not proven to cure acne.',
            'It should not replace evidence-based medical care for persistent or severe acne.',
            'Any medical concerns should be discussed with a qualified healthcare professional.'
        ],
        disclaimer: 'This educational information is not a diagnosis and should not replace advice from a qualified dermatologist or doctor.'
    },
    {
        name: 'Eczema',
        description: 'Eczema is a chronic skin condition that causes dry, itchy, inflamed skin. It can flare up due to irritation, allergy, dry weather, or stress.',
        symptoms: [
            'Itching and burning',
            'Dry, scaly, or cracked skin',
            'Red patches or inflamed areas',
            'Small raised bumps or blisters',
            'Skin that feels sensitive or irritated'
        ],
        causes: [
            'Dry skin barrier',
            'Allergens or irritants',
            'Stress',
            'Temperature changes or harsh soaps',
            'Family history of eczema',
            'Skin infections can sometimes worsen symptoms'
        ],
        prevention: [
            'Keep the skin moisturized',
            'Avoid harsh soaps, detergents, and fragranced products',
            'Use gentle clothing and avoid scratching',
            'Manage stress and identify triggers',
            'Take short, lukewarm baths or showers'
        ],
        whenToConsult: [
            'If the rash is severe, spreading, or causing intense itching',
            'If the skin becomes cracked, infected, or painful',
            'If eczema starts affecting sleep or daily life'
        ],
        allopathic: [
            'Common medical approaches include emollients, topical corticosteroids, and antihistamines for symptom control.',
            'A dermatologist may advise other treatment options depending on the severity and location of eczema.',
            'Treatment depends on the individual and should be guided by a qualified healthcare professional.'
        ],
        ayurvedic: [
            'General traditional practices may include aloe vera, neem, coconut oil, turmeric, and soothing herbal applications.',
            'These are traditional practices and are not proven cures for eczema.',
            'Users should consult a qualified Ayurvedic practitioner before using remedies, especially alongside other medicines.'
        ],
        homeopathic: [
            'Homeopathic information is presented for general education only and is not proven to cure eczema.',
            'It should not replace evidence-based treatment for persistent or severe eczema.',
            'Consult a qualified healthcare professional for diagnosis and treatment guidance.'
        ],
        disclaimer: 'This educational information is not a diagnosis and should not replace treatment advice from a physician or dermatologist.'
    },
    {
        name: 'Leprosy',
        description: 'Leprosy is a chronic infectious disease caused by Mycobacterium leprae. It can affect the skin, nerves, and sometimes the eyes. Early evaluation is important.',
        symptoms: [
            'Skin patches with reduced or changed sensation',
            'Numbness or reduced feeling in affected areas',
            'Thickened nerves in some cases',
            'Loss of sweating in patches',
            'Lumps or skin changes in some cases'
        ],
        causes: [
            'Infection with Mycobacterium leprae',
            'Close and prolonged contact in some situations',
            'Poor overall health or poor nutrition in some settings',
            'Delayed medical evaluation'
        ],
        prevention: [
            'Seek early medical evaluation for persistent skin patches',
            'Avoid close contact with untreated active cases',
            'Practice good hygiene and avoid sharing personal items',
            'Follow the advice of a healthcare professional promptly'
        ],
        whenToConsult: [
            'If there are persistent skin patches with numbness or altered sensation',
            'If there is a new patch that does not heal or keeps spreading',
            'If there are signs of nerve involvement such as weakness or numbness'
        ],
        allopathic: [
            'Medical treatment usually follows standard case-based management and may include multi-drug therapy under the guidance of a qualified doctor.',
            'Treatment decisions depend on the type and severity of the condition and should be managed by healthcare professionals.',
            'Do not self-treat or stop treatment without qualified medical advice.'
        ],
        ayurvedic: [
            'Traditional information may mention herbs and lifestyle measures for general wellness, but Ayurveda is not a substitute for evidence-based care for leprosy.',
            'People should seek qualified medical care and consult a qualified Ayurvedic practitioner before using remedies alongside treatment.',
            'This information is educational only.'
        ],
        homeopathic: [
            'Homeopathic approaches are discussed only as general educational information and are not proven to treat leprosy.',
            'This is not a replacement for evidence-based medical care.',
            'Anyone with a persistent suspicious skin change should seek urgent professional evaluation.'
        ],
        disclaimer: 'Leprosy needs timely professional evaluation. This educational information is not a substitute for medical diagnosis or treatment.'
    },
    {
        name: 'Melasma',
        description: 'Melasma is a common skin pigmentation condition that causes brown or gray-brown patches, usually on the face. It is often related to sun exposure and hormonal changes.',
        symptoms: [
            'Brown or gray-brown patches on the face',
            'Often seen on cheeks, forehead, nose, and upper lip',
            'Worsening with sun exposure',
            'Patchy pigmentation that may be symmetric'
        ],
        causes: [
            'Sun exposure',
            'Hormonal changes',
            'Pregnancy or hormonal medicines in some cases',
            'Skin type and genetics',
            'Irritation or heat-related skin inflammation'
        ],
        prevention: [
            'Use sunscreen with broad-spectrum protection',
            'Avoid direct strong sunlight when possible',
            'Use gentle skincare and avoid harsh scrubs',
            'Consult a dermatologist before trying strong skin-lightening products'
        ],
        whenToConsult: [
            'If the pigmentation is spreading rapidly or changing shape',
            'If there are new or irregular patches that look different from usual',
            'If you are unsure whether the area is caused by pigmentation or another condition'
        ],
        allopathic: [
            'Common medical approaches include sunscreen use, topical agents, and sometimes procedures under a dermatologist’s guidance.',
            'Doctors may suggest treatment based on the skin type, depth of pigmentation, and treatment tolerance.',
            'Treatment depends on the individual and should be discussed with a qualified healthcare professional.'
        ],
        ayurvedic: [
            'General traditional practices may include natural oils, turmeric, sandalwood, and soothing masks; these are not proven cures for melasma.',
            'Any remedy may irritate the skin and should be used carefully.',
            'Consult a qualified Ayurvedic practitioner before using remedies, especially if you have sensitive skin.'
        ],
        homeopathic: [
            'Homeopathic information is presented as general educational information only and is not proven to treat melasma.',
            'It should not replace evidence-based care for skin pigmentation concerns.',
            'A dermatologist can help assess the cause and advise suitable treatment.'
        ],
        disclaimer: 'This educational information is not a diagnosis and should not replace evaluation by a dermatologist or doctor.'
    },
    {
        name: 'Psoriasis',
        description: 'Psoriasis is a chronic skin condition that causes red, scaly patches on the skin. It is linked to an overactive immune response and may come and go.',
        symptoms: [
            'Red patches with silvery or white scales',
            'Dry and flaky skin',
            'Itching or burning',
            'Cracked skin',
            'Sometimes thickened nails or joint pain'
        ],
        causes: [
            'Immune system activation',
            'Genetics',
            'Stress triggers',
            'Skin injuries or infections',
            'Some medicines may worsen symptoms'
        ],
        prevention: [
            'Manage stress and get adequate rest',
            'Avoid skin trauma and harsh scratching',
            'Keep the skin moisturized',
            'Protect the skin from sudden temperature changes'
        ],
        whenToConsult: [
            'If the scales are widespread, painful, or affecting the quality of life',
            'If the rash is spreading quickly or does not improve',
            'If there is joint pain, swelling, or significant irritation'
        ],
        allopathic: [
            'Common approaches include topical medications, phototherapy, and sometimes systemic treatment depending on the severity and body area involved.',
            'Doctors may provide a tailored plan for long-term control and symptom relief.',
            'Treatment should be guided by a qualified healthcare professional.'
        ],
        ayurvedic: [
            'Traditional approaches may include oils, herbal pastes, and lifestyle practices that are often discussed in general wellness contexts.',
            'These are not proven cures for psoriasis and may not be suitable for every person.',
            'Consult a qualified Ayurvedic practitioner before using remedies, especially alongside other medicines.'
        ],
        homeopathic: [
            'Homeopathic information is educational only and not proven to treat psoriasis.',
            'It should not replace evidence-based management for chronic or widespread psoriasis.',
            'People with persistent symptoms should consult a qualified healthcare professional.'
        ],
        disclaimer: 'This educational information is not a diagnosis and should not replace advice from a doctor or dermatologist.'
    },
    {
        name: 'Ringworm',
        description: 'Ringworm is a contagious fungal skin infection that forms a ring-shaped rash. It is caused by fungi and can spread by skin contact or contaminated objects.',
        symptoms: [
            'Ring-shaped red patches',
            'Itching or burning',
            'Scaly or cracked skin',
            'Rash that may spread',
            'Sometimes redness around the edges and clearer center'
        ],
        causes: [
            'Fungal infection',
            'Direct skin-to-skin contact',
            'Contact with infected animals or shared items',
            'Warm and humid conditions',
            'Poor hygiene or skin irritation'
        ],
        prevention: [
            'Keep skin clean and dry',
            'Avoid sharing towels, clothes, or personal items',
            'Treat pets or surfaces if there is concern',
            'Avoid scratching affected areas',
            'Seek medical care if the rash is spreading'
        ],
        whenToConsult: [
            'If the rash is spreading, painful, or worsening',
            'If the patch is on the scalp, face, or genital area',
            'If the person has diabetes, a weak immune system, or repeated infections'
        ],
        allopathic: [
            'Medical treatment usually includes topical or oral antifungal medicines depending on the skin area and severity.',
            'The right treatment depends on the type and location of the infection and should be guided by a qualified healthcare professional.',
            'Do not continue or stop treatment without guidance from a doctor.'
        ],
        ayurvedic: [
            'General traditional practices may include neem, turmeric, or herbal oils, but these are not proven cures for fungal skin infection.',
            'They should not replace medical evaluation or treatment for a spreading rash.',
            'Consult a qualified Ayurvedic practitioner before using remedies, especially with other medicines.'
        ],
        homeopathic: [
            'Homeopathic information is presented only as general educational information and is not a proven treatment for ringworm.',
            'It should not replace evidence-based fungal treatment.',
            'Seek professional medical care for a suspicious or spreading rash.'
        ],
        disclaimer: 'Because ringworm can spread, professional medical evaluation is important. This information is educational only and not a diagnosis.'
    },
    {
        name: 'Warts',
        description: 'Warts are small growths on the skin caused by the human papillomavirus (HPV). They are usually harmless but can be unsightly or uncomfortable.',
        symptoms: [
            'Small rough growths on the skin',
            'Skin-coloured or brown raised bumps',
            'Warts may be on the hands, feet, or other areas',
            'Sometimes black dots appear inside the wart',
            'May be painful or irritated with friction'
        ],
        causes: [
            'HPV infection',
            'Skin contact with an infected person or surface',
            'Damaged or broken skin',
            'Warm, moist conditions',
            'Weak immune function in some people'
        ],
        prevention: [
            'Avoid touching warts on other people',
            'Do not share towels or personal items',
            'Keep feet dry and avoid walking barefoot in shared spaces',
            'Do not pick or scratch the wart'
        ],
        whenToConsult: [
            'If the wart is painful, spreading, or changing color or shape',
            'If it appears on the face or genitals',
            'If it keeps returning after prior treatment'
        ],
        allopathic: [
            'Common medical approaches include salicylic acid, freezing therapy, laser treatment, or removal by a clinician.',
            'The most suitable option depends on the wart type, location, and skin condition.',
            'Treatment should be discussed with a qualified healthcare professional.'
        ],
        ayurvedic: [
            'General traditional practices may include herbal pastes or soothing oils, but these are not proven cures for warts.',
            'People should consult a qualified Ayurvedic practitioner before using remedies, especially if the wart is painful or changing.',
            'Do not rely only on home remedies for a changing skin growth.'
        ],
        homeopathic: [
            'Homeopathic information is educational only and not proven to cure warts.',
            'It should not replace evidence-based medical care for persistent or changing growths.',
            'If a growth changes or becomes painful, consult a qualified healthcare professional.'
        ],
        disclaimer: 'This educational information is not a diagnosis and should not replace professional medical assessment for changing skin growths.'
    }
];

const diseaseInfoMap = diseaseInfoDatabase.reduce((map, disease) => {
    map[disease.name.toLowerCase()] = disease;
    return map;
}, {});

function getDiseaseInfoByName(diseaseName) {
    if (!diseaseName) return null;
    return diseaseInfoMap[String(diseaseName).trim().toLowerCase()] || null;
}

const skinEssentialProducts = [
    {
        id: 'oat-gentle-cleanser',
        name: 'Oat & Ceramide Gentle Cleanser',
        brand: 'Dr. Sheth',
        size: '125 ml',
        category: 'cleanser',
        label: 'Cleanser',
        skinType: 'Dry, sensitive',
        price: 359,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5CyidvaaviIxBPt-LUQTr49HQLoBjuCQjn3L_ak2p0tiuX--oPSU8Uol9hKoxLCKf0Am39a4KRpERTQ0txXVOhwVj9wvZJwGk8n8kLTf231TkGmifzAtsxYYu_1w8zCynkMktWRs&usqp=CAc',
        description: 'A mild, fragrance-free daily cleanser for a comfortable-feeling wash.'
    },
    {
        id: 'rice-water-cleanser',
        name: 'Rice Water Cream Cleanser',
        brand: 'Dewdrop',
        size: '100 ml',
        category: 'cleanser',
        label: 'Cleanser',
        skinType: 'Normal, dry',
        price: 625,
        image: 'https://thefaceshop.in/cdn/shop/files/1_45894e96-3c7d-425e-9337-071aa239a0aa.jpg?v=1790592102',
        description: 'A creamy rinse-off cleanser for a simple morning or evening routine.'
    },
    {
        id: 'green-tea-gel-cleanser',
        name: 'Green Tea Balancing Gel Cleanser',
        brand: 'Isntree',
        size: '120 ml',
        category: 'cleanser',
        label: 'Cleanser',
        skinType: 'Oily, combination',
        price: 875,
        image: 'https://m.media-amazon.com/images/I/51FjO8xY1FL.jpg',
        description: 'A fresh gel cleanser made for a light, non-stripping cleanse.'
    },
    {
        id: 'neem-face-wash',
        name: 'Neem & Tulsi Daily Face Wash',
        brand: 'Natura Roots',
        size: '50 ml',
        category: 'face-wash',
        label: 'Face wash',
        skinType: 'Oily, acne-prone',
        price: 445,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRGi6Xx8OxAeitXRT6pqcg35p_CJHhrFUNPB7baACf7mCjOI3_f3tWLe-bwfBdPNEX6z-adSne2Ngzc7Z-jytFAemXmxkPcyfd5eCMGkIP76IB-8kItWlBXE2gzf2pip-mIEIUZjs3A&usqp=CAc',
        description: 'A gentle foaming face wash with a clean, herbal-inspired feel.'
    },
    {
        id: 'aloe-hydra-face-wash',
        name: 'Aloe Hydra Soft Face Wash',
        brand: 'Bare Botanics',
        size: '150 ml',
        category: 'face-wash',
        label: 'Face wash',
        skinType: 'Dry, sensitive',
        price: 382,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzVzUSgy2l1MgNxo6acbOs6C2X3Lo9HkL0iYF0sCswy8Ioj-3X0HlECDdugBKII9cB9hS5vK5islmwA-Pa6mdOO47VCjbfDGucF7lAd7hvIXsH10KXasKBcSXg0LGfL1GKJvROPQ&usqp=CAc',
        description: 'A soft-lather cleanser designed for a gentle everyday wash.'
    },
    {
        id: 'daily-foam-face-wash',
        name: 'Daily Balance Foaming Face Wash',
        brand: 'Everyday Skin',
        size: '50 ml',
        category: 'face-wash',
        label: 'Face wash',
        skinType: 'All skin types',
        price: 395,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItUxDZbHnNDPQTy1Wym5CufWXOGa0f3mevsZNP9dxSQ&s=10',
        description: 'A straightforward daily cleanser that rinses away easily.'
    },
    {
        id: 'ceramide-barrier-cream',
        name: 'Ceramide Barrier Repair Cream',
        brand: 'Kind Ritual',
        size: '50 g',
        category: 'moisturizer',
        label: 'Moisturizer',
        skinType: 'Dry, sensitive',
        price: 158,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5vP98KBx3AA7hYH-91M1-GlY5bp_hnvrVX44wjtHwotZLtVi1vOH3UY&s=10',
        description: 'A comforting cream for daily moisture and a cared-for skin feel.'
    },
    {
        id: 'oil-free-gel-moisturizer',
        name: 'Oil-Free Water Gel Moisturizer',
        brand: 'Dewdrop',
        size: '50 g',
        category: 'moisturizer',
        label: 'Moisturizer',
        skinType: 'Oily, combination',
        price: 360,
        image: 'https://discoverpilgrim.com/cdn/shop/files/1_0005c463-b161-43f7-b8ae-6575428c7b9e.jpg?v=1756990186&width=800',
        description: 'A lightweight gel-cream for a fresh, non-greasy finish.'
    },
    {
        id: 'squalane-daily-lotion',
        name: 'Squalane Daily Hydration Lotion',
        brand: 'Bare Botanics',
        size: '150 ml',
        category: 'moisturizer',
        label: 'Moisturizer',
        skinType: 'Normal, dry',
        price: 320,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9UeynnfDqM49362ERFQjmY6WeYADVR0nQe-ZW34X_A&s',
        description: 'A light daily lotion that layers comfortably under sunscreen.'
    },
    {
        id: 'soothing-oat-moisturizer',
        name: 'Oat & Panthenol Soothing Moisturizer',
        brand: 'Everyday Skin',
        size: '100 ml',
        category: 'moisturizer',
        label: 'Moisturizer',
        skinType: 'Sensitive, combination',
        price: 399,
        image: 'https://m.media-amazon.com/images/I/41SODj0hfGL._AC_UF894,1000_QL80_.jpg',
        description: 'A simple daily moisturizer with a soft, non-heavy texture.'
    },
    {
        id: 'spf50-invisible-sunscreen',
        name: 'SPF 50 PA++++ Invisible Sunscreen',
        brand: 'Sunroom',
        size: '50 g',
        category: 'sunscreen',
        label: 'Sunscreen',
        skinType: 'All skin types',
        price: 360,
        image: 'https://discoverpilgrim.com/cdn/shop/files/1.7_1.jpg?v=1770978987&width=800',
        description: 'A daily broad-spectrum sunscreen with a lightweight finish.'
    },
    {
        id: 'mineral-sunscreen',
        name: 'Mineral Zinc Daily Sunscreen SPF 40',
        brand: 'Kind Ritual',
        size: '50 g',
        category: 'sunscreen',
        label: 'Sunscreen',
        skinType: 'Sensitive, dry',
        price: 454,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNtTs0OS7qnk4TmBioftoDIYHu809tT4_Yqvev4J78AzgpOqL6GVe7cIZaJ2W8ieBd5mzaAbrI1GaCVe1hC27qp4ahUFtFGNTw6-PI5obQWv2GkrAGRmvU3CCKP3-jbc7tyeB9NFg&usqp=CAc',
        description: 'A mineral sunscreen option for a simple daytime routine.'
    },
    {
        id: 'matte-sunscreen',
        name: 'Matte Finish Sunscreen SPF 50',
        brand: 'Sunroom',
        size: '50 g',
        category: 'sunscreen',
        label: 'Sunscreen',
        skinType: 'Oily, combination',
        price: 665,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQbrNZmW_9H5kT1lttKHFqqmQp0Bh61vQlv11Kr3opLrzPvF-8NAQUMO5-meQdiRH1xIloIObtCSVn0YDkH95AokN1PKJG7W7Po6oPMnl7ExvD5tNi88seTUpojYbw3lV6wSFti1hQ&usqp=CAc',
        description: 'A lightweight sunscreen made for a comfortable matte feel.'
    },
    {
        id: 'daily-sunscreen-lotion',
        name: 'Daily Sun Shield Lotion SPF 30',
        brand: 'Bare Botanics',
        size: '60 ml',
        category: 'sunscreen',
        label: 'Sunscreen',
        skinType: 'Normal, dry',
        price: 389,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTp1BVDyM1FS7_mQ7x8Sm3NX0eA_cCfXgmZBbmO44vQ&s=10',
        description: 'A lotion-format sunscreen for everyday outdoor routines.'
    },
    {
        id: 'vitamin-c-glow-serum',
        name: 'Vitamin C Brightening Face Serum',
        brand: 'Dewdrop',
        size: '30 ml',
        category: 'serum',
        label: 'Serum',
        skinType: 'Normal, combination',
        price: 499,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0r6jTwTe3Ajsw4Sq4GP9yBIHBqNSyDNNGUW4KNA46WXS16SabohRo1LifsBpIrV3GqFmkQYfGcvCQFGF3O_YU2BI1rUs55oQ252RVfv8QuoEHwV8aACYg6-FM9p20Wkq_b-D7ew&usqp=CAc',
        description: 'A lightweight serum to complement a consistent skincare routine.'
    },
    {
        id: 'hyaluronic-hydration-serum',
        name: 'Hyaluronic Acid Hydration Serum',
        brand: 'Bare Botanics',
        size: '30 ml',
        category: 'serum',
        label: 'Serum',
        skinType: 'All skin types',
        price: 1000,
        image: 'https://m.media-amazon.com/images/I/51K4nVx+irL.jpg',
        description: 'A simple hydrating serum that layers with moisturizer.'
    },
    {
        id: 'niacinamide-balance-serum',
        name: 'Niacinamide 5% Balance Serum',
        brand: 'Everyday Skin',
        size: '30 ml',
        category: 'serum',
        label: 'Serum',
        skinType: 'Oily, combination',
        price: 439,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQBTap9JOaynLD30K7791kgN0QbzJdAtHljMP2Min1NjUA4K8EcOq-O-Auqz1PnUaYEPRXpxxhL_KWkiLdQsCzfnhnkr-QwKplrQ9jOi-kEH36kpbCCVuybA3VahaVGUTrw3i7g2hU&usqp=CAc',
        description: 'A lightweight daily serum with a simple, easy-to-layer texture.'
    },
    {
        id: 'peptide-night-serum',
        name: 'Peptide Comfort Night Serum',
        brand: 'Kind Ritual',
        size: '30 ml',
        category: 'serum',
        label: 'Serum',
        skinType: 'Normal, dry',
        price: 699,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkaIaHaEWektfK0lG0qpmohnJWPmH0XHy6I6A0J7XQg&s=10',
        description: 'A silky evening serum to add to a gentle night-time routine.'
    },
    {
        id: 'salicylic-spot-gel',
        name: 'Salicylic Acid Clarifying Spot Gel',
        brand: 'Clear Days',
        size: '15 g',
        category: 'acne-care',
        label: 'Acne care',
        skinType: 'Oily, acne-prone',
        price: 899,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpC0XAcEyS3m-rpqMm2iD3mujTptPN65moUw1-mYSRGz2vglcYldKxsNIP1RONGNwMm_whR0HJBMk2Ws6uJe0JVMZRjvSiagoaV6qxuzKWW6RJE4U8nD-Yrf_RH_YIhOM_ogjM-Lg&usqp=CAc',
        description: 'A targeted spot-care gel. Patch test and follow product directions.'
    },
    {
        id: 'niacinamide-blemish-gel',
        name: 'Niacinamide Blemish Care Gel',
        brand: 'Clear Days',
        size: '30 g',
        category: 'acne-care',
        label: 'Acne care',
        skinType: 'Combination, acne-prone',
        price: 722,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56a0VZkWPXk4898ZXbV28VfBjlnLnja_IlZPCjjBEz3SbqeNYPlOGSsY&s=10',
        description: 'A lightweight gel for a simple, non-heavy blemish-care routine.'
    },
    {
        id: 'gentle-acne-cleanser',
        name: 'Gentle Acne Care Cleanser',
        brand: 'Everyday Skin',
        size: '100 ml',
        category: 'acne-care',
        label: 'Acne care',
        skinType: 'Oily, acne-prone',
        price: 249,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT019Q6MQp_pnQkIROlWa4KZunCk2atwX-yEoXY1Yia5w9NsLsfURt_gvtZNAJwP_0966mkWjLOkJXIV-GpO7fFL-FTimWeIlEkPxn3BGzQNKMKKeOVvcv4fRmTAQBfjlT8U-95NAk&usqp=CAc',
        description: 'A gentle daily cleanser for blemish-prone skin routines.'
    },
    {
        id: 'aloe-soothing-gel',
        name: 'Pure Aloe Vera Soothing Gel',
        brand: 'Natura Roots',
        size: '150 ml',
        category: 'soothing-care',
        label: 'Aloe / soothing care',
        skinType: 'All skin types',
        price: 807,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwuotSBdY0Yj7WRpKLHq0FdmmJMelqApjkCGfvuO9Gow&s=10',
        description: 'A cooling-feel aloe gel for a light, soothing-care step.'
    },
    {
        id: 'cica-calm-cream',
        name: 'Cica Calm Recovery Cream',
        brand: 'Kind Ritual',
        size: '900 ml',
        category: 'soothing-care',
        label: 'Aloe / soothing care',
        skinType: 'Sensitive, dry',
        price: 429,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqZXrfY-1nEnRsYN4P8LKIkKRyip3R8M5Vn_DvtM7iQ&s=10',
        description: 'A comforting cream for a minimal, gentle skincare routine.'
    },
    {
        id: 'cucumber-cooling-mist',
        name: 'Cucumber Aloe Refreshing Face Mist',
        brand: 'Dewdrop',
        size: '100 ml',
        category: 'soothing-care',
        label: 'Aloe / soothing care',
        skinType: 'Normal, combination',
        price: 300,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8tuxyXzsxjkt2lwu7yYws450rxeYQGFQkJUEB11Y7g&s=10',
        description: 'A refreshing face mist for a quick, lightweight comfort step.'
    },
    {
        id: 'clay-purifying-mask',
        name: 'Kaolin Clay Purifying Face Mask',
        brand: 'Leaf & Layer',
        size: '100 g',
        category: 'face-mask',
        label: 'Face mask',
        skinType: 'Oily, combination',
        price: 389,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCM5xMJycFhrJfGnio5w2o7_PHWJ8HqqgO3vPteyvFg&s=10',
        description: 'A rinse-off clay mask for an occasional self-care routine.'
    },
    {
        id: 'honey-oat-mask',
        name: 'Honey & Oat Comfort Mask',
        brand: 'Bare Botanics',
        size: '60 g',
        category: 'face-mask',
        label: 'Face mask',
        skinType: 'Dry, sensitive',
        price: 379,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5hZp2Hlg7jNPxNzapsJ4qn-5rXL-IxpftzZ4hvGmRg&s=10',
        description: 'A creamy wash-off mask for a gentle, pampering evening.'
    },
    {
        id: 'hydrating-sheet-mask',
        name: 'Aqua Boost Hydrating Sheet Mask',
        brand: 'Dewdrop',
        size: '1 mask',
        category: 'face-mask',
        label: 'Face mask',
        skinType: 'All skin types',
        price: 99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRclvzjwoLezaojU9knuaGUYMsXxLA-DyXi-PnNWoc5pg&s',
        description: 'A single-use hydrating sheet mask for an occasional routine.'
    },
    {
        id: 'shea-lip-balm',
        name: 'Shea Butter Daily Lip Balm',
        brand: 'Kind Ritual',
        size: '10 g',
        category: 'lip-care',
        label: 'Lip care',
        skinType: 'All skin types',
        price: 149,
        image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=640&q=80',
        description: 'A simple balm to keep lips feeling soft throughout the day.'
    },
    {
        id: 'spf-lip-balm',
        name: 'Cocoa SPF 30 Lip Balm',
        brand: 'Sunroom',
        size: '4.5 g',
        category: 'lip-care',
        label: 'Lip care',
        skinType: 'All skin types',
        price: 746,
        image: 'https://eltior.com/cdn/shop/files/1_8ed2d001-1b8a-4d77-9dbc-b449b538dfb2.jpg?v=1790859790&width=990',
        description: 'A daytime lip balm with SPF for an easy outdoor-care step.'
    },
    {
        id: 'tinted-lip-butter',
        name: 'Rose Tint Nourishing Lip Butter',
        brand: 'Dewdrop',
        size: '8 g',
        category: 'lip-care',
        label: 'Lip care',
        skinType: 'All skin types',
        price: 224,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIOLHRym8NMNZaSu0SWzMLqoUTAp_y1SdYMtEdAKqZw&s=10',
        description: 'A soft tinted lip butter for a hint of everyday color.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const cartStorageKey = 'skinEssentialsCart';
    const savedStorageKey = 'skinEssentialsSaved';
    const productGrid = document.getElementById('productGrid');
    const categoryFilters = document.getElementById('categoryFilters');
    const productSearch = document.getElementById('productSearch');
    const productCount = document.getElementById('productCount');
    const emptySearch = document.getElementById('emptySearch');
    const cartDialog = document.getElementById('cartDialog');
    const cartBackdrop = document.getElementById('cartBackdrop');
    const cartOpenButton = document.getElementById('cartOpenButton');
    const cartCloseButton = document.getElementById('cartCloseButton');
    const cartCount = document.getElementById('cartCount');
    const drawerCartCount = document.getElementById('drawerCartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const savedItems = document.getElementById('savedItems');
    const savedItemsSection = document.getElementById('savedItemsSection');
    const checkoutButton = document.getElementById('checkoutButton');
    const checkoutDialog = document.getElementById('checkoutDialog');
    const checkoutBackdrop = document.getElementById('checkoutBackdrop');
    const checkoutSummary = document.getElementById('checkoutSummary');
    const checkoutForm = document.getElementById('checkoutForm');
    const checkoutStatus = document.getElementById('checkoutStatus');
    const payButton = document.getElementById('payButton');
    const shopToast = document.getElementById('shopToast');

    let cart = [];
    let saved = [];
    let activeCategory = 'all';
    let checkoutItems = [];
    let checkoutClearsCart = false;
    let checkoutReturnFocus = checkoutButton;
    let toastTimeout;

    const formatMoney = (rupees) => new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
    }).format(rupees);

    const getProduct = (id) =>
        skinEssentialProducts.find((product) => product.id === id);

    const showToast = (message) => {
        shopToast.textContent = message;
        shopToast.classList.add('is-visible');
        window.clearTimeout(toastTimeout);
        toastTimeout = window.setTimeout(
            () => shopToast.classList.remove('is-visible'),
            3000
        );
    };

    const readStoredItems = (key) => {
        try {
            const storedItems = JSON.parse(localStorage.getItem(key) || '[]');
            if (!Array.isArray(storedItems)) return [];

            return storedItems
                .filter((item) =>
                    item &&
                    typeof item.id === 'string' &&
                    getProduct(item.id)
                )
                .map((item) => ({
                    id: item.id,
                    quantity: Number.isInteger(item.quantity)
                        ? Math.max(1, Math.min(item.quantity, 5))
                        : 1
                }));
        } catch (error) {
            showToast('Could not read saved items from this browser.');
            return [];
        }
    };

    const saveState = () => {
        try {
            const serializeItems = (items) =>
                items.map((item) => ({
                    ...getProduct(item.id),
                    quantity: item.quantity
                }));

            localStorage.setItem(
                cartStorageKey,
                JSON.stringify(serializeItems(cart))
            );
            localStorage.setItem(
                savedStorageKey,
                JSON.stringify(serializeItems(saved))
            );
        } catch (error) {
            showToast('Could not save items. Browser storage may be disabled.');
        }
    };

    const createButton = (label, className, onClick) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = className;
        button.textContent = label;
        button.addEventListener('click', onClick);
        return button;
    };

    const renderProducts = () => {
        const searchTerm = productSearch.value.trim().toLowerCase();
        const filteredProducts = skinEssentialProducts.filter((product) => {
            const matchesCategory =
                activeCategory === 'all' ||
                product.category === activeCategory;
            const searchableText = [
                product.name,
                product.label,
                product.brand,
                product.skinType,
                product.description
            ].join(' ').toLowerCase();

            return matchesCategory && searchableText.includes(searchTerm);
        });

        productGrid.replaceChildren();

        filteredProducts.forEach((product) => {
            const card = document.createElement('article');
            card.className = 'product-card';

            const visual = document.createElement('div');
            visual.className = 'product-visual';
            visual.dataset.placeholder = product.label;
            visual.style.setProperty(
                '--tone',
                product.category === 'sunscreen' ? '#f4f0e5' : '#edf0e9'
            );

            const image = document.createElement('img');
            image.className = 'product-image';
            image.src = product.image;
            image.alt = `${product.name} (illustrative product photo)`;
            image.loading = 'lazy';
            image.decoding = 'async';
            image.addEventListener('error', () => {
                image.classList.add('image-unavailable');
                visual.classList.add('image-unavailable');
            }, { once: true });

            const saveButton = createButton(
                saved.some((item) => item.id === product.id) ? '♥' : '♡',
                'save-product',
                () => addToSaved(product.id)
            );
            saveButton.setAttribute('aria-label', `Save ${product.name} for later`);
            saveButton.setAttribute(
                'aria-pressed',
                String(saved.some((item) => item.id === product.id))
            );
            visual.append(image, saveButton);

            const info = document.createElement('div');
            info.className = 'product-info';

            const category = document.createElement('p');
            category.className = 'product-category';
            category.textContent = product.label;

            const name = document.createElement('h3');
            name.textContent = product.name;

            const brandSize = document.createElement('p');
            brandSize.className = 'product-brand-size';
            brandSize.textContent = `${product.brand} · ${product.size}`;

            const skinType = document.createElement('p');
            skinType.className = 'product-skin-type';
            skinType.textContent = `Suitable for: ${product.skinType}`;

            const description = document.createElement('p');
            description.className = 'product-description';
            description.textContent = product.description;

            const price = document.createElement('span');
            price.className = 'product-price';
            price.textContent = formatMoney(product.price);

            const actions = document.createElement('div');
            actions.className = 'product-actions';
            actions.append(
                createButton(
                    'Add to cart',
                    'add-to-cart',
                    () => addToCart(product.id)
                ),
                createButton(
                    'Buy now',
                    'buy-now-button',
                    (event) => openCheckout(
                        [{ id: product.id, quantity: 1 }],
                        event.currentTarget,
                        false
                    )
                )
            );

            info.append(
                category,
                name,
                brandSize,
                skinType,
                description,
                price,
                actions
            );
            card.append(visual, info);
            productGrid.append(card);
        });

        productCount.textContent = `${filteredProducts.length} products`;
        emptySearch.classList.toggle('hidden', filteredProducts.length !== 0);
    };

    const addToCart = (id) => {
        const product = getProduct(id);
        if (!product) return;

        const existing = cart.find((item) => item.id === id);
        if (existing) {
            if (existing.quantity >= 5) {
                showToast('The demo cart allows up to 5 of each product.');
                return;
            }
            existing.quantity += 1;
        } else {
            cart.push({ id, quantity: 1 });
        }

        saveState();
        renderCart();
        showToast(`${product.name} added to cart`);
    };

    const addToSaved = (id) => {
        const product = getProduct(id);
        if (!product) return;

        if (saved.some((item) => item.id === id)) {
            saved = saved.filter((item) => item.id !== id);
            showToast(`${product.name} removed from saved items`);
        } else {
            saved.push({ id, quantity: 1 });
            showToast(`${product.name} saved for later`);
        }
        saveState();
        renderProducts();
        renderCart();
    };

    const makeCartLine = (item, savedItem = false) => {
        const product = getProduct(item.id);
        if (!product) return null;

        const line = document.createElement('article');
        line.className = 'cart-line';

        const thumbnail = document.createElement('img');
        thumbnail.className = 'cart-thumbnail';
        thumbnail.src = product.image;
        thumbnail.alt = '';
        thumbnail.loading = 'lazy';

        const details = document.createElement('div');
        const name = document.createElement('h3');
        name.textContent = product.name;
        const price = document.createElement('p');
        price.textContent =
            `${formatMoney(product.price)} × ${item.quantity} = ${formatMoney(product.price * item.quantity)}`;
        details.append(name, price);

        const actions = document.createElement('div');
        actions.className = 'cart-line-actions';

        if (!savedItem) {
            const controls = document.createElement('div');
            controls.className = 'quantity-controls';
            controls.append(
                createButton('−', 'quantity-button', () =>
                    updateQuantity(item.id, item.quantity - 1)
                )
            );
            controls.lastElementChild.setAttribute(
                'aria-label',
                `Decrease ${product.name} quantity`
            );
            const quantity = document.createElement('span');
            quantity.textContent = String(item.quantity);
            controls.append(quantity);
            const increase = createButton('+', 'quantity-button', () =>
                updateQuantity(item.id, item.quantity + 1)
            );
            increase.disabled = item.quantity >= 5;
            increase.setAttribute('aria-label', `Increase ${product.name} quantity`);
            controls.append(increase);
            actions.append(controls);
        }

        const itemActions = document.createElement('div');
        itemActions.className = 'cart-item-actions';
        itemActions.append(
            createButton(
                savedItem ? 'Move to cart' : 'Save for later',
                'cart-text-button',
                () => savedItem ? moveToCart(item.id) : moveToSaved(item.id)
            ),
            createButton(
                'Remove',
                'cart-text-button',
                () => removeItem(item.id, savedItem)
            )
        );
        actions.append(itemActions);
        line.append(thumbnail, details, actions);
        return line;
    };

    const getCartTotal = (items) =>
        items.reduce((total, item) => {
            const product = getProduct(item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);

    const renderCart = () => {
        const quantityTotal = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );
        cartCount.textContent = String(quantityTotal);
        drawerCartCount.textContent = `(${quantityTotal})`;
        cartItems.replaceChildren();

        if (!cart.length) {
            const empty = document.createElement('p');
            empty.className = 'empty-search';
            empty.textContent = 'Your cart is empty. Browse the catalogue to add products.';
            cartItems.append(empty);
        } else {
            cart.forEach((item) => {
                const line = makeCartLine(item);
                if (line) cartItems.append(line);
            });
        }

        savedItems.replaceChildren();
        saved.forEach((item) => {
            const line = makeCartLine(item, true);
            if (line) savedItems.append(line);
        });
        savedItemsSection.classList.toggle('hidden', saved.length === 0);
        cartTotal.textContent = formatMoney(getCartTotal(cart));
        checkoutButton.disabled = cart.length === 0;
        checkoutButton.classList.toggle('is-ready', cart.length !== 0);
    };

    const updateQuantity = (id, quantity) => {
        const item = cart.find((entry) => entry.id === id);
        if (!item) return;

        if (quantity < 1) {
            cart = cart.filter((entry) => entry.id !== id);
        } else {
            item.quantity = Math.min(quantity, 5);
        }
        saveState();
        renderCart();
    };

    const removeItem = (id, savedItem) => {
        if (savedItem) {
            saved = saved.filter((item) => item.id !== id);
        } else {
            cart = cart.filter((item) => item.id !== id);
        }
        saveState();
        renderProducts();
        renderCart();
    };

    const moveToSaved = (id) => {
        const item = cart.find((entry) => entry.id === id);
        if (!item) return;

        const savedItem = saved.find((entry) => entry.id === id);
        if (savedItem) {
            savedItem.quantity = Math.min(savedItem.quantity + item.quantity, 5);
        } else {
            saved.push({ ...item });
        }
        cart = cart.filter((entry) => entry.id !== id);
        saveState();
        renderProducts();
        renderCart();
    };

    const moveToCart = (id) => {
        const item = saved.find((entry) => entry.id === id);
        if (!item) return;

        const cartItem = cart.find((entry) => entry.id === id);
        if (cartItem) {
            cartItem.quantity = Math.min(cartItem.quantity + item.quantity, 5);
        } else {
            cart.push({ ...item, quantity: Math.min(item.quantity, 5) });
        }
        saved = saved.filter((entry) => entry.id !== id);
        saveState();
        renderProducts();
        renderCart();
    };

    const openCart = () => {
        cartDialog.classList.add('is-open');
        cartDialog.setAttribute('aria-hidden', 'false');
        cartBackdrop.classList.remove('hidden');
        document.body.classList.add('body-lock');
        cartCloseButton.focus();
    };

    const closeCart = () => {
        cartDialog.classList.remove('is-open');
        cartDialog.setAttribute('aria-hidden', 'true');
        cartBackdrop.classList.add('hidden');
        document.body.classList.remove('body-lock');
        cartOpenButton.focus();
    };

    const renderCheckoutSummary = () => {
        checkoutSummary.replaceChildren();
        const items = document.createElement('div');
        items.className = 'checkout-summary-items';

        checkoutItems.forEach((item) => {
            const product = getProduct(item.id);
            if (!product) return;
            const row = document.createElement('div');
            row.className = 'checkout-summary-row';
            const name = document.createElement('span');
            name.textContent = `${product.name} × ${item.quantity}`;
            const price = document.createElement('strong');
            price.textContent = formatMoney(product.price * item.quantity);
            row.append(name, price);
            items.append(row);
        });

        const total = document.createElement('div');
        total.className = 'checkout-summary-total';
        const label = document.createElement('span');
        label.textContent = 'Demo total';
        const amount = document.createElement('strong');
        amount.textContent = formatMoney(getCartTotal(checkoutItems));
        total.append(label, amount);
        checkoutSummary.append(items, total);
    };

    const openCheckout = (items, opener, clearsCart) => {
        if (!items.length) return;
        checkoutItems = items.map(({ id, quantity }) => ({ id, quantity }));
        checkoutClearsCart = clearsCart;
        checkoutReturnFocus = opener;
        checkoutStatus.textContent = '';
        checkoutStatus.classList.remove('is-error');
        payButton.disabled = false;
        payButton.textContent = 'Confirm demo order';
        renderCheckoutSummary();
        checkoutDialog.classList.add('is-open');
        checkoutDialog.setAttribute('aria-hidden', 'false');
        checkoutBackdrop.classList.remove('hidden');
        document.body.classList.add('body-lock');
        payButton.focus();
    };

    const closeCheckout = () => {
        checkoutDialog.classList.remove('is-open');
        checkoutDialog.setAttribute('aria-hidden', 'true');
        checkoutBackdrop.classList.add('hidden');
        document.body.classList.remove('body-lock');
        if (checkoutReturnFocus && document.contains(checkoutReturnFocus)) {
            checkoutReturnFocus.focus();
        }
    };

    categoryFilters.addEventListener('click', (event) => {
        const button = event.target.closest('[data-category]');
        if (!button) return;

        activeCategory = button.dataset.category;
        categoryFilters.querySelectorAll('[data-category]').forEach((filter) => {
            const selected = filter === button;
            filter.classList.toggle('active', selected);
            filter.setAttribute('aria-pressed', String(selected));
        });
        renderProducts();
    });

    productSearch.addEventListener('input', renderProducts);
    cartOpenButton.addEventListener('click', openCart);
    cartCloseButton.addEventListener('click', closeCart);
    cartBackdrop.addEventListener('click', closeCart);
    document.getElementById('continueShopping').addEventListener('click', closeCart);
    checkoutButton.addEventListener(
        'click',
        () => openCheckout(cart, checkoutButton, true)
    );
    document.getElementById('checkoutCloseButton').addEventListener('click', closeCheckout);
    checkoutBackdrop.addEventListener('click', closeCheckout);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && checkoutDialog.classList.contains('is-open')) {
            closeCheckout();
        } else if (event.key === 'Escape' && cartDialog.classList.contains('is-open')) {
            closeCart();
        }
    });

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!checkoutItems.length) return;

        const orderNumber = `SE-${Date.now().toString().slice(-8)}`;
        checkoutStatus.textContent =
            `Demo order ${orderNumber} confirmed. This is only a local confirmation; no payment was processed and nothing will be shipped.`;
        checkoutStatus.classList.remove('is-error');
        payButton.disabled = true;
        payButton.textContent = 'Demo order confirmed';

        if (checkoutClearsCart) {
            cart = [];
            saveState();
            renderCart();
        }
    });

    cart = readStoredItems(cartStorageKey);
    saved = readStoredItems(savedStorageKey);
    renderProducts();
    renderCart();
});

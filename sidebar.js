document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    function setSidebarState(isOpen) {
        if (!sidebarMenu) return;
        sidebarMenu.classList.toggle('open', isOpen);
        if (sidebarBackdrop) {
            sidebarBackdrop.classList.toggle('hidden', !isOpen);
        }
        if (sidebarToggle) {
            sidebarToggle.setAttribute('aria-expanded', String(isOpen));
        }
    }

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            const isOpen = sidebarMenu && sidebarMenu.classList.contains('open');
            setSidebarState(!isOpen);
        });
    }

    if (sidebarClose) {
        sidebarClose.addEventListener('click', () => setSidebarState(false));
    }

    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', () => setSidebarState(false));
    }

    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    sidebarItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href && href === currentPage) {
            item.classList.add('active');
        }
    });

    const logoutItem = document.querySelector('.logout-link');
    if (logoutItem) {
        logoutItem.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.removeItem('userName');
            window.location.href = 'index.html';
        });
    }
});

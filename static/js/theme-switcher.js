class ThemeSwitcher {
    constructor() {
        this.currentTheme = this.getStoredTheme() || 'default';
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeDropdown = document.getElementById('theme-dropdown');
        this.themeOptions = document.querySelectorAll('.theme-option');
        
        this.init();
        this.handleMobilePosition();
    }
    
    init() {
        this.applyTheme(this.currentTheme);
        this.bindEvents();
        this.updateActiveTheme();
    }
    
    bindEvents() {
        // Toggle dropdown
        this.themeToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleDropdown();
        });
        
        // Theme selection
        this.themeOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const theme = e.currentTarget.dataset.theme;
                this.setTheme(theme);
                this.closeDropdown();
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.theme-switcher')) {
                this.closeDropdown();
            }
        });
        
        // Close dropdown on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeDropdown();
            }
        });
    }
    
    toggleDropdown() {
        this.themeDropdown.classList.toggle('active');
    }
    
    closeDropdown() {
        this.themeDropdown.classList.remove('active');
    }
    
    setTheme(theme) {
        this.currentTheme = theme;
        this.applyTheme(theme);
        this.storeTheme(theme);
        this.updateActiveTheme();
        
        // Force reload of cached resources
        this.invalidateCache();
    }
    
    applyTheme(theme) {
        // Remove existing theme classes
        document.documentElement.classList.remove('theme-ocean', 'theme-forest', 'theme-night');
        
        // Remove existing theme stylesheets
        const existingThemeLinks = document.querySelectorAll('link[data-theme]');
        existingThemeLinks.forEach(link => link.remove());
        
        // Add new theme class and stylesheet
        if (theme !== 'default') {
            document.documentElement.classList.add(`theme-${theme}`);
            this.loadThemeStylesheet(theme);
        }
        
        // Update meta theme-color for mobile browsers
        this.updateMetaThemeColor(theme);
        
        // Dispatch custom event for other components
        document.dispatchEvent(new CustomEvent('themeChange', { 
            detail: { theme: theme } 
        }));
    }
    
    loadThemeStylesheet(theme) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `/css/${theme}.css?v=${Date.now()}`; // Cache busting
        link.setAttribute('data-theme', theme);
        
        // Add onload event to ensure smooth transition
        link.onload = () => {
            document.body.classList.add('theme-loaded');
            setTimeout(() => {
                document.body.classList.remove('theme-loaded');
            }, 300);
        };
        
        document.head.appendChild(link);
    }
    
    updateMetaThemeColor(theme) {
        let themeColor = '#ffffff'; // default
        
        switch(theme) {
            case 'ocean':
                themeColor = '#1e3a8a';
                break;
            case 'forest':
                themeColor = '#355e3b';
                break;
            case 'night':
                themeColor = '#0a0b1e';
                break;
        }
        
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.content = themeColor;
    }
    
    updateActiveTheme() {
        this.themeOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.theme === this.currentTheme);
        });
    }
    
    storeTheme(theme) {
        try {
            localStorage.setItem('selectedTheme', theme);
            // Also set a cookie as fallback
            document.cookie = `theme=${theme}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
        } catch (e) {
            console.warn('Could not store theme preference:', e);
        }
    }
    
    getStoredTheme() {
        try {
            // Try localStorage first
            const stored = localStorage.getItem('selectedTheme');
            if (stored) return stored;
            
            // Fallback to cookie
            const cookieMatch = document.cookie.match(/theme=([^;]+)/);
            if (cookieMatch) return cookieMatch[1];
            
        } catch (e) {
            console.warn('Could not retrieve stored theme:', e);
        }
        
        return null;
    }

    handleMobilePosition() {
        const handleResize = () => {
            const themeSwitcher = document.querySelector('.theme-switcher');
            if (window.innerWidth <= 480) {
                // Optional: Add bottom positioning class for very small screens
                // themeSwitcher.classList.add('bottom-mobile');
            } else {
                themeSwitcher.classList.remove('bottom-mobile');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once on load
    }
    
    invalidateCache() {
        // Add timestamp to force reload of cached resources
        const timestamp = Date.now();
        
        // Update any cached resources that might be affected
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
        stylesheets.forEach(link => {
            if (link.href.includes('.css')) {
                const url = new URL(link.href);
                url.searchParams.set('v', timestamp);
                link.href = url.toString();
            }
        });
    }
}

// Initialize theme switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
});

// Apply theme immediately to prevent flash
(function() {
    const getStoredTheme = () => {
        try {
            const stored = localStorage.getItem('selectedTheme');
            if (stored) return stored;
            
            const cookieMatch = document.cookie.match(/theme=([^;]+)/);
            if (cookieMatch) return cookieMatch[1];
        } catch (e) {
            // Ignore errors
        }
        return 'default';
    };
    
    const theme = getStoredTheme();
    if (theme !== 'default') {
        document.documentElement.classList.add(`theme-${theme}`);
    }
})();
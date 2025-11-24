/**
 * Safe localStorage wrapper utilities
 * Handles mobile browsers with restricted storage (private mode, disabled cookies, etc.)
 */

export const storage = {
    /**
     * Safely get item from localStorage
     */
    getItem: (key: string): string | null => {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            console.warn(`localStorage.getItem("${key}") failed:`, error);
            return null;
        }
    },

    /**
     * Safely set item in localStorage
     */
    setItem: (key: string, value: string): void => {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.warn(`localStorage.setItem("${key}") failed:`, error);
        }
    },

    /**
     * Safely remove item from localStorage
     */
    removeItem: (key: string): void => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.warn(`localStorage.removeItem("${key}") failed:`, error);
        }
    },

    /**
     * Check if localStorage is available
     */
    isAvailable: (): boolean => {
        try {
            const testKey = '__storage_test__';
            localStorage.setItem(testKey, 'test');
            localStorage.removeItem(testKey);
            return true;
        } catch (error) {
            return false;
        }
    }
};

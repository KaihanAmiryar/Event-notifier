export function isAuthenticated() {
    if (typeof localStorage === 'undefined') {
        return false;
    }

    return !!localStorage.getItem('token');
}
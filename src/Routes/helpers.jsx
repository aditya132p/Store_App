export const isAuthenticated = () => {
    // Here you can check for an auth token or session
    return localStorage.getItem("token") !== null;
};
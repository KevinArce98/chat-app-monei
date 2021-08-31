
export const getIsLogged = () => {
    return localStorage.getItem('logged') ? true : false;
}
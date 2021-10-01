import Cookies from 'js-cookie';

export const Logado = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
}
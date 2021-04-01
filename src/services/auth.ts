import Cookies from 'js-cookie'

export const TOKEN_KEY = "token";
export const isAuthenticated = () => Cookies.get(TOKEN_KEY); // => 'value' }
export const getToken = () => Cookies.get(TOKEN_KEY); // => 'value' }
export const logout = () => Cookies.remove(TOKEN_KEY);
export const login = token=> Cookies.set(TOKEN_KEY, token, { expires: 7, secure: true})
export const Navers = () => Cookies.get(TOKEN_KEY); // => 'value' }
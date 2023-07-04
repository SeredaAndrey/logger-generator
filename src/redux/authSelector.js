export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getIsLoading = state => state.auth.isLoading;

export const getUsername = state => state.auth.name;
export const getUserAvatar = state => state.auth.avatar;
export const getUserToken = state => state.auth.token;
export const getUserLanguage = state => state.auth.inerfaceLanguage;

export const getIsRefreshing = state => state.auth.isRefreshing;

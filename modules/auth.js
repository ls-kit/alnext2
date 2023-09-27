import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    token: null,
    user: {},
    OTP_response: {
        status: false,
        message: "",
        data: [],
    },
    wishlist: [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token, isAuthenticated, OTP_response } = action.payload;
            state.user = user;
            state.token = token;
            state.isAuthenticated = isAuthenticated;
            state.OTP_response = OTP_response;
        },
        otpSubmit: (state, action) => {
            state.OTP_response = action.payload.OTP_response;
        },
        setWishlist: (state, action) => {
            state.wishlist = action.payload.wishlist;
        },
    },
});

export const { setUser, otpSubmit, setWishlist } = authSlice.actions;

// Selectors
export const selectAuthState = (state) => state.auth;
export const selectUser = createSelector(
    selectAuthState,
    (auth) => auth.user
);
export const selectToken = createSelector(
    selectAuthState,
    (auth) => auth.token
);
export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (auth) => auth.isAuthenticated
);
export const selectOTPResponse = createSelector(
    selectAuthState,
    (auth) => auth.OTP_response
);
export const selectWishlist = createSelector(
    selectAuthState,
    (auth) => auth.wishlist
);

export default authSlice.reducer;

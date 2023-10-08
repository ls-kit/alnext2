import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setGlobalErrors } from "/utils/GlobalStateControl";
import { axiosInstance } from "/utils/AxiosDefault";
import _ from "lodash";

const initialState = {
    general: null,
    categories: [],
    banners: [],
    loading: {
        general: false,
        categories: false,
        banners: false,
    },
};

// Create async thunks for loading data
export const loadGeneral = createAsyncThunk("general/loadGeneral", async () => {
    try {
        const response = await axiosInstance.get("/general");
        const responseData = response.data;
        if (!_.isEmpty(responseData)) {
            const getData = responseData.data;
            if (!_.isEmpty(getData)) {
                const general = JSON.parse(getData.general);
                window.localStorage.setItem("_general", general);
                return general;
            }
        }
        return null;
    } catch (error) {
        setGlobalErrors(error.response);
        throw error;
    }
});

export const loadCategories = createAsyncThunk("categories/loadCategories", async () => {
    try {
        const response = await axiosInstance.get("/categories");
        const responseData = response.data;
        if (!_.isEmpty(responseData)) {
            const getData = responseData.data;
            if (!_.isEmpty(getData)) {
                return getData.categories;
            }
        }
        return [];
    } catch (error) {
        setGlobalErrors(error.response);
        throw error;
    }
});

export const loadBanners = createAsyncThunk("banners/loadBanners", async () => {
    try {
        const response = await axiosInstance.get("/banners");
        const responseData = response.data;
        if (!_.isEmpty(responseData)) {
            const getData = responseData.data;
            if (!_.isEmpty(getData)) {
                return getData;
            }
        }
        return [];
    } catch (error) {
        setGlobalErrors(error.response);
        throw error;
    }
});

// Create a Redux Toolkit slice
const initSlice = createSlice({
    name: "init",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadGeneral.pending, (state) => {
                state.loading.general = true;
            })
            .addCase(loadGeneral.fulfilled, (state, action) => {
                state.loading.general = false;
                state.general = action.payload;
            })
            .addCase(loadGeneral.rejected, (state) => {
                state.loading.general = false;
            })
            .addCase(loadCategories.pending, (state) => {
                state.loading.categories = true;
            })
            .addCase(loadCategories.fulfilled, (state, action) => {
                state.loading.categories = false;
                state.categories = action.payload;
            })
            .addCase(loadCategories.rejected, (state) => {
                state.loading.categories = false;
            })
            .addCase(loadBanners.pending, (state) => {
                state.loading.banners = true;
            })
            .addCase(loadBanners.fulfilled, (state, action) => {
                state.loading.banners = false;
                state.banners = action.payload;
            })
            .addCase(loadBanners.rejected, (state) => {
                state.loading.banners = false;
            });
    },
});

export default initSlice.reducer;

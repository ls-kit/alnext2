import _ from 'lodash';
import {createSlice} from '@reduxjs/toolkit';
import {axiosInstance} from "../utils/AxiosDefault";

const initialState = {
    menus: [],
    categories: [],
    banners: [],
    general: {},
};

const initSlice = createSlice({
    name: 'init',
    initialState,
    reducers: {
        loadGeneral: (state, action) => {
            state.general = action.payload.general;
        },
        loadBanner: (state, action) => {
            state.banners = action.payload.banners;
        },
        loadCategories: (state, action) => {
            state.categories = action.payload.categories;
        },
        loadMenus: (state, action) => {
            state.menus = action.payload.menus;
        },
    },
});

const {actions, reducer} = initSlice

const selectInitState = (state) => state.init;
const selectGeneral = (state) => selectInitState(state).general;
const selectBanners = (state) => selectInitState(state).banners;
const selectCategories = (state) => selectInitState(state).categories;
const selectMenus = (state) => selectInitState(state).menus;

const selectors = {
    selectGeneral,
    selectBanners,
    selectCategories,
    selectMenus,
}

const loadGeneral = (state) => async (dispatch) => {
    const response = await axiosInstance.get('/general');
    const responseData = response.data;

    console.log(response)

    if (!_.isEmpty(responseData)) {
        const getData = responseData.data;

        if (!_.isEmpty(getData)) {
            const general = getData.general;
            window.localStorage.setItem('_general', general);
            return general;
        }
    }
}

export default { actions, reducer, selectors, loadGeneral}

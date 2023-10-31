import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        language: 'ru',
        sidebar: false
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        setSidebar: (state, action) => {
            state.sidebar = action.payload
        }
    }
})

export const { setLanguage, setSidebar } = settingsSlice.actions
export const settingsReducer = settingsSlice.reducer

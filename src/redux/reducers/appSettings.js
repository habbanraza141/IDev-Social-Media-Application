import { createSlice } from '@reduxjs/toolkit'

const appSettingSlice = createSlice({
    name: 'appSettings',
    initialState: {
      lang: 'ar',
      isDark: true
    },
    reducers: {
      changeLang: (state, action) => {
       state.lang = action.payload;
      },
      changeTheme: (state, action) => {
       state.isDark = action.payload;
      },
    },
    
  })
  
  export const { changeLang, changeTheme } = appSettingSlice.actions
  
  export default appSettingSlice.reducer
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import settingReducer from "./setting/reducers";

//Login
import userSlice from "./login/loginSlice";
import userProfileSlice from "./profile/userProfileSlice";

import dashboardDataSlice from "./dashboard/dashboardDataSlice";
import recentOrdersListSlice from "./dashboard/recentOrdersListSlice";

//Barcode
import barcodeListSlice from "./barcode/barcodeListSlice";
import barcodeAddSlice from "./barcode/barcodeAddSlice";
import recentBarcodeListSlice from "./barcode/recentBarcodeListSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    setting: settingReducer,
    userSlice,
    //Barcode
    barcodeListSlice,
    barcodeAddSlice,
    recentBarcodeListSlice,

    dashboardDataSlice,
    recentOrdersListSlice,
    userProfileSlice,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { catalogSlice } from './catalog/catalogSlice';
import { locationSlice } from './location/locationSlice';
import { bannersSlice } from './banners/bannersSlice';
import { holidaysSlice } from './holidays/holidaysSlice';
import { ordersSlice } from './orders/ordersSlice';
import { saleSlice } from './sale/saleSlice';
import { basketSlice } from './basket/basketSlice';
import { scanerSlice } from './scaner/scanerSlice';

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [catalogSlice.name]: catalogSlice.reducer,
    [locationSlice.name]: locationSlice.reducer,
    [bannersSlice.name]: bannersSlice.reducer,
    [holidaysSlice.name]: holidaysSlice.reducer,
    [saleSlice.name]: saleSlice.reducer,
    [ordersSlice.name]: ordersSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [scanerSlice.name]: scanerSlice.reducer,
  },
});
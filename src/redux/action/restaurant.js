import { createSlice } from "@reduxjs/toolkit";
import IMAGES from "@/config/image";

const initialState = {
  loading: false,
  restaurant: [
    {
      id: 1,
      name: "Paket Geprek",
      img: IMAGES.GEPREK,
      price: 15000,
    },
    {
      id: 2,
      name: "Paket Geprek Keju",
      img: IMAGES.GEPREK_KEJU,
      price: 20000,
    },
    {
      id: 3,
      name: "Paket Geprek Leleh",
      img: IMAGES.GEPREK_LELEH,
      price: 25000,
    },
    {
      id: 4,
      name: "Paket Sambal Matah",
      img: IMAGES.PAKET_SAMBAL_MATAH,
      price: 15000,
    },
    {
      id: 5,
      name: "Mie Ayam Geprek",
      img: IMAGES.MIE_AYAM_GEPREK,
      price: 17000,
    },
    {
      id: 6,
      name: "Mie Ayam Geprek keju",
      img: IMAGES.MIE_AYAM_KEJU,
      price: 22000,
    },
    {
      id: 7,
      name: "Mie Ayam Geprek Leleh",
      img: IMAGES.MIE_AYAM_LELEH,
      price: 27000,
    },
    {
      id: 8,
      name: "Mie Ayam Sambel Telur Asin",
      img: IMAGES.MIE_AYAM_TELUR_ASIN,
      price: 22000,
    },
  ],
  error: "",
};

const sliceRestaurant = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    addRestaurant: (state, action) => {
      state.restaurant = [...state.restaurant, action.payload];
    },
  },
});

export const { addRestaurant } = sliceRestaurant.actions;

export default sliceRestaurant.reducer;

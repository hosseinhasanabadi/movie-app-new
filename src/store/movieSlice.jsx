import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bannerData: [],
  imageURL:"",
};
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setimageURL: (state, action) => {
      state.imageURL = action.payload;
    },
  },
});
export const { setBannerData,setimageURL } = movieSlice.actions;
export default movieSlice.reducer;

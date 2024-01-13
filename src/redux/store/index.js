import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../action/counter";
import userReducer from "../action/userSlice";
import restaurantReducer from "../action/restaurant";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    restaurant: restaurantReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import counterSlice from "./Counter";
import venderSlice from "./Vendor";
import drugSlice from "./Drug";
import CartSlice from "./CartSlice";



const reducers = combineReducers({
  counter: counterSlice,
  vendor: venderSlice,
  drugs: drugSlice,
  cart: CartSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;

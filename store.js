import { configureStore } from "@reduxjs/toolkit";
import animalReducer from "./animalSlice";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  animals: persistReducer(persistConfig, animalReducer),
});

const store = configureStore({ reducer: rootReducer });

export const persistor = persistStore(store);
export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlice";
import commonReducer from "./feature/commonSlice";
import currentUserReducer from "./feature/currentUserSlice";
import userReducer from "./feature/userSlice";
import roleReducer from "./feature/roleSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    common: commonReducer,
    currentUser: currentUserReducer,
    users: userReducer,
    roles: roleReducer,
  },
});

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
// import timerReducer from "./timer/timer.reducer";

const persistConfig = {
    key: "root",
    storage, // `localStorage`
    whitelist: [], // a list of reducers to persist as strings
};

const rootReducer = combineReducers({
    user: userReducer,
    // timer: timerReducer,
});

export default persistReducer(persistConfig, rootReducer);

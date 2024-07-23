import { configureStore } from "@reduxjs/toolkit";
import StatusReducer from "../reducers/StatusReducer";
export default configureStore({
    reducer: {
        listStatusStore: StatusReducer
    }
});
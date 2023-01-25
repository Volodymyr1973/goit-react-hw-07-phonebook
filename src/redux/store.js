import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice";
import { filterReducer} from "./filterSlice";
// import { singleContactReducer } from "./singleContactSlice";


const rootReducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer
});

const store = configureStore({
    reducer: rootReducer,
  
})


export default store;

// export default configureStore ({
//     reducer: {
//         contacts: contactReducer,
//         filter: filterReducer,
//     }
// })
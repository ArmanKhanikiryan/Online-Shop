import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


const store = configureStore({
    reducer: {
        shopUsers: () => {
            
        }
    }
})

export type InitialState = ReturnType<typeof store.getState>
export type TDispatch = typeof store.dispatch
export const UseAppSelector: TypedUseSelectorHook<InitialState> = useSelector;
export const useAppDispatch: () => TDispatch = useDispatch;
export default store
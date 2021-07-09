import { useContext,createContext,useReducer } from "react";
import { initialState,reducer } from "./Reducer/userReducer";

export const VideoContext=createContext();

export function VideoProvider({children}){
const[state,dispatch]=useReducer(reducer,initialState);
    return(
        <VideoContext.Provider value={{state,dispatch}}>
            {children}
        </VideoContext.Provider>
    )
}


export function useVideo(){
    return useContext(VideoContext);
}
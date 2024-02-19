import {createContext, useReducer} from "react";

const initialState={
    user:null,
    role:null,
    toke:null
}

export const authContext=createContext(initialState)

const authReducer = (state:any,action:any) => {
    switch (action.type) {
        case "LOGIN_START":
            return ({
                ...state,
                user:null,
                role:null,
                token:null
            })
        case "LOGIN_SUCCESS":
            return ({
                ...state,
                user:action.payload.user,
                role:action.payload.role,
                token:action.payload.token
            })

        case "LOGIN_OUT":
            return ({
                ...state,
                user:null,
                role:null,
                token:null
            })
        default:
          return({...state})
    }

}
// @ts-ignore
export const AuthContext=({children})=>{
    const [state,dispatch]=useReducer(authReducer,initialState)

    return(
        <authContext.Provider value={{
            user:state.user,toke:state.token, role:state.role, dispatch}}>
            {children}
        </authContext.Provider>
    )

}
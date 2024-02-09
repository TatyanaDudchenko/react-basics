import React from "react";

const defaultState = { posts: [] };
const reducer = (state, action) => {
    switch (action.type) {
        case "setPosts":
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}

export const actionSetPosts = (posts) => ({
    type: "setPosts",
    payload: posts
})

const Context = React.createContext({
    state: defaultState,
    dispatch: () => undefined
})

export const ContextProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = React.useReducer(reducer, defaultState);
    return (
        <Context.Provider value={{ state, dispatch }} >
            {children}
        </Context.Provider>
    );
}

export const useContext = () => {
    const { state, dispatch } = React.useContext(Context);
    return {
        state,
        dispatch
    }
}
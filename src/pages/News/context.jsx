import React from "react";

const defaultState = {
    news: [
        {
            title: "news1",
        },
        {
            title: "news2",
        },
    ]
};

const reducer = (state, action) => {
    switch (action.type) {
        case "addNews":
            return {
                ...state,
                // news: action.payload
                news: [...state.news, action.payload]
            }
        default:
            return state
    }
};

export const actionAddNews = (news) => ({
    type: "addNews",
    payload: news
});

const Context = React.createContext({
    state: defaultState,
    dispatch: () => undefined
});

export const ContextProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = React.useReducer(reducer, defaultState);

    return (
        <Context.Provider value={{ state, dispatch }} >
            {children}
        </Context.Provider>
    )
};

export const useContext = () => {
    const { state, dispatch } = React.useContext(Context);

    return ({
        state,
        dispatch
    })
};
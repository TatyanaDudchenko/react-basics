import React from "react";

const defaultState = {
    clients: [
        {
            name: "Иванов Иван Иванович",
            category: "физлицо",
        },
        {
            name: "ООО Металл",
            category: "юрлицо",
        },
    ]
};

const reducer = (state, action) => {
    switch (action.type) {
        case "addClient":
            return {
                ...state,
                clients: [...state.clients, action.payload]
            }
        default:
            return state
    }
};

export const actionAddClient = (client) => ({
    type: "addClient",
    payload: client
});

const Context = React.createContext({
    state: defaultState,
    dispatch: () => undefined
});

export const ContextProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = React.useReducer(reducer, defaultState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
};

export const useContext = () => {
    const { state, dispatch } = React.useContext(Context);

    return {
        state,
        dispatch
    }
};


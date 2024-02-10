import React from "react";

const defaultState = {
    contractors: []
}; 

const reducer = (state, action) => {
    switch (action.type) {
        case "addContractor":
            return {
                ...state,
                contractors: [...state.contractors, action.payload]
            }
        default:
            return state
    }
};

export const actionAddContractor = (contractor) => ({
    type: "addContractor",
    payload: contractor
});

const Context = React.createContext({
    state: defaultState,
    dispatch: () => undefined
});

export const ContextProvider = (props) => {
    const { children, initialState } = props;
    const [state, dispatch] = React.useReducer(reducer, {
        ...defaultState,
        ...initialState
    })

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
};

export const useContext = () => {
    const { state, dispatch } = React.useContext(Context);

    return ({
        state,
        dispatch
    });
};
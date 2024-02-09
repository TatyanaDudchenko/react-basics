import React from "react";

const defaultState = {
    contractors: [
        {
            contractorsName: "ООО Клининг",
            contractDate: "08.02.2024",
            contactFaces: {
                contact1: {
                    name: "Аркадий",
                    jobTitle: "менеджер по заявкам",
                    phoneNumber: "+79998887766",
                },
                contact2: {
                    name: "Анна",
                    jobTitle: "менеджер по качеству",
                    phoneNumber: "+75554443322",
                },
            },
            note: "Ежегодная автопролонгация"
        },
    ]
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
    const { children } = props;
    const [state, dispatch] = React.useReducer(reducer, defaultState)

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
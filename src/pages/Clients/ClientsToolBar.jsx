import React from "react";

import { useContext, actionAddClient } from "./context";

const ClientsToolBar = () => {
    const { dispatch } = useContext();
    return (
        <div>
            <button type="button"
                onClick={() => {
                    dispatch(actionAddClient({
                        name: "iii",
                        category: "kkk"
                    }))
                }}>
                Добавить клиента
            </button>
        </div>
    );
};

export default ClientsToolBar;
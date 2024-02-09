import React from "react";

import { useContext } from "./context";

const ClientsList = () => {
    const { state } = useContext();
    
    return (
        <div>
            {state.clients.map((client, index) => (
                <div key={index}>
                    {client.name}, {client.category}
                </div>
            ))}
        </div>
    );
};

export default ClientsList;
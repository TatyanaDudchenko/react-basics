import React from "react";

import { ContextProvider } from "./context";
import ClientsInner from "./ClientsInner";

const Clients = () => {
    return (
        <ContextProvider>
            <ClientsInner />
        </ContextProvider>
    );
};

export default Clients;
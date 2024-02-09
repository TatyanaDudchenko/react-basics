import React from "react";

import ClientsList from "./ClientsList";
import ClientsToolBar from "./ClientsToolBar";

const ClientsInner = () => {
    return (
        <>
            <ClientsToolBar />
            <ClientsList />
        </>
    );
};

export default ClientsInner;
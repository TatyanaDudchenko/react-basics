import React from "react";

import { ContextProvider } from "./context";
import ContractorsInner from "./ContractorsInner";

const Contractors = () => {
    return (
        <ContextProvider>
            <ContractorsInner />
        </ContextProvider>
    );
};

export default Contractors;
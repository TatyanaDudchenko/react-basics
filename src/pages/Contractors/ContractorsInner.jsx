import React from "react";

import ContractorsToolBar from "./ContractorsToolBar";
import ContractorsList from "./ContractorsList";

const ContractorsInner = () => {
    return (
        <>
            <ContractorsToolBar />
            <ContractorsList />
        </>
    );
};

export default ContractorsInner;
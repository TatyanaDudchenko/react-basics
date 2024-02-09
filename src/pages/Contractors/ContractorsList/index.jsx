import React from "react";

import { useContext } from "../context";
import Contractor from "./Contractor";

const ContractorsList = () => {
    const { state } = useContext();
    const { contractors } = state;

    return (
        <div>
            {contractors.map((contractor, index) => (
                <Contractor key={index} {...contractor} />
            ))
            }
        </div >
    );
};

export default ContractorsList;
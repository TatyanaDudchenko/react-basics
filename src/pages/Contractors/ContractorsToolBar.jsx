import React from "react";

import { useContext, actionAddContractor } from "./context";

const ContractorsToolBar = () => {
    const { dispatch } = useContext();

    return (
        <div>
            <button type="button"
                onClick={() => {
                    dispatch(actionAddContractor({
                        contractorsName: "ИП Семенов Семен Семенович (принтер-сервис)",
                        contractDate: "09.02.2024",
                        contactFaces: {
                            contact1: {
                                name: "Семен",
                                jobTitle: "специалист по заправке картриджей",
                                phoneNumber: "+71112223344",
                            },
                            contact2: {
                                name: "Анна",
                                jobTitle: "техник по ремонту",
                                phoneNumber: "+76667778899",
                            },
                        },
                        note: "Ежегодная автопролонгация"
                    }))
                }}
            >
                Добавить подрядчика
            </button>
        </div>
    );
};

export default ContractorsToolBar;
import React from "react";

import { ContextProvider } from "./context";
import ClientsInner from "./ClientsInner";

const Clients = () => {
    const [data, setData] = React.useState(null);
    const loadData = React.useCallback(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
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
                })
            }, 5000);
        })
    }, []);

    React.useEffect(() => {
        if(!data) {
            loadData().then((result) => {
                setData(result)
            })
        }

    }, [data, loadData])

    if (!data) {
        return (
            <>
            loading...
            </>
        )
    }

    return (
        <ContextProvider initialState={data} >
            <ClientsInner />
        </ContextProvider>
    );
};

export default Clients;
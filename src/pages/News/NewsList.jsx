import React from "react";

import { useContext } from "./context";

const NewsList = () => {
    const { state } = useContext();
    
    return (
        <div>
            {state.news.map((news, index) => (
                <div key={index}>
                    {news.title}
                </div>
            ))}
        </div>
    );
};

export default NewsList;
import React from "react";

import { useContext, actionAddNews } from "./context";

const NewsToolBar = () => {
    const { dispatch } = useContext();
    
    return (
        <div>
            <button type="button"
                onClick={() => {
                    dispatch(actionAddNews({ title: "ddd" }))
                }}>
                Add post
            </button>
        </div>
    )
}

export default NewsToolBar;
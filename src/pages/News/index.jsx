import React from "react";

import { ContextProvider } from "./context";
import NewsInner from "./NewsInner";

const News = () => {
    return (
        <ContextProvider>
            <NewsInner />
        </ContextProvider>
    )
}

export default News;
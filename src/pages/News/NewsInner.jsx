import React from "react";

import NewsToolBar from "./NewsToolBar";
import NewsList from "./NewsList";

const NewsInner = () => {
    return (
        <>
            <NewsToolBar />
            <NewsList />
        </>
    );
};

export default NewsInner;
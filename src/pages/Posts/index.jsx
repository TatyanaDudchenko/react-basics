import React, { useState, useEffect, useRef } from "react";

import { ContextProvider } from "./context";
import PostsInner from "./PostsInner";

const Posts = () => {
    return (
        <ContextProvider>
            <PostsInner />
        </ContextProvider>
    )
}

export default Posts;
import React from "react";
import cl from "./AddItemModal.module.css";

const AddItemModal = ({ children, visible, setVisible }) => {

    const rootClasses = [cl.addItemModal]

    if(visible === true) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={cl.addItemModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default AddItemModal;
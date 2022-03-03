import React, { useState } from "react";
import BoxStore from "./BoxStore/BoxStore";
import MapStore from "./MapStore/MapStore";
import ModalStore from "./ModalStore/ModalStore";

function index(props) {
    const [show, setShow] = useState<boolean>(true);
    const handleClose = () => {
        setShow(false);
    };
    return (
        <>
            <div className="store-page">
                <MapStore />
                <BoxStore />
                <ModalStore show={show} handleClose={handleClose} />
            </div>
        </>
    );
}

export default index;

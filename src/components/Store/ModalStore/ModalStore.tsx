import React from "react";
import { Modal } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";

function ModalStore({ show, handleClose }) {
    const { t } = useTranslation();
    return (
        <Modal show={show} dialogClassName="modal-dialog-scrollable modal-dialog-centered org-modal modal-master">
            <a data-dismiss="modal" onClick={handleClose}>
                <i className="icon-close"></i>
            </a>
            <div className="container">
                <div className="w-100 pt-4 pb-4 px-1">
                    <div className="mb-4 px-md-8 px-3 text-center">
                        <h3 className="mb-3 font-weight-bold font-size-24 color-grey">{t("modals:notification")}</h3>
                        <p className="font-weight-normal font-size-20 color-grey">
                            {t("modals:title_address")}:<div className="font-weight-bold">POPEYES VINMARK CỘNG HÒA</div>
                            {t("modals:content_address")}.
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-coke btn-nofication font-weight-bold" onClick={handleClose}>
                            {t("modals:understand")}
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalStore;

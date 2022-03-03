import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Modal } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";

function ModalSignUp({ show, handleClose }) {
    const { t } = useTranslation();
    return (
        <Modal show={show} dialogClassName="modal-dialog-scrollable modal-dialog-centered org-modal modal-master" contentClassName="bg-white">
            <a data-dismiss="modal" onClick={handleClose}>
                <i className="icon-close"></i>
            </a>
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-12 modal-body-ctx">
                        <PerfectScrollbar className="modal-body px-md-5 my-3 my-md-5 py-md-0">
                            <div className="modal-body-content px-md-3">
                                <div className="nav-wrapper mb-3 mb-md-3 position-sticky bg-white" style={{ top: 0 }}>
                                    <ul className="nav org-nav org-nav-separator fw-700 justify-content-center" role="tablist">
                                        <li className="nav-item" role="option">
                                            <a className="nav-link px-0 mx-3 active" id="tab-1" data-toggle="tab" href="#tab-signin" role="tab" aria-controls="tab-signin" aria-selected="true">
                                                {t("common:signin")}
                                            </a>
                                        </li>
                                        <li className="nav-item" role="option">
                                            <a className="nav-link px-0 mx-3" id="tab-2" data-toggle="tab" href="#tab-signup" role="tab" aria-controls="tab-ct-2" aria-selected="false">
                                                {t("common:signup")}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="form-wrapper">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tab-signin" role="tabpanel" aria-labelledby="tab-signin">
                                            <div className="tab-pane-content">
                                                <form action="#" className="mb-0 nomal">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="inp-username" className="color-grey">
                                                            {t("modals:phone")}
                                                        </label>
                                                        <input type="email" className="form-control placeholder-text-grey-light placeholder-nomal" id="inp-username" placeholder={t("modals:enter_phone")} />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="inp-password" className="color-grey">
                                                            {t("modals:password")}
                                                        </label>
                                                        <input type="password" className="form-control placeholder-text-grey-light placeholder-nomal" id="inp-password" placeholder={t("modals:enter_password")} />
                                                    </div>
                                                    <div className="form-group text-right">
                                                        <a href="#" className="text-coke">
                                                            {t("modals:forget")}?
                                                        </a>
                                                    </div>

                                                    <button className="btn btn-coke fw-700 w-100" style={{ textTransform: "uppercase" }}>
                                                        {t("common:signin")}
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tab-signup" role="tabpanel" aria-labelledby="tab-signup">
                                            <div className="tab-pane-content">
                                                <form action="#" className="mb-0 nomal">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="inp-fullname">{t("modals:name")}</label>
                                                        <input type="email" className="form-control placeholder-text-grey-light placeholder-nomal" id="inp-fullname" placeholder={t("modals:enter_name")} />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="inp-phone">{t("modals:phone")}</label>
                                                        <input type="text" className="form-control placeholder-text-grey-light placeholder-nomal" id="inp-phone" placeholder={t("modals:enter_phone")} />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="inp-password">{t("modals:password")}</label>
                                                        <input type="password" className="form-control placeholder-text-grey-light placeholder-nomal" id="inp-password" placeholder={t("modals:enter_password")} />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="inp-password-2">{t("modals:confirm_password")}</label>
                                                        <input type="password" className="form-control placeholder-text-grey-light placeholder-nomal" id="inp-password-2" placeholder={t("modals:enter_confirm_password")} />
                                                    </div>

                                                    <button className="btn btn-coke fw-700 w-100" style={{ textTransform: "uppercase" }}>
                                                        {t("common:signup")}
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PerfectScrollbar>
                        {/* <div className="modal-body px-md-5 my-3 my-md-5 py-md-0" data-provider="PerfectScrollbar"></div> */}
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalSignUp;

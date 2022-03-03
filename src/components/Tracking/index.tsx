import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React, { useState } from "react";
import TrackingDetail from "./TrackingDetail";

function Tracking(props) {
    const { t } = useTranslation();
    const [isShow, setIsShow] = useState(false);
    const handleSubmit = () => {
        setIsShow(true);
    };
    return (
        <main role="main">
            {/* <!-- start layout --> */}
            <section className="section-tracking">
                <div className="container">
                    <div className="row">
                        {/* <!-- start image --> */}
                        <div className="col-12 col-md-5">
                            <div className="box-bg-tracking">
                                <img src="../assets/img/tracking-chicken-run.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                        {/* <!-- end image --> */}

                        {/* <!-- start working space --> */}
                        <div className="col-12 col-md-7">
                            <div className="box-tracking">
                                <div className="title-tracking">{t("tracking:title")}</div>
                                <form action="/" method="POST">
                                    <div className="form-tracking">
                                        <div className="input-group input-group-coke">
                                            <input type="text" className="form-control phone-number" placeholder={t("modals:enter_phone")} />
                                            <div className="input-group-append">
                                                <a className="input-group-text" onClick={handleSubmit}>
                                                    {t("tracking:check")}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {isShow ? <TrackingDetail /> : <></>}
                                </form>
                            </div>
                        </div>
                        {/* <!-- end working space --> */}
                    </div>
                </div>
            </section>
            {/* <!-- end layout --> */}
        </main>
    );
}

export default Tracking;

import useTranslation from "next-translate/useTranslation";
import React from "react";

function Voucher() {
    const { t } = useTranslation();
    return (
        <main role="main" className="bg-cover--black-zone">
            {/* <!-- start slider --> */}
            <section className="section-voucher">
                <div className="container container-voucher">
                    <div className="row">
                        <div className="card org-card-base">
                            <div className="card-body">
                                <h4 className="title-voucher">{t("voucher:title")}</h4>
                                <p className="enter-voucher">{t("voucher:content")}</p>
                                <form action="#" className="form-voucher-spacing">
                                    <div className="form-voucher">
                                        <div className="input-group input-group-coke">
                                            <input type="text" className="form-control" placeholder={t("voucher:input")} />
                                            <div className="input-group-append">
                                                <a className="input-group-text">{t("voucher:button")}</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end slider --> */}
        </main>
    );
}
export default Voucher;

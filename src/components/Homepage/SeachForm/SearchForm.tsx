import useTranslation from "next-translate/useTranslation";
import React from "react";

function SearchForm(props) {
    const { t } = useTranslation();
    return (
        <section className="wrapper-search">
            <div className="container-md">
                <div className="product-shipping">
                    <div className="org-search">
                        <div className="nav-wrapper-simple" data-toggle="nav-simple">
                            <ul className="nav nav-transform overflow-sm-hidden overflow-md-visible" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="tab-1" data-toggle="tab" href="#tab-ct-1" role="tab" aria-controls="tab-ct-1" aria-selected="true">
                                        {t("home:delivery")}
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="tab-2" data-toggle="tab" href="#tab-ct-2" role="tab" aria-controls="tab-ct-2" aria-selected="false">
                                        {t("home:carry")}
                                    </a>
                                </li>
                            </ul>
                            <button className="nav-curr nav-curr-prev d-md-none">
                                <i className="icon-back"></i>
                            </button>
                            <button className="nav-curr nav-curr-next d-md-none">
                                <i className="icon-next"></i>
                            </button>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane tab-box active" id="tab-ct-1" role="tabpanel" aria-labelledby="tab-1">
                                <div className="tab-pane-content">
                                    <form action="#" className="mb-0 mx-md-4">
                                        <div className="input-autocomplete" id="current-address">
                                            <div className="input-group input-group-coke">
                                                <input type="text" className="form-control" placeholder={t("home:address")} />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <i
                                                            className="icon-search"
                                                            style={{
                                                                fontSize: "24px",
                                                            }}
                                                        ></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div id="autocomplete-results"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchForm;

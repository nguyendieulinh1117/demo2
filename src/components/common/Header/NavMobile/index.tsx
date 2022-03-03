import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

function NavMobile({ handleChange, locale }) {
    const { t } = useTranslation();
    return (
        <div className="navbar-menu-wrap" id="menuWrap">
            {/* <!-- start user info --> */}
            <div className="user-info">
                <p className="fw-700 bigger mb-0">{t("common:welcome")} Nguyễn An</p>
                <a className="text-decoration-none small" id="logOut" href="#">
                    {t("common:logout")}
                </a>
            </div>
            {/* <!-- end user info --> */}

            {/* <!-- start menu --> */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href={"/promotion"}>
                        <a className="nav-link">
                            <span className="text">{t("common:promotion")}</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={"/product"}>
                        <a className="nav-link">
                            <span className="text">{t("common:menu")}</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={"/store"}>
                        <a className="nav-link">
                            <span className="text">{t("common:store")}</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={"/tracking"}>
                        <a className="nav-link">
                            <span className="text">{t("common:tracking")}</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={"/"}>
                        <a className="nav-link">
                            <span className="text">{t("common:party")}</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={"/about-us"}>
                        <a className="nav-link">
                            <span className="text">{t("common:about")}</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={"/about-us"}>
                        <a className="nav-link">
                            <span className="text">{t("common:career")}</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={"/voucher"}>
                        <a className="nav-link">
                            <span className="text">{t("common:voucher")}</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={"/"}>
                        <a className="nav-link">
                            <span className="text">{t("common:news")}</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={"/"}>
                        <a className="nav-link">
                            <span className="text">{t("common:contact")}</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    {locale && locale === "vi" ? (
                        <>
                            <a className="nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                                VIE
                            </a>
                            <div className="dropdown-menu" onClick={() => handleChange("en")}>
                                <img src="/assets/img/icon/eng-flag.svg" alt="" style={{ width: "24px" }} />
                                <span className="small" style={{ marginLeft: "5px" }}>
                                    ENGLISH
                                </span>
                            </div>
                        </>
                    ) : (
                        <>
                            <a className="nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                                EN
                            </a>
                            <div className="dropdown-menu" onClick={() => handleChange("vi")}>
                                <img src="/assets/img/icon/vn-flag.svg" alt="" style={{ width: "24px" }} />
                                <span className="small" style={{ marginLeft: "5px" }}>
                                    VIETNAMESE
                                </span>
                            </div>
                        </>
                    )}
                </li>
            </ul>
            {/* <!-- env menu --> */}
        </div>
    );
}

export default NavMobile;

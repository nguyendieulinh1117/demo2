import Link from "next/link";
import React, { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import ModalSignUp from "./Modals/ModalSignUp";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { switchLANGAction } from "../../../hook/actions/locales";
import { AppState } from "../../../hook/rootReducer";
import NavMobile from "./NavMobile";

function index(props) {
    const { t } = useTranslation();
    const router = useRouter();
    const dispatch = useDispatch();
    const [show, setShow] = useState<boolean>(false);
    const { locales }: any = useSelector((state: AppState) => state.locales);

    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };
    const handleChangeLanguage = (e: string) => {
        dispatch(switchLANGAction(e));
        router.push(
            {
                pathname: router.pathname,
                query: router.query,
            },
            router.asPath,
            { locale: e }
        );
    };
    useEffect(() => {
        dispatch(switchLANGAction(router.locale));
    }, []);
    return (
        <nav className="navbar sticky-top navbar-expand-md org-navbar">
            <Link href={"/"}>
                <a className="navbar-brand org-navbar-brand desktop">
                    <img src="/assets/img/logo/popeyes.svg" alt="fail" />
                </a>
            </Link>

            <div className="navbar-collapse collapse" id="collapsingNavbar">
                <ul className="navbar-nav text-center">
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
                </ul>
            </div>

            <ul className="nav navbar-nav navbar-rdot">
                <li className="nav-item nav-item-rdot">
                    {locales && locales === "vi" ? (
                        <div className="dropdown flag-vn-dropdown">
                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                VIE
                            </button>
                            <div className="dropdown-menu">
                                <div style={{ cursor: "pointer" }} onClick={() => handleChangeLanguage("en")}>
                                    <img src="/assets/img/icon/eng-flag.svg" alt="" style={{ width: "24px" }} />
                                    <span className="small" style={{ marginLeft: "5px" }}>
                                        ENGLISH
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="dropdown flag-vn-dropdown">
                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                EN
                            </button>
                            <div className="dropdown-menu">
                                <div style={{ cursor: "pointer" }} onClick={() => handleChangeLanguage("vi")}>
                                    <img src="/assets/img/icon/vn-flag.svg" alt="" style={{ width: "24px" }} />
                                    <span className="small" style={{ marginLeft: "5px" }}>
                                        VIETNAMESE
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
                <li className="nav-item nav-item-rdot desktop">
                    <Link href={"/rewards"}>
                        <a className="nav-link">
                            <img className="reward-logo" src="/assets/img/rewards.svg" alt="" />
                        </a>
                    </Link>
                </li>
                <li className="nav-item item-home nav-item-rdot mobile">
                    <Link href={"/"}>
                        <a className="nav-link link-home">
                            <img src="/assets/img/logo/popeyes.svg" alt="" />
                        </a>
                    </Link>
                </li>
                <li className="nav-item nav-item-rdot mobile">
                    <Link href={"/tracking"}>
                        <a className="nav-link">
                            <img src="/assets/img/icon/motor.svg" alt="" />
                        </a>
                    </Link>
                </li>
                <li className="nav-item nav-item-rdot mobile">
                    <Link href={"/promotion"}>
                        <a className="nav-link">
                            <img src="/assets/img/icon/setting.svg" alt="" />
                        </a>
                    </Link>
                </li>
                <li className="nav-item nav-item-rdot mobile">
                    <Link href={"/product"}>
                        <a className="nav-link">
                            <img src="/assets/img/icon/menu.svg" alt="" />
                        </a>
                    </Link>
                </li>
                <li className="nav-item nav-group-item nav-item-rdot">
                    <a className="nav-link" onClick={handleShow} id="signUpIcon" style={{ lineHeight: 0 }}>
                        <div className="icon rdot">
                            <i className="icon-person"></i>
                        </div>
                    </a>
                </li>
                <li className="nav-item nav-item-rdot active">
                    <Link href={"/cart-detail"}>
                        <a className="nav-link" style={{ lineHeight: 0 }}>
                            <div className="icon rdot">
                                <i className="icon-basket"></i>
                                <div className="dot-bell">
                                    <span style={{ lineHeight: 1.25 }}>23</span>
                                </div>
                            </div>
                        </a>
                    </Link>
                </li>
                <li className="nav-item nav-item-rdot d-md-none">
                    <a className="nav-link" id="btnMenuWrap" data-toggle="menu" data-target="#menuWrap">
                        <div className="icon rdot">
                            <i className="icon-hamburger-menu"></i>
                        </div>
                    </a>
                </li>
            </ul>

            <NavMobile locale={locales} handleChange={handleChangeLanguage} />
            <ModalSignUp show={show} handleClose={handleClose} />
        </nav>
    );
}

export default index;

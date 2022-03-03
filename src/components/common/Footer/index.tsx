import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function index(props) {
    const { t } = useTranslation();
    const [showBackTop, setShowBackTop] = useState<boolean>(false);
    const [colorBackTop, setColorBackTop] = useState<boolean>(false);

    const backTopRef: any = useRef();
    const footerRef: any = useRef();
    const handleShow = () => {
        if (window.scrollY > 10) {
            setShowBackTop(true);
        } else {
            setShowBackTop(false);
        }
        if (backTopRef.current.getBoundingClientRect().top + 5 > footerRef.current.getBoundingClientRect().top) {
            setColorBackTop(true);
        } else {
            setColorBackTop(false);
        }
    };

    const backTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", handleShow);
        return () => {
            window.removeEventListener("scroll", handleShow);
        };
    }, []);
    return (
        <>
            {/* <!-- start footer --> */}
            <footer className="footer" ref={footerRef}>
                <div className="container">
                    <div className="row footer-main">
                        <div className="col-md-10 hotline-a-alias">
                            <div className="box-hotline">
                                <div className="domino-hotline">
                                    <a href="#" className="footer-icon">
                                        <img className="img-fluid" src="/assets/img/logo/logo.svg" alt="" />
                                    </a>
                                    <div className="hotline-wrapper">
                                        <p>
                                            <img src="../assets/img/icon/phone.svg" alt="" />
                                            {t("common:hotline")}
                                        </p>
                                        <a href="tel:19006099" className="comp-hotline">
                                            19006008
                                        </a>
                                    </div>
                                </div>
                                <div className="alias-menu-link">
                                    <div className="box-list-about">
                                        <div className="nav-groups">
                                            <ul className="nav">
                                                <li className="nav-item">
                                                    <Link href={"/about-us"}>
                                                        <a className="nav-link">{t("common:about")}</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href={"/about-us"}>
                                                        <a className="nav-link">{t("common:career")}</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href={"/store"}>
                                                        <a className="nav-link">{t("common:store")}</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className="nav">
                                                <li className="nav-item">
                                                    <Link href={"/product"}>
                                                        <a className="nav-link">{t("common:menu")}</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href={"/promotion"}>
                                                        <a className="nav-link">{t("common:promotion")}</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">
                                                        {t("common:news")}
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul className="nav">
                                                <li className="nav-item">
                                                    <Link href={"/tracking"}>
                                                        <a className="nav-link">{t("common:tracking")}</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href={"/voucher"}>
                                                        <a className="nav-link">{t("common:voucher")}</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">
                                                        {t("common:contact")}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 credentials">
                            <div className="box-cre">
                                <img src="/assets/img/credentials.png" alt="" height="43" />
                            </div>
                        </div>
                    </div>
                    <div className="row footer-end">
                        <div className="col-12 box-brand">
                            © 2020 Popeyes Vietnam<span style={{ paddingLeft: "27px" }}></span>|<span style={{ paddingLeft: "27px" }}></span>Privacy Policy
                        </div>
                        <div className="col-12 box-brand-mobile">
                            <p className="domino-cc">
                                <span className="domino-footer">© 2020 Domino&apos;s Pizza Vietnam</span>
                                <span className="flag-mobile">
                                    <a className="text-decoration-none" href="#">
                                        <img src="/assets/img/icon/flag-vn.png" alt="" />
                                    </a>
                                    <a className="text-decoration-none" href="#">
                                        <img src="/assets/img/icon/flag-en.png" alt="" />
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- end footer --> */}

            {/* <!-- start absolute --> */}
            <div className={`position-fixed backToTop${showBackTop ? " reveal" : ""}${colorBackTop ? " white" : ""}`} onClick={backTop} ref={backTopRef}>
                <i className="icon-back-to-top"></i>
            </div>
            <div className="position-fixed d-block d-md-none" style={{ right: "2rem", bottom: "8rem", zIndex: 1000 }}>
                <a href="#">
                    <i className="comp-order-ring2"></i>
                </a>
            </div>
            <div className="position-fixed d-block d-md-none" style={{ right: "2rem", bottom: "4rem", zIndex: 1000 }}>
                <a href="tel:19006099">
                    <i className="comp-hotline-ring2 is-animating"> </i>
                </a>
            </div>
        </>
    );
}

export default index;

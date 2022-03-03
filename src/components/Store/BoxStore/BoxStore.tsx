import useTranslation from "next-translate/useTranslation";
import React from "react";

function BoxStore() {
    const { t } = useTranslation();
    return (
        <div className="box-info-store">
            <div className="list-select-city">
                <select className="select-city custom-select org-custom-select" name="" id="">
                    <option value="">{t("store:city")}</option>
                    <option value="">Tp. Hồ Chí Minh</option>
                </select>
                <select className="select-city custom-select org-custom-select" name="" id="">
                    <option value="">{t("store:district")}</option>
                    <option value="">Tân Phú</option>
                    <option value="">Quận 1</option>
                    <option value="">Quận 2</option>
                </select>
            </div>

            <div className="title-list-store">{t("store:title")}</div>
            <div className="hotline-store">Hotline 19006008</div>
            <div className="list-store">
                <div className="item-store">
                    <div className="info-store">
                        <div className="name-store">POPEYES MAC PLAZA</div>
                        <div className="line"></div>
                        <div className="desc-store">
                            {t("store:open")}: 10:00 - 22:00 <br />
                            {t("store:address")}: Tầng4, TTTM Machinco, 10 Trần Phú, P. Mộ Lao, Hà Đông
                        </div>
                        <div className="wrap-btn-store">
                            <a href="#" className="btn-store">
                                {t("home:carry")}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item-store">
                    <div className="info-store">
                        <div className="name-store">POPEYES MAC PLAZA</div>
                        <div className="line"></div>
                        <div className="desc-store">
                            {t("store:open")}: 10:00 - 22:00 <br />
                            {t("store:address")}: Tầng4, TTTM Machinco, 10 Trần Phú, P. Mộ Lao, Hà Đông
                        </div>
                        <div className="wrap-btn-store">
                            <a href="#" className="btn-store">
                                {t("home:carry")}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item-store">
                    <div className="info-store">
                        <div className="name-store">POPEYES MAC PLAZA</div>
                        <div className="line"></div>
                        <div className="desc-store">
                            {t("store:open")}: 10:00 - 22:00 <br />
                            {t("store:address")}: Tầng4, TTTM Machinco, 10 Trần Phú, P. Mộ Lao, Hà Đông
                        </div>
                        <div className="wrap-btn-store">
                            <a href="#" className="btn-store">
                                {t("home:carry")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxStore;

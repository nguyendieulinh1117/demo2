import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";
function TrackingDetail() {
    const { t } = useTranslation();
    return (
        <div className="search-results">
            <h5 className="mrb-results">
                {t("tracking:content")} <span className="text-popeyes">0908123456</span>:
            </h5>
            <table className="table-tracking">
                <thead>
                    <tr>
                        <th>{t("tracking:order_code")}</th>
                        <th>{t("tracking:date")}</th>
                        <th>{t("tracking:value")}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>000001</td>
                        <td>15:30 25/9/2020</td>
                        <td>1.490.000đ</td>
                        <td>
                            <Link href={"/progress"}>
                                <a className="text-coke text-see-more">
                                    {t("tracking:see")} <span className="d-none d-md-inline">{t("tracking:detail")}</span>
                                </a>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>000002</td>
                        <td>15:30 25/9/2020</td>
                        <td>490.000đ</td>
                        <td>
                            <Link href={"/progress"}>
                                <a className="text-coke text-see-more">
                                {t("tracking:see")} <span className="d-none d-md-inline">{t("tracking:detail")}</span>
                                </a>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TrackingDetail;

import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../hook/rootReducer";

function ItemPromotion({ slug, image, title, disabled }) {
    const { t } = useTranslation();
    const { locales }: any = useSelector((state: AppState) => state.locales);
    return (
        <div className="promotion-container">
            <div className="box-promotion">
                <Link
                    href={{
                        pathname: "promotion/[PromotionId]",
                        query: { PromotionId: slug },
                    }}
                    locale={locales}
                >
                    <a className="promotion-image">
                        <img src={image} alt={slug} />
                    </a>
                </Link>
                <div className="promotion-text">
                    <Link
                        href={{
                            pathname: "promotion/[PromotionId]",
                            query: { PromotionId: slug },
                        }}
                        locale={locales}
                    >
                        <a className="promotion-name">{title}</a>
                    </Link>
                    <div className="box-btn">
                        {disabled ? (
                            <button disabled className="order-now disabled">
                                {t("common:order_now")}
                            </button>
                        ) : (
                            <button className="order-now">{t("common:order_now")}</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ItemPromotion;

import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPromotionDetailAction } from "../../../hook/actions/promotions";
import { AppState } from "../../../hook/rootReducer";

function PromotionDetail() {
    const { t } = useTranslation();
    const router = useRouter();
    const dispatch = useDispatch();
    const { promotionDetail }: any = useSelector((state: AppState) => state.promotions);
    const { locales }: any = useSelector((state: AppState) => state.locales);
    console.log(router.query.PromotionId);
    useEffect(() => {
        dispatch(getPromotionDetailAction(router.query.PromotionId));
    }, []);
    console.log(promotionDetail);
    const promotion = promotionDetail && promotionDetail.response && promotionDetail.response.data;
    console.log(promotion);
    const summary = locales === "vi" ? promotion && promotion.sumary : promotion && promotion.sumaryEn;
    const content = locales === "vi" ? promotion && promotion.blogContent : promotion && promotion.blogContentEn;
    return (
        <main role="main">
            {/* <!-- start promotion list --> */}
            {promotionDetail.success ? (
                <section className="section-promotion-detail">
                    {/* <!-- start promotion --> */}
                    <div className="container">
                        <div className="section-title">Khuyến mãi</div>
                        <div className="box-promotion">
                            <div className="promotion-image">
                                <img src={promotion && promotion.imageUrl} alt={promotion && promotion.slug} />
                            </div>
                            <div className="promotion-text">
                                <div className="promotion-name">{locales === "vi" ? promotion && promotion.title : promotion && promotion.titleEn}</div>
                                <div className="small-line"></div>
                                <div className="deal-list">
                                    {summary &&
                                        summary.split("\n").map((item, index) => (
                                            <div className="deal" key={index}>
                                                {item}
                                            </div>
                                        ))}
                                    {content &&
                                        content.split("\n").map((item, index) => (
                                            <div className="deal" key={index}>
                                                {item}
                                            </div>
                                        ))}
                                </div>
                                <div className="order-now">{promotion && promotion.approve ? <button>{t("common:order_now")}</button> : <></>}</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end promotion --> */}
                </section>
            ) : (
                <div>Loading....</div>
            )}
        </main>
    );
}

export default PromotionDetail;

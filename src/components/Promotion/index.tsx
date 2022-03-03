import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPromotionListAction } from "../../hook/actions/promotions";
import { AppState } from "../../hook/rootReducer";
import PromotionList from "./PromotionList";

function Promotion() {
    const dispatch = useDispatch();
    const { promotionList }: any = useSelector((state: AppState) => state.promotions);
    useEffect(() => {
        dispatch(getPromotionListAction({ acquisitionCount: 100, startCount: 1 }));
    }, []);
    console.log(promotionList);
    return (
        <main role="main">
            {/* <!-- start promotion list --> */}
            <section className="promotion-listing-page">
                <div className="container">
                    <div className="section-title">Khuyến mãi</div>
                    <div className="promotion-list">
                        {promotionList.success ? (
                            <PromotionList promotions={promotionList} />
                        ) : (
                            <>Loading.....</>
                        )}
                    </div>
                </div>
            </section>
            {/* <!-- end promotion list --> */}
        </main>
    );
}
export default Promotion;

import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../hook/rootReducer";
import ItemPromotion from "../PromotionItem";
function PromotionList({ promotions }) {
    const { locales }: any = useSelector((state: AppState) => state.locales);
    return (
        <div className="promotion-list">
            {promotions &&
                promotions.response &&
                promotions.response.data &&
                promotions.response.data.map((item, index) => (
                    <ItemPromotion
                        key={index}
                        slug={item.slug}
                        image={item.imageUrl}
                        title={locales === "vi" ? item.title : item.titleEn}
                        disabled={!item.approve}
                    />
                ))}
            {/* <ItemPromotion slug={"string 1"} image={"../assets/img/promotion/promotion-1.png"} title={"Tuần lễ siêu sale - Gà sốt kem tiêu chỉ 11k"} disabled={false} />
            <ItemPromotion slug={"string 2"} image={"../assets/img/promotion/promotion-2.png"} title={"Nạp pin đầu năm mua 1 được 2"} disabled={false} />
            <ItemPromotion slug={"string 3"} image={"../assets/img/promotion/promotion-3.png"} title={"Thứ 4 hàng tuần mua 1 tặng 1"} disabled={false} />
            <ItemPromotion slug={"string 4"} image={"../assets/img/promotion/promotion-4.png"} title={"Member day - Gà giòn cho hoá đơn từ 100K"} disabled={false} />
            <ItemPromotion slug={"string 5"} image={"../assets/img/promotion/promotion-5.png"} title={"Giảm 30K khi mua trên app BAEMIN"} disabled={true} />
            <ItemPromotion slug={"string 6"} image={"../assets/img/promotion/promotion-6.png"} title={"Lì xì đầu năm - Giảm tới 58%"} disabled={true} /> */}
        </div>
    );
}
export default PromotionList;

import React from "react";

function RankCard() {
  return (
    <div className="rewards-card">
      <div className="rank">Bạch kim</div>
      <div className="next-rank-score">
        Tích thêm 8588 Điểm để thăng hạng Diamond
      </div>
      <div className="rank-exp">
        <div className="exp-collected" />
      </div>
      <div className="next-rank-score">
        11.412 Điểm sẽ hết hạn vào ngày 28/11/2021
      </div>
      <div className="benefit">
        <a href="#">
          Xem ưu đãi <img src="../assets/img/rewards/left-arrow.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
export default RankCard;

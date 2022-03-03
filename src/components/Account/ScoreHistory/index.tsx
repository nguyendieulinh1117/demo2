import React, { useState } from "react";
import RankCard from "../AccountInfo/RankCard";
function ScorePage() {
  return (
    <div className="box-rewards page">
      <div className="title">
        <a href="./account-info.html">
          <img src="../assets/img/rewards/left-arrow.svg" alt="" />
        </a>
        Lịch sử điểm thưởng
      </div>
      <div className="item-container">
        <div className="rewards-card">
          <div className="rewards-items">
            <div className="rewards-name">
              <div className="img-item">
                <img src="../assets/img/rewards/reward.svg" alt="" />
              </div>
              <div className="name">Thái Hợp Nguyễn</div>
            </div>
            <div className="rewards-score">
              <div className="score-icon">
                <img
                  src="../assets/img/rewards/score-icon-popeyes.svg"
                  alt=""
                />
              </div>
              <div className="score">3412 Điểm</div>
              <div className="qr">
                <img src="../assets/img/rewards/QR.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <RankCard/>
      </div>
    </div>
  );
}
export default ScorePage;

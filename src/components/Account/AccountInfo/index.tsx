import React from "react";
import RankCard from "./RankCard";
function AccountInfo() {
  return (
    <div className="box-rewards main">
      <div className="rewards-card">
        <div className="rewards-name">
          <div className="img-item">
            <img src="../assets/img/rewards/reward.svg" alt='' />
          </div>
          <div className="name">Thái Hợp Nguyễn</div>
        </div>
      </div>
      <RankCard/>
    </div>
  );
}
export default AccountInfo;

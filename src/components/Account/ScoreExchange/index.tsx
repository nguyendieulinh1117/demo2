import React from "react";

function ScoreExchange(){
    return(
      <div className="box-rewards offer">
  <div className="title title-score">
    <div className="box-title">
      <a href="./account-info.html">
        <img src="../assets/img/rewards/left-arrow.svg" alt='' />
      </a>
      Đổi điểm thưởng
    </div>
    <span>
      Bạn đang có <div className="score">3412 điểm</div>
    </span>
  </div>
  <div className="item-container exchange-container">
    <div className="item exchange">
      <div className="img-item">
        <img src="../assets/img/rewards/item.png" alt='' />
      </div>
      <div className="content-item">
        <div className="content">
          <div className="voucher">
            1 gà giòn cay / không cay
          </div>
          <div className="discount">
            31/01/2022 - 17:14:00
          </div>
        </div>
        <div className="score">
          300 Điểm
          <a href='' className="change-btn">Đổi</a>
        </div>
      </div>
    </div>
    <div className="item exchange">
      <div className="img-item">
        <img src="../assets/img/rewards/item2.png" alt='' />
      </div>
      <div className="content-item">
        <div className="content">
          <div className="voucher">
            Gà tắm nước mắm 95k
          </div>
          <div className="discount">
            31/01/2022 - 16:14:00
          </div>
        </div>
        <div className="score">
          800 Điểm
          <a href='' className="change-btn">Đổi</a>
        </div>
      </div>
    </div>
    <span>
      Bạn đang có <div className="score">3412 điểm</div>
    </span>
  </div>
</div>

    )
}   
export default ScoreExchange
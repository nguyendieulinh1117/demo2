import React from "react";

function Rewards() {
  return (
  <section className="section-rewards">
  <div className="banner banner-head">
    <img className="desktop" src="../assets/img/rewards-master/banner-head.png" alt='' />
    <img className="mobile" src="../assets/img/rewards-master/banner-mb.png" alt='' />
  </div>
  <div className="container">
    <div className="title-box">
      <div className="title-main">Get Started Easily</div>
      Earn points and get rewarded in a few easy steps.
    </div>
    <div className="box-item margin-section">
      <div className="item">
        <div className="img-item">
          <img src="../assets/img/rewards-master/icon-1.svg" alt='' />
        </div>
        <div className="content-item">
          <div className="title">Create An Account</div>
          <span>To get started, <a href="#">Sign Up</a>. You can also Download the app to get access to the full range of Rewards benefits.</span>
        </div>
      </div>
      <div className="item">
        <div className="img-item">
          <img src="../assets/img/rewards-master/icon-2.svg" alt='' />
        </div>
        <div className="content-item">
          <div className="title">Place An App or Online Order</div>
          <span>Open the App or visit popeyes.com on your desktop or mobile device to place an order. <a href="#"> See Menu</a></span>
        </div>
      </div>
      <div className="item">
        <div className="img-item">
          <img src="../assets/img/rewards-master/icon-3.svg" alt='' />
        </div>
        <div className="content-item">
          <div className="title">Earn Points &amp; Get Rewards</div>
          <span>As you earn points, you can redeem them for some of your favorite menu items. Start redeeming with as little as 150 points!</span>
        </div>
      </div>
    </div>
  </div>
  <div className="blog-box margin-section">
    <div className="container">
      <div className="title-box nth-title">
        <div className="title-main">
          <div className="blink">
            <img src="../assets/img/rewards-master/blink.svg" alt='' />
          </div>
          <div className="blink2">
            <img src="../assets/img/rewards-master/blink2.svg" alt='' />
          </div>
          Y'all Ready to be Rewarded?
        </div>
        Once you're part of the family, take advantage of these exclusive benefits online or on the app.
      </div>
    </div>
    <div className="blogs margin-section">
      <div className="item blogs-item">
        <div className="img-item">
          <img src="../assets/img/rewards-master/blog.png" alt='' />
        </div>
        <div className="content-item">
          <div className="title">Happy Hour</div>
          <span>Enjoy $1 regular sides every Tuesday &amp; Thursday 5-9PM</span>
        </div>
      </div>
      <div className="item blogs-item">
        <div className="img-item">
          <img src="../assets/img/rewards-master/blog2.png" alt='' />
        </div>
        <div className="content-item">
          <div className="title">Personalized Challenges</div>
          <span>Be on the lookout for personalized challenges that get you rewards even quicker.</span>
        </div>
      </div>    
      <div className="item blogs-item">
        <div className="img-item">
          <img src="../assets/img/rewards-master/blog3.png" alt='' />
        </div>
        <div className="content-item">
          <div className="title">Bonus Points</div>
          <span>Earn 50 bonus points on select combo meals &amp; 100 bonus points on family meals.</span>
        </div>
      </div>        
    </div>
  </div>
  <div className="banner banner-foot margin-section">
    <img className="desktop" src="../assets/img/rewards-master/apps.svg" alt='' />
    <img className="mobile" src="../assets/img/rewards-master/banner-mb2.png" alt='' />
  </div>
  <div className="faq margin-section">
    <div className="container faq-box">
      <a href="#" className="active">FAQ</a>
      <a href="#">Terms &amp; Conditions</a>
    </div>
  </div>
  <div className="term">
    Disclaimer: The Popeyes® Rewards program is available in select U.S. cities on digital (App or online)  orders <a href=''>Terms and Conditions</a>  only and is subject to . Offers and requirements subject to change. For any questions, please <a href=''>contact</a> our digital support team.
  </div>
</section>

  );
}
export default Rewards;

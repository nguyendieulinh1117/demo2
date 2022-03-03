import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getBannerAction } from "../../../hook/actions/banners";
import { AppState } from "../../../hook/rootReducer";
function Banner(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "12%",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    dots: false,
                },
            },
        ],
    };
    const settingsMobile = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    dots: true,
                },
            },
        ],
    };
    //dispatch
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBannerAction({ acquisitionCount: 100, startCount: 1 }));
    }, []);
    const { locales }: any = useSelector((state: AppState) => state.locales);
    const banner: any = useSelector((state: AppState) => state.banners);
    console.log(banner);
    return (
        <>
            <section className="first-page show-desktop">
                {/* <!-- start slider --> */}
                <section className="first-page-slider first-page-stories">
                    <div className="container-fluid">
                        <Slider {...settings} className="org-slider">
                            {banner &&
                                banner.response &&
                                banner.response.data &&
                                banner.response.data.map((item, index) => (
                                    <div className="slide" key={index}>
                                        <Link href={"/promotion"}>
                                            <a>
                                                <div className="slide-img">
                                                    <img src={item.imageUrl} alt={locales && locales === "vi" ? item.title : item.titleEn} />
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                ))}
                        </Slider>
                    </div>
                </section>
                {/* <!-- end slider --> */}
            </section>
            {/* <!-- start slider mobile--> */}
            <section className="banner-slider-mobile show-mobile">
                <Slider {...settingsMobile} className="org-slider-mobile">
                    {banner &&
                        banner.response &&
                        banner.response.data &&
                        banner.response.data.map((item, index) => (
                            <div className="slide">
                                <Link href={"/promotion"}>
                                    <a>
                                        <div className="slide-img">
                                            <img src={item.imageUrl} alt={locales && locales === "vi" ? item.title : item.titleEn} />
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ))}

                    {/* <div className="slide">
                        <Link href={"/promotion"}>
                            <a>
                                <div className="slide-img">
                                    <img src="../assets/img/slide-banner-mobile.png" alt="" />
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="slide">
                        <Link href={"/promotion"}>
                            <a>
                                <div className="slide-img">
                                    <img src="../assets/img/slide-banner-mobile.png" alt="" />
                                </div>
                            </a>
                        </Link>
                    </div> */}
                </Slider>
            </section>
        </>
    );
}

export default Banner;

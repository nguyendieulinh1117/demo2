import "../styles/mixin.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    useEffect(() => {
        localStorage.setItem("LANGUAGE", router.locale ?? "vi");
    }, []);
    return (
        <>
            <Head>
                <div>
                    <title>Popeye's</title>
                    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" charSet="utf-8" />
                    <link rel="icon" type="image/x-icon" href="../assets/img/favicon.png" />
                </div>

                <script type="text/javascript" src="../assets/libs/jquery/jquery-3.5.1.min.js"></script>

                <script type="text/javascript" src="../assets/js/domino.js"></script>
                {/* <script type="text/javascript" src="../assets/js/map.js"></script> */}
                {/* <!--start required  --> */}
                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"
                    integrity="sha512-2rNj2KJ+D8s1ceNasTIex6z4HWyOnEYLVC3FigGOmyQCZc2eBXKgOxQmo3oKLHyfcj53uz4QMsRCWNbLd32Q1g=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                ></script>
                <script type="text/javascript" src="../assets/libs/bootstrap/js/bootstrap.min.js" />
                {/* // <!-- end required --> */}

                {/* // <!-- start here api --> */}
                <script src="https://js.api.here.com/v3/3.1/mapsjs-core.js" type="text/javascript" charSet="utf-8"></script>
                <script src="https://js.api.here.com/v3/3.1/mapsjs-service.js" type="text/javascript" charSet="utf-8"></script>
                {/* // <!-- end here api --> */}
                {/* map */}
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4S-7VnutQrvqzKjycYf4dmgxViUG9CGM&libraries=places&callback=initMap"></script>
                {/* <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyD9lAU0F3EL9rM0i9wX0DCot5mhq9NNVAw"></script> */}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

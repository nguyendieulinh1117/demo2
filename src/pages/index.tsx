import Router from "next/router";
import { useEffect } from "react";
import Home from "./home";
export default function Index() {
    // useEffect(() => {
    //     Router.replace("/vi");
    // }, []);
    return <Home />;
}
// export default Home.default;

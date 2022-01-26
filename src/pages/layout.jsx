import React from "react";
import '../sections/portfolio/landingpage.css'
import {Outlet} from "react-router-dom";

function Layout() {
    return (<>
            <Outlet/>
        </>
    );
}

export default Layout

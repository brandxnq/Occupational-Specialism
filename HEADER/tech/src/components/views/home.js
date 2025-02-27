import React from "react";
import AppHero from "../home/hero";
import AppAbout from "../home/about";
import AppFeature from "../home/feature";

function AppHome(){
    return(
        <><AppHero />
        <AppAbout />
        <AppFeature /></>
    )
}

export default AppHome;
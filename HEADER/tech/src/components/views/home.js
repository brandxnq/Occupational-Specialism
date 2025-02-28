import React from "react";
import AppHero from "../home/hero";
import AppAbout from "../home/about";
import AppFeature from "../home/feature";
import AppWorks from "../home/works";
import AppFaq from "../home/faq";

function AppHome(){
    return(
        <><AppHero />
        <AppAbout />
        <AppFeature />
        <AppWorks />
        <AppFaq />
        </>

    )
}

export default AppHome;
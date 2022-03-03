import * as React from 'react';

// layout
import NavbarAbout from './navbar-about';

// tab content 
import AboutUsTab from './TabContent/about-us';
import RecruitmentTab from './TabContent/recruitment';

function About() {
    return ( 
        <>
            <section className="about-us-section">
                <div className="container">
                    {/* navbar tab */}
                    <NavbarAbout />
                    {/* end navbar tab */}

                    <div className="tab-content">
                        <AboutUsTab />
                        <RecruitmentTab />
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
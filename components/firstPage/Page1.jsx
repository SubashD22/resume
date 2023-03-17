import React from 'react'
import Contact from './Contact'
import Education from './Education'
import Profile from './Profile'
import SkillSection from './SkillSection'

const Page1 = () => {

    return (
        <div className="container">
            {/* <!-- -----row start here----- --> */}
            <div className="row">
                {/* <!-- -----col left side start here----- --> */}
                <div className="col-md-5">
                    <img src="/shape1.png" id="top-image" />
                    <div className="girl-image">
                        <img src="/girl_image.png" />
                    </div>

                    {/* <!-- -----contact-section start here----- --> */}
                    <Contact />
                    {/* <!-- -----contact-section end here----- -->

			        <!-- -----skills-section start here----- --> */}
                    <SkillSection />
                    {/* <!-- -----skills-section end here----- --> */}
                    <img src="/shap2.png" id="image-shap2" />
                </div>
                {/* <!-- -----col left side end here----- -->
			     <!-- -----col right side start here----- --> */}
                <div className="col-md-7">
                    <div className="right-side">
                        <Profile />
                        <Education />
                    </div>
                    {/* <!-- -----col right side end here----- --> */}
                </div>
            </div>
            {/* <!-- -----row end here----- --> */}
            <img src="/shape3.png" id="bottom-image" />
        </div>
    )
}

export default Page1
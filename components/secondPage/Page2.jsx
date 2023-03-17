import React from 'react'
import Awards from './Awards'
import Certifications from './Certifications'
import TechnicalSkills from './TechnicalSkills'
import WorkExperience from './WorkExperience'

const Page2 = () => {
    return (
        <div className="container pg2">
            {/* <!-- -----row start here----- --> */}
            <div className="row">
                {/* <!-- -----col left side start here----- --> */}
                <div className="col-md-5">
                    {/* <!-- -----Technical Skills-section start here----- --> */}
                    <div className="technical-skills-section">
                        <div className="technical">
                            <img src="/shape1.png" id="top-image2" />
                            <TechnicalSkills />
                            <Awards />
                            <Certifications />
                            <img src="/shap2.png" id="image-shap22" />
                        </div>
                    </div>
                    {/* <!-- -----Technical Skills-section end here----- --> */}
                </div>
                {/* <!-- -----col left side end here----- -->
            <!-- -----col right side start here----- --> */}
                <div className="col-md-7">
                    <WorkExperience />
                </div>
                {/* <!-- -----col right side end here----- --> */}
            </div>
            {/* <!-- -----row end here----- --> */}
            <img src="/shape3.png" id="bottom-image2" />
        </div>
    )
}

export default Page2
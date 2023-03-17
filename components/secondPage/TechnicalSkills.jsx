import React from 'react'
import Skills from '../firstPage/Skills'

const TechnicalSkills = () => {
    return (
        <>
            <h2 className="techskils">Technical Skills</h2>

            <p className="tech">Technical Skills 1</p>
            <div className="marks-dots">
                <Skills points={7} />
            </div>

            <p className="tech">Technical Skills 2</p>
            <div className="marks-dots">
                <Skills points={9} />
            </div>

            <p className="tech">Technical Skills 3</p>
            <div className="marks-dots">
                <Skills points={8} />
            </div>
        </>
    )
}

export default TechnicalSkills
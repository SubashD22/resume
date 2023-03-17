import React from 'react'

const Skills = ({ points }) => {
    const skillPoints = Array.from({ length: 10 }, (_, i) => i + 1)
    return (
        <>
            {skillPoints.map((skill, i) => {
                return skill <= points ? <div key={i} className="dots"><i className="fa-solid fa-circle"></i></div> : <div key={i} className="dots"><i className="fa-regular fa-circle"></i></div>
            })}
        </>
    )
}

export default Skills
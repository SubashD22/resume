import { useResumeContext } from '@/context/resumeContext'
import React from 'react'

const Certifications = () => {
    const { certifications } = useResumeContext();
    return (
        <>
            <h2 id="certifications">Certifications</h2>
            {certifications.map((c, i) => {
                return <div key={i}>
                    <h4 className="award">{c.title}</h4>
                    <p>{c.time}</p>

                    <p className="company">{c.company}</p>
                    <p>URL : {c.url}</p>

                    <ul>
                        <li>{c.note}</li>
                    </ul>
                </div>
            })}

        </>
    )
}

export default Certifications
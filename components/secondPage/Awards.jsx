import { useResumeContext } from '@/context/resumeContext'
import React from 'react'

const Awards = () => {
    const { awards } = useResumeContext()
    return (
        <>
            <h2 id="awards">Awards</h2>
            {awards.map((a, i) => {
                return <div key={i}>
                    <h4 className="award">{a.title}</h4>
                    <p>{a.time}</p>

                    <p className="company">{a.company}</p>
                    <p>URL : {a.url}</p>

                    <ul>
                        <li>{a.note}</li>
                    </ul>
                </div>
            })}

        </>
    )
}

export default Awards
import { useResumeContext } from '@/context/resumeContext'
import React from 'react'

const Profile = () => {
    const { profile } = useResumeContext();
    const { name, role, summary } = profile
    return (
        <>
            <div className="name">
                <h1 id="name-devon">{name}</h1>
                <h2>{role}</h2>
            </div>

            <div className="this Profile">
                <p>
                    {summary}
                </p>
            </div>
        </>
    )
}

export default Profile
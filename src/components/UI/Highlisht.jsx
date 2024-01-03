import React from 'react'

export default function Highlight({ icon, title, para }) {
    return (
        <div className="highlight">
            <div className="highlight__img">
                {icon}
            </div>
            <h3 className='highligh__subtitle'>
                {title}
            </h3>
            <p className="highlight__para">
                {para}
            </p>
        </div>
    )
}

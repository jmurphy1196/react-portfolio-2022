import React from 'react'

export default function Icon({ icon, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="ico-circle">
                <i className={icon}></i>
            </span>
        </a>
    )
}

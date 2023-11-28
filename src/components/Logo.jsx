import React from 'react'

function Logo({ width = '100px', className = '' }) {
    return (
        <div className={`text-black ${className}`} style={{ width: width }}>Logo</div>
    )
}

export default Logo 
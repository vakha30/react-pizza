import React from 'react'

function Image({id, url, onClick}) {
    return (
        <div onClick={() => onClick(id)} style={{margin: 20}}>
            <img src={url} alt=""/>
        </div>
    )
}

export default Image

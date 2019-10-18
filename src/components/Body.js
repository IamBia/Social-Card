import React from 'react';


const Body = (props) => {

    const p = {
        fontSize: '14px'
    }

    const body = {
        padding: '10px'
    }

    const link = {
        textDecoration: 'none',
        color: '#aaa',
        fontSize: '14px'
    }

    return (
        <div className="card__body" style={body}>
            <h2>{props.nationality}</h2>
            <p style={p}>This is a paragraph</p>
            <p style={p}> Author: Bia </p>
            <a href="https://instagram.com/bia.dev" style={link}>bia.dev</a>
        </div>
    )
}

export default Body;
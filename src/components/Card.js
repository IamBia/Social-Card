import React from 'react';


const Card = (props) => {
    
    const card = {
        width: '20%',
        border: '1px solid #eee',
        borderRadius: '10px'
    }
    const header = {
        backgroundColor: '#e74c3c',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    }
    
    const h1 = {
        color: 'white',
        textAlign: 'center',
        
    }
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
    
    return(
        <div className="card" style={card}>
            <div className="card__header" style={header}>
                <h1 style={h1}>{props.quote}</h1>
            </div>
            <div className="card__body" style={body}>
                <h2>{props.nationality}</h2>
                <p style={p}>{props.profession}</p>
                <p style={p}> {props.author} </p>
                <a href="https://instagram.com/bia.dev" style={link}>bia.dev</a>
            </div>
        </div>
        )
    }
    
    export default Card;
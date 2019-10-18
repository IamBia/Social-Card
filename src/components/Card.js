import React from 'react';


const Card = (props) => {
    
    const card = {
        border: '1px solid #eee',
        borderRadius: '10px',
        margin: '10px 20px'
    }
    const header = {
        backgroundColor: '#0984e3',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        padding: '15px'
    }
    
    const h1 = {
        color: 'white',
        textAlign: 'center',
        fontSize: '18px'
        
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
                <a href="https://instagram.com/bia.dev" target='_blank' style={link}>bia.dev</a>
            </div>
            <div className="card__footer d-flex justify-content-end p-2">
                <i class="far fa-heart"></i>
            </div>
        </div>
        )
    }
    
    export default Card;
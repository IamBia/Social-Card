import React from 'react';
import Data from '../components/Data';

const Header = (props) => {

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

    return(
        <div className="card__header" style={header}>
            <h1 style={h1}>{props.data.quote}</h1>
        </div>
    )

}

export default Header;
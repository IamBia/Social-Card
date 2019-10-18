import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';


const Card = () => {

    const card = {
        width: '20%',
        border: '1px solid #eee',
        borderRadius: '10px'
    }



    return(
  
<div className="card" style={card}>
            <Header></Header>
            <Body></Body>
        </div>
        
       
    )

}

export default Card;
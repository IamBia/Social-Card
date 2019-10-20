import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  let Data = [
    {
        id: 1,
        quote: 'Goals transform a random walk into a chase.',
        nationality: 'Hungarian',
        profession: 'Psychologist',
        author: 'Mihaly Csikszentmihalyi'
    },
    {
        id: 2,
        quote: 'Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.',
        nationality: 'Indian',
        profession: 'Actor',
        author: 'Sushant Singh Rajput'
    },
    {
        id: 3,
        quote: 'Natural selection is anything but random.',
        nationality: 'English',
        profession: 'Scientist',
        author: 'Richard Dawkins'
    },    {
        id: 4,
        quote: 'I take random inspiration from everywhere.',
        nationality: 'British',
        profession: 'Designer',
        author: 'Edward Enninful'
    },    {
        id: 5,
        quote: 'There are no secrets to success. It is the result of preparation, hard work, and learning from failure.',
        nationality: 'American',
        profession: 'Statesman',
        author: 'Colin Powell'
    },    {
        id: 6,
        quote: 'With hard work and dedication, anything is possible.',
        nationality: 'American',
        profession: 'Athlete',
        author: 'Timothy Weah'
    }
]
  return (
    <div className="App">
    <div className="container mb-5">
    <div className="row d-flex justify-content-center py-5">
    <h1>Quotes</h1>
    </div>
    <div className="row">

           {Data.map((info) => 
           <div className="col-4 my-2" key={info.id}>
            <Card 
              quote={info.quote} 
              nationality={info.nationality} 
              profession={info.profession}
              author={info.author}
              key={info.id}/>
              </div>
            )}

   </div>
   </div>
   </div>
   
  )
}

export default App;

import { useState } from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'
// console.log(dataSet);
// import reactLogo from './assets/react.svg'

// const hours = new Date().getHours()
// let timeOfDay

// if (hours < 12){
//   timeOfDay = "morning"
// } else if (hours >=12 && hours < 17){
//   timeOfDay = "afternoon"
// } else if (hours < 21){
//   timeOfDay = "evening"
// } else {
//   timeOfDay = "night"
// }

function App() {
  const [count, setCount] = useState(0)

  const entryElements = data.map((entry)=>{
    return (
      <Entry
        key={entry.id}
        entry={entry}
        // {...entry}
        // In Entry.jsx - will need to change to:
        // <div className="info-container">
        //     <img 
        //         className="marker"
        //         src={markerImage} 
        //         alt="map marker icon"
        //     />
        //     <span className="country">{props.country}</span>
        //     <a href={props.googleMapsLink}> View on Google Maps</a>
        //     <h2 className="entry-title">{props.title}</h2>
        //     <p className="trip-dates">{props.date}</p>
        //     <p className="entry-text">{props.text}</p>
        // </div>
      />
    )
  })
  
  return (
    <>
      <Header />
      {entryElements}
    </>
  )
}

export default App

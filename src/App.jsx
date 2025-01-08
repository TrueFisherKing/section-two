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
        // {...entry}
        entry={entry}
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

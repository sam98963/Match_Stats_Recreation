import { useState } from "react"
import PropTypes from "prop-types"
export default function General({panelData}){
  const [selectedTime, setSelectedTime] = useState("value")
  const awayStats = panelData.match.liveData.lineups.away.stats
  const homeStats = panelData.match.liveData.lineups.home.stats


  const awayObject = {}
  const homeObject = {}

  awayStats.forEach(item => {
    const { type, ...rest } = item; // Extract the type and other properties
    awayObject[type] = rest; // Assign the type as the key in the object
  });
  homeStats.forEach(item => {
    const { type, ...rest } = item; // Extract the type and other properties
    homeObject[type] = rest; // Assign the type as the key in the object
  });




  const selectedAwayTimeValues = {};
  for (const type in awayObject) {
    if (Object.hasOwnProperty.call(awayObject, type)) {
      selectedAwayTimeValues[type] = awayObject[type][selectedTime];
    }
  }
  const selectedHomeTimeValues = {};
  for (const type in homeObject) {
    if (Object.hasOwnProperty.call(homeObject, type)) {
      selectedHomeTimeValues[type] = homeObject[type][selectedTime];
    }
  }

  function handleSelectedTime(value){
    setSelectedTime(value)
    console.log(selectedTime)
  }

  console.log("LOOK HERE", selectedAwayTimeValues, selectedHomeTimeValues)
  return(
    <>
      <h1>General</h1>
      <div className="d-flex flex-row justify-content-around" style={{width:"100vw", height:"30vh"}}>
        <div onClick={()=>handleSelectedTime("value")}>Full Time</div>
        <div onClick={()=>handleSelectedTime("fh")}>First Half</div>
        <div onClick={()=>handleSelectedTime("sh")}>Second Half</div>
      </div>
    </>
  )
}


General.propTypes = {
  panelData: PropTypes.object.isRequired,
};
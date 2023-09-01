import { useState } from "react"
import PropTypes from "prop-types"
import GeneralAway from "./GeneralHomeAway/GeneralAway"
import GeneralHome from "./GeneralHomeAway/GeneralHome"
export default function General({panelData}){
  const [selectedTime, setSelectedTime] = useState("value")
  const awayStats = panelData.match.liveData.lineups.away.stats
  const homeStats = panelData.match.liveData.lineups.home.stats


  const awayObject = {}
  const homeObject = {}

  awayStats.forEach(item => {
    const { type, ...rest } = item;
    awayObject[type] = rest;
  });
  homeStats.forEach(item => {
    const { type, ...rest } = item; 
    homeObject[type] = rest;
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
  }

  return(
    <>
      <h1>General</h1>
      <div className="d-flex flex-row justify-content-around" style={{width:"100vw", height:"30vh"}}>
        <div onClick={()=>handleSelectedTime("value")}>Full Time</div>
        <div onClick={()=>handleSelectedTime("fh")}>First Half</div>
        <div onClick={()=>handleSelectedTime("sh")}>Second Half</div>
      </div>
      <div>
      <GeneralHome data={selectedHomeTimeValues}/>
      <GeneralAway data={selectedHomeTimeValues}/>
    </div>
    </>
  )
}


General.propTypes = {
  panelData: PropTypes.object.isRequired,
};
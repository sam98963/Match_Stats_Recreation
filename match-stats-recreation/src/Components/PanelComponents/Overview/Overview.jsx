import PropTypes from "prop-types"
import validateHomeAway from "../../../Hooks/validateHomeAway"
import OverviewRender from "./OverviewRender"
export default function Overview({panelData}){

  console.log("this is panel", panelData)

  const goals = panelData.match.liveData.goal
  const cards = panelData.match.liveData.card

  let overviewData = [{
    cards: [],
    goals: []
  }, {
    cards: [],
    goals: []
  }]

  if(panelData){
  goals.map(item=>{
    if(validateHomeAway(item.contestantId, panelData) === "home"){
      overviewData[0].goals.push(item)
    } else{overviewData[1].goals.push(item)}})
  cards.map(item=>{
    if(validateHomeAway(item.contestantId, panelData) === "home"){
      overviewData[0].cards.push(item)
    } else{overviewData[1].cards.push(item)}
  })}


  overviewData && console.log(overviewData);

 validateHomeAway(panelData.match.liveData.goal[0].contestantId ,panelData)

  return(
    <>
      {overviewData.map((item, index)=><OverviewRender key={index} data={item}/>)}
      <h1>Overview</h1>
    </>
  )
}

Overview.propTypes = {
  panelData: PropTypes.object.isRequired
}

import PropTypes from "prop-types"
import validateHomeAway from "../../../Hooks/validateHomeAway"

export default function Overview({panelData}){




  // const homeId = 
  // const awayId = 
  // const goals = panelData.match.liveData.goal
  // const cards = panelData.match.liveData.card

  

 validateHomeAway(panelData.match.liveData.goal[0].contestantId ,panelData)

  return(
    <>
      <h1>Overview</h1>
    </>
  )
}

Overview.propTypes = {
  panelData: PropTypes.object.isRequired
}

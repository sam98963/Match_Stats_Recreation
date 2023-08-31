import PropTypes from "prop-types"
import SelectionOption from "./SelectionOption"
export default function DetailSelectionPanel({homeAbb, awayAbb}){
  let option = ["Overview", "General", homeAbb, awayAbb, "Player"]



  return(<div className="d-flex flex-row" style={{width:"100vw", height:"30vh"}}>
   {homeAbb && awayAbb && option.map((item, index)=><SelectionOption key={index} option={item}/>)}
  </div>)
}


DetailSelectionPanel.propTypes = {
  homeAbb: PropTypes.string.isRequired, awayAbb: PropTypes.string.isRequired
};
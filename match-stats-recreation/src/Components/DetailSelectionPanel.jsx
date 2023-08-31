import PropTypes from "prop-types"
import SelectionOption from "./SelectionOption"
export default function DetailSelectionPanel({homeAbb, awayAbb, setPanelSelected}){
  let option = ["Overview", "General", homeAbb, awayAbb, "Player"]



  return(<div className="d-flex flex-row" style={{width:"100vw", height:"30vh"}}>
   {homeAbb && awayAbb && option.map((item, index)=><SelectionOption key={index} option={item} setPanelSelected={setPanelSelected}/>)}
  </div>)
}


DetailSelectionPanel.propTypes = {
  homeAbb: PropTypes.string.isRequired, awayAbb: PropTypes.string.isRequired, setPanelSelected: PropTypes.func.isRequired
};
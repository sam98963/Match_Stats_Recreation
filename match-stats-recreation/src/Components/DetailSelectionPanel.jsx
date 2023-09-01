import PropTypes from "prop-types"
import SelectionOption from "./SelectionOption"
import Overview from "./PanelComponents/Overview/Overview"
import General from "./PanelComponents/General"
import Home from "./PanelComponents/Home"
import Away from "./PanelComponents/Away"
import Player from "./PanelComponents/Player"
export default function DetailSelectionPanel({homeAbb, awayAbb, handlePanelSelection, panelSelected, panelData}){
  let option = ["Overview", "General", homeAbb, awayAbb, "Player"]

  const panelComponents = {
    Overview,
    General,
    [homeAbb]: Home,
    [awayAbb]: Away,
    Player
  }


  let SelectedComponent = panelComponents[panelSelected]
  return(
  <div>
    <div className="d-flex flex-row" style={{width:"100vw", height:"30vh"}}>
    {homeAbb && awayAbb && option.map((item, index)=><SelectionOption key={index} option={item} handlePanelSelection={handlePanelSelection}/>)}
    </div>
    <div>
      <SelectedComponent panelData = {panelData}/>
    </div>
  </div>)
}


DetailSelectionPanel.propTypes = {
  homeAbb: PropTypes.string.isRequired, awayAbb: PropTypes.string.isRequired, handlePanelSelection: PropTypes.func.isRequired, panelSelected: PropTypes.string.isRequired, panelData: PropTypes.object.isRequired
};
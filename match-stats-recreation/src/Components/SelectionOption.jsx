import PropTypes from "prop-types"
export default function SelectionOption({option, handlePanelSelection}){

  return(<div className="text-center" style={{width:"20%"}} onClick={()=>handlePanelSelection(option)}>
    <p>{option}</p>
  </div>)
}

SelectionOption.propTypes = {
  option: PropTypes.string.isRequired, handlePanelSelection: PropTypes.func.isRequired
};
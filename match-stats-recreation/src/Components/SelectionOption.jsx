import PropTypes from "prop-types"
export default function SelectionOption({option, setPanelSelected}){

function handleSelectionClick(){
  setPanelSelected(option)
}

  return(<div className="text-center" style={{width:"20%"}} onClick={handleSelectionClick}>
    <p>{option}</p>
  </div>)
}

SelectionOption.propTypes = {
  option: PropTypes.string.isRequired, setPanelSelected: PropTypes.func.isRequired
};
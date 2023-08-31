import PropTypes from "prop-types"
export default function SelectionOption({option}){
  return(<div className="text-center" style={{width:"20%"}}>
    <p>{option}</p>
  </div>)
}

SelectionOption.propTypes = {
  option: PropTypes.string.isRequired
};
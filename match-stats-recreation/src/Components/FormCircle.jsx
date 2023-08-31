import PropTypes from "prop-types"
export default function FormCircle({result}){
  let resultColor = ""
  function resultValidator(){
    if(result === "L"){
       resultColor = "red"
    } else if (result === "D"){
      resultColor = "orange"
    } else {
      resultColor = "green"
    }
    return resultColor
  }

  const circleStyle = {
    backgroundColor: resultValidator()
  }

  return(
    <div className='rounded-circle h-25 w-25 mx-2' style={circleStyle}></div>
  )
}

FormCircle.propTypes = {
  result: PropTypes.string.isRequired}
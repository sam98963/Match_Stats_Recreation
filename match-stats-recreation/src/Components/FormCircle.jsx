import PropTypes from "prop-types"
export default function FormCircle({result}){
  let resultColor = ""

  console.log(result)
  function resultValidator(){
    if(result === "L"){
       resultColor = "red"
    } else if (result === "D"){
      resultColor = "yellow"
    } else {
      resultColor = "green"
    }
    return resultColor
  }


  return(
    <div className='rounded circle h-25' style={{backgroundColor: {resultValidator}}}></div>
  )
}

FormCircle.propTypes = {
  result: PropTypes.string.isRequired}
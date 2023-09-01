import PropTypes from "prop-types"
export default function GeneralHome({data}){
  console.log(data.possessionPercentage)
  return(<>
    <div className="progress-bar" role="progressbar" aria-valuenow={parseFloat(data.possessionPercentage)} aria-valuemin={0} aria-valuemax={100}></div>
  </>)
}

GeneralHome.propTypes = {
  data: PropTypes.object.isRequired,
};
import PropTypes from "prop-types"
import FormCircle from '../'
export default function Header({homeTeam, awayTeam, leagueName, finalScore, homeForm, awayForm}){
  console.log(homeTeam, awayTeam, leagueName, finalScore, homeForm, awayForm);
  return(<>
      <div className="d-flex flex-row justify-content-around">
        <div>
          <h4>{homeTeam}</h4>
          {homeForm.map(item=>{
            if(item === "L"){
              return <>
            }
          })}
        </div>
        <div>
          <h4>{awayTeam}</h4>
        </div>
      </div>
  </>)
}

Header.propTypes = {
  homeTeam: PropTypes.string.isRequired, awayTeam: PropTypes.string.isRequired,
  leagueName: PropTypes.string.isRequired, finalScore: PropTypes.object.isRequired,
  homeForm: PropTypes.array.isRequired, awayForm: PropTypes.array.isRequired
};

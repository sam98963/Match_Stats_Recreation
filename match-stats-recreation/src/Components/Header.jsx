import PropTypes from "prop-types"
import FormCircle from './FormCircle'
export default function Header({homeTeam, awayTeam, leagueName, finalScore, homeForm, awayForm }){
  return(
  <div style={{height:"30vh", width:"100vw"}}>
    <div className="text-center">
    <p><u>{leagueName}</u></p>
    <p>Full Time</p>
    </div>
      <div className="d-flex flex-row justify-content-around">
        <div>
          <h4>{homeTeam}</h4>
          {homeForm && homeForm.map((item, index) => <FormCircle key={index} result={item}/>
          )}
          <p>{finalScore.home}</p>
        </div>
        <div>
          <h4>{awayTeam}</h4>
            {awayForm && awayForm.map((item, index) => <FormCircle key={index} result={item}/>
            )}
          <p>{finalScore.away}</p>
        </div>
      </div>
  </div>)
}

Header.propTypes = {
  homeTeam: PropTypes.string.isRequired, awayTeam: PropTypes.string.isRequired,
  leagueName: PropTypes.string.isRequired, finalScore: PropTypes.object.isRequired,
  homeForm: PropTypes.array.isRequired, awayForm: PropTypes.array.isRequired
};

import PropTypes from "prop-types"
export default function Header({homeTeam, awayTeam, leagueName, finalScore}){
  console.log(homeTeam, awayTeam, leagueName, finalScore);
  return(<>

  </>)
}

Header.propTypes = {
  homeTeam: PropTypes.string.isRequired, awayTeam: PropTypes.string.isRequired,
  leagueName: PropTypes.string.isRequired, finalScore: PropTypes.string.isRequired
};

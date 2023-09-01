import PropTypes from "prop-types"

export default function OverviewRender({data}){

  const yellowCards = data.cards.filter((item) => item.type === "YC");
  const redCards = data.cards.filter((item) => item.type === "Y2C" || item.type === "RC");

    console.log("This is goals", data.cards)
  return(
  <>
    <div>
      {data? data.goals.map((item, index)=>(
        item.scorerName? 
        <div key = {index}>
        <p>({item.timeMin}&rsquo;) {item.scorerName}</p>
        </div> : <p key = {index}>Anon</p>
      )): null}
    </div>
    <div>
      {yellowCards? yellowCards.map((item, index)=>(
        item.playerName? 
        <div key = {index}>
        <p>({item.timeMin}&rsquo;) {item.playerName} {item.type}</p>
        </div> : <p key = {index}>({item.timeMin}&rsquo;) Anon {item.type}</p>
      )): null}
    </div>
    <div>
      {redCards? redCards.map((item, index)=>(
        item.playerName? 
        <div key = {index}>
        <p>({item.timeMin}&rsquo;) {item.playerName} {item.type}</p>
        </div> : <p key = {index}>({item.timeMin}&rsquo;) Anon {item.type}</p>
      )): null}
    </div>
  </>
  )
}

OverviewRender.propTypes = {
  data: PropTypes.object.isRequired
}
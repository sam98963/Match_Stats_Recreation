import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useState, useEffect} from "react"
import Header from './Components/Header'
import DetailSelectionPanel from './Components/DetailSelectionPanel'
function App() {
  const [data, setData] = useState(null)
  const [panelSelected, setPanelSelected] = useState("Overview")
  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData(){
    try {const response = await fetch("https://frontend-tech-test-ashy.vercel.app/api/match")
    const jsonData = await response.json()
    setData(jsonData)} 
    catch(error){
      console.error("Error fetching data from API", error)
    }
  }

  console.log(data)

  return (
    <>
      {/* {data && <p className = "text-center">{data.match.description}</p>} */}
      {data &&<Header homeTeam = {data.match.contestant[0].shortName} awayTeam = {data.match.contestant[1].shortName} leagueName = {data.match.meta.competition.name} finalScore = {data.match.liveData.matchDetails.scores.total} homeForm = {data.match.form.home} awayForm = {data.match.form.away}/>}
      {data && <DetailSelectionPanel homeAbb = {data.match.contestant[0].code} awayAbb = {data.match.contestant[1].code} setPanelSelected={setPanelSelected}/>}
    </>
  )
}

export default App

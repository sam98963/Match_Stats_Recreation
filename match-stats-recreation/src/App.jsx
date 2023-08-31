import './App.css'
import {useState, useEffect} from "react"
import Header from './Components/Header'
function App() {
  const [data, setData] = useState(null)

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
      {data && <p>{data.match.description}</p>}
      {data &&<Header homeTeam = {data.match.contestant[0].shortName} awayTeam = {data.match.contestant[1].shortName} leagueName = {data.match.meta.competition.name} finalScore = {data.match.liveData.matchDetails.scores.total}/>}
    </>
  )
}

export default App

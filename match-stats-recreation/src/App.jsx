import './App.css'
import {useState, useEffect} from "react"
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
       <p>{data.match.description}</p>
    </>
  )
}

export default App

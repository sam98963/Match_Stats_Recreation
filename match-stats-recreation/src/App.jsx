import './App.css'
import {useState, useEffect} from "react"
function App() {
  const [data, setData] = useState(null)

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData(){
    const response = await fetch("https://frontend-tech-test-ashy.vercel.app/api/match")
    const jsonData = await response.json()
    setData(jsonData)
  }

  console.log(data)

  return (
    <>
       
    </>
  )
}

export default App

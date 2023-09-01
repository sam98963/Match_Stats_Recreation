import { useState, useEffect } from "react";

export default function useValueById(id, data){
  const [matchedValue,setMatchedValue] = useState(null)

  useEffect(()=>{
    const matchedfirstEleven = data.match.liveData.find(item=> item.id === contestantId)
    const matchedSub = data.match.liveData.find(item=> item.id === contestantId)
    if(matchedObject) {
      setMatchedValue(matchedObject.position)
    } else {
      setMatchedValue(null)
    }
  }, [contestantId, data]);

  return matchedValue
}
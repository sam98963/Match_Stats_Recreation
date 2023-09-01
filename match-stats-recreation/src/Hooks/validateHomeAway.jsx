import { useState, useEffect } from "react";

export default function useValueById(contestantId, data){
  const [matchedValue,setMatchedValue] = useState(null)

  useEffect(()=>{
    const matchedObject = data.match.contestant.find(item=> item.id === contestantId)

    if(matchedObject) {
      setMatchedValue(matchedObject.position)
    } else {
      setMatchedValue(null)
    }
  }, [contestantId, data]);

  console.log(matchedValue)

  return matchedValue
}
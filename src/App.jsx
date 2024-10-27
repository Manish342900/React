import React, { useState } from 'react'

export default function App() {
    const [n_ame,setName]=useState("")
    const [friends,setFriends]=useState([])
    const [id,setId]=useState(0)
    const [gift,setGift]=useState(["firecracker","mithai","russian"])

    const set=(e)=>{
        setName(e.target.value)
    }
    const setfriend=()=>{
        setFriends([...friends,{id,name:n_ame,gift:"no Gift"}])
        setId(prev=> prev+1)
        setName("")
    }

    const assign=()=>{
      const newe =  friends.map((elem)=>({
        ...elem,
        gift:gift[Math.floor(Math.random()*gift.length)]
      }))
      setFriends(newe)
    }

 const shuffleGifts = () => {
    const shuffledGifts = [...gift];
    for (let i = shuffledGifts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [shuffledGifts[i], shuffledGifts[j]] = [shuffledGifts[j], shuffledGifts[i]];
    }
    setGift(shuffledGifts);
    assign()
};

const reset=()=>{
    
    setFriends([])
    setId(0)
    
}
const reee=(id)=>{
    const newr=friends.filter((elem)=>elem.id!==id)
    setFriends(newr)
}

  return (
    <>
      <form>
        <input type="text"  placeholder='Type Name' value={n_ame} onChange={set}/>
        <button type='button' onClick={setfriend}>Set</button>
      </form>
      <div>
      {friends.map((elem)=>(
            <div key={elem.id}>
            <li>{elem.name}-{elem.gift}</li>
            <button onClick={()=>reee(elem.id)}>Remove</button>
            </div>
        )
      )}
      </div>
      
      <div>
        <button onClick={assign}>Assign</button>
        <button onClick={shuffleGifts}>Shuffle</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

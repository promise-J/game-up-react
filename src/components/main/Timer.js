import React, { useEffect, useState } from 'react'

function Timer({setTimeOver, setInter, questionNum}) {
    
    const [timer, setTimer] = useState(30)

    useEffect(()=>{
      if(timer===0) return setTimeOver(true)
      const time = setInterval(()=>{
          setTimer((prev)=> prev - 1)
      }, 1000)
      setInter(time)
      return ()=> clearInterval(time)
    },[setTimeOver, setInter, timer])

    useEffect(()=>{
      setTimer(30)
    },[questionNum])


    return (
      timer
    )
}

export default Timer

import React, { useEffect } from 'react'
import './main.css'
import QuestionComp from './QuestionComp'
import Timer from './Timer'



function Main({timeOver, inter, setInter, username, setQuestionNum, earned, setTimeOver, questionNum}) {
    const replay = ()=>{
        window.location.href = '/'
    }
    return (
        <div className='main'>
            {
                timeOver ? <div className='endText'> <p>{username} You Earned: {earned}</p>
                  <button style={{padding: '7px 15px', fontSize: '20px'}} onClick={replay}>Replay</button>
                </div> : (
           <> <div className="top">
               <div className="timer"><Timer setInter={setInter} setTimeOver={setTimeOver} questionNum={questionNum} /></div>
            </div>
            <div className="bottom">
                <QuestionComp inter={inter} timeOver={timeOver} setTimeOver={setTimeOver} questionNum={questionNum} setQuestionNum={setQuestionNum} />
            </div>
        </>)
    }
    </div>
    )
}

export default Main

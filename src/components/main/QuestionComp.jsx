import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'
import play from '../../asset/play.mpeg'
import correct from '../../asset/correct.mpeg'
import wrong from '../../asset/wrong.mpeg'

import questions from '../../questions'

function QuestionComp({timeOver, inter, setTimeOver, setQuestionNum, questionNum}) {
    const [startPlay] = useSound(play)
    const [correctPlay, {stop}] = useSound(correct)
    const [wrongPlay] = useSound(wrong)
    
        const [question, setQuestion] = useState(null)
        const [selected, setSelected] = useState(null)
        const [classname, setClassname] = useState('answer')


    useEffect(()=>{
       startPlay()
    }, [startPlay])

    useEffect(()=>{
      setQuestion(questions[questionNum - 1])
    },[questionNum, question])

    useEffect(()=>{
        if(questionNum >= questions.length){
            setTimeOver(true)
        } 
    },[questionNum, setTimeOver])

    const delay = (duration, callback)=>{
        setTimeout(()=>{
            callback()
        },duration)
    }
    
    const handleSelect = (e)=>{
        stop()
        clearInterval(inter)
        setSelected(e)
        setClassname('answer active')
        delay(3000, ()=>setClassname(e.correct ? 'answer right' : 'answer wrong'))
        delay(5000, ()=> {
            if(e.correct){
                correctPlay()
                delay(3000, ()=>{
                    setQuestionNum(prev=> prev+1)
                    setSelected(null)
                })
            }else{
                wrongPlay()
                delay(2000, ()=>{
                    setTimeOver(true)
                })
            }
        })
    }

    return (
        <div className="question-section">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {
                  question?.answers.map(a=>(
                      <div className={selected === a ? classname : 'answer'} onClick={()=> handleSelect(a)} >{a.text}</div>
                  ))
                }
            </div>
        </div>
    )
}

export default QuestionComp

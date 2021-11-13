import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import Start from './components/Start'



function App() {
  

  const data = useMemo(()=>
 [
    {
      id: 1,
      price: 100
    },
    {
      id: 2,
      price: 200
    },
    {
      id: 3,
      price: 400
    },
    {
      id: 4,
      price: 800
    },
    {
      id: 5,
      price: 800
    },
    {
      id: 6,
      price: 1000
    },
    {
      id: 7,
      price: 1500
    },
    {
      id: 8,
      price: 2000
    },
    {
      id: 9,
      price: 2500
    },
    {
      id: 10,
      price: 3000
    },
    {
      id: 11,
      price: 3700
    },
    {
      id: 12,
      price: 4000
    },
    {
      id: 13,
      price: 4200
    },
    {
      id: 14,
      price: 4500
    },
    {
      id: 15,
      price: 5000
    }
  ].reverse(),[])



  const [questionNum, setQuestionNum] = useState(1)
  const [timeOver, setTimeOver] = useState(false)
  const [earned, setEarned] = useState('$ 0')
  const [inter, setInter] = useState(null)
  const [username, setUsername] = useState(null)

  useEffect(()=>{
    questionNum > 1 && setEarned(data.find(e=> e.id===questionNum).price)
  },[questionNum, data])

  

  return (
    <div className="App">
      {
        username ? (
          <>
            <Main username={username} questionNum={questionNum} earned={earned} setInter={setInter} inter={inter} setTimeOver={setTimeOver} timeOver={timeOver} setQuestionNum={setQuestionNum} />
            <Sidebar data={data} questionNum={questionNum} />
          </>
        ) : <Start setUsername={setUsername} />
      }
    </div>
  );
}

export default App;

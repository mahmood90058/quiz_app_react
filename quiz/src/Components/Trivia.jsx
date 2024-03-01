import React, { useEffect, useState } from 'react'
import "./trivia.css"

import useSound from "use-sound"
import play from "../assets/play.wav"
import wrong from "../assets/wrong.wav"
import wait from "../assets/wait.wav"
import correct from "../assets/correct.wav"

const Trivia = ({data,setStop, quesNum, setQuesNum}) => {
  const[quesTion, setQuesTion]= useState(null);
  const[selectAns, setSelectAns]= useState(null)
  const[className, setClassName]= useState("answer")
  
// ****************************************************


  const[letsPlay]= useSound(play);
  const[correctAns]= useSound(correct);
  const[wrongAns]= useSound(wrong)



  useEffect(()=>{
    letsPlay();

  },[letsPlay])



  // yaha pe sara data aa rah hai
  useEffect(()=>{
    setQuesTion(data[quesNum-1])
  },[data,quesNum])


  const delay=(duration,calllback)=>{
    setTimeout(()=>{
      calllback();

    },duration)

    

  }


  const handleClick=(a)=>{

    setSelectAns(a);
    setClassName("answer active")

    delay(3000, ()=>setClassName(a.correct ? "answer correct": "answer wrong"))
    delay(5000, ()=>{
      if(a.correct){

        //sound 
        correctAns();

        delay(1000,()=>{

          setQuesNum((prev)=> prev+1);
          // aage next ques aane ke baad selcted ans null ho jayega
          setSelectAns(null)
        })

      }else{
        delay(1000, ()=>{
          wrongAns();

          setStop(true)

        })
      }
    })


    // insted of this  we can use callback function method in the delay function

    //   setTimeout(()=>{
  //     setClassName(a.correct ? "answer correct": "answer wrong");
  // },3000)




  }


  return (
    <div className='trivia'>
        {/* <div className="ques">Whats the best youtube channel</div> */}
        <div className="ques">{quesTion?.question}</div>
        <div className="ans">
            {/* <div className="answer correct">Lama dev</div>
            <div className="answer">Lama dev</div>
            <div className="answer">Lama dev</div>
            <div className="answer">Lama dev</div> */}
            {quesTion?.answers.map((a,item)=>(
              <div key={item.id} className={selectAns===a ? className : "answer"} onClick={()=>handleClick(a)}>{a.text}</div>
            ))}
        </div>
      
    </div>
  )
}

export default Trivia



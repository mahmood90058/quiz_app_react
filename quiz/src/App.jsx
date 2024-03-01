import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Trivia from "./Components/Trivia";
import Timer from "./Components/Timer";
import Start from "./Components/Start";

const App = () => {

  const[username, setuserName]= useState(null)


  const[quesNum, setQuesNum]= useState(1);
  const[stop, setStop]= useState(false)
  // earned money
  const[earned, setEarned]= useState("$ 0")






  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];



  const moneyPyramd= useMemo(()=>
    
  [
    
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    
  ].reverse(),
  );



  // for gettting earning
  useEffect(()=>{

    // jaise hamari id 2 hogi toh  uske previus wala amount le rahe hai
    // ques num ki initial state 1 se zyada honi chaiye tabhi chalega and ope ke baad 

    quesNum>1 && 

    setEarned(moneyPyramd.find(m=>m.id===quesNum-1).amount)

  }, [moneyPyramd,quesNum ])




  return (
    
    <div className="app">
      {username ? (
        <>
        <div className="main">
        {stop?<h1 className="earnedText">you earned:{earned}</h1> :(


       <>


        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} quesNum={quesNum}/>
          </div>

        </div>
        <div className="bottom">
          <Trivia data={data} setStop={setStop} setQuesNum={setQuesNum}
          quesNum={quesNum}
          />
        </div>
        </>
        )}
      </div>


      

        
      <div className="pyramid">
        <ul className="moneyList">
          {
            moneyPyramd.map((m)=>(

          <li className={quesNum=== m.id ? "listItem active" :"listItem" }>
            <span className="moneyItem">{m.id}</span>
            <span className="moneyamount">{m.amount}</span>
          </li>
            ))
          }
          {/* <li className="listItem ">
            <span className="moneyItem">5</span>
            <span className="moneyamount">$500</span>
          </li>
          <li className="listItem">
            <span className="moneyItem">6</span>
            <span className="moneyamount">$600</span>
          </li>
          <li className="listItem">
            <span className="moneyItem">7</span>
            <span className="moneyamount">$700</span>
          </li> */}
        </ul>
      </div>
        
        
        </>

      )
        
        : <Start setUsername={setuserName}/>}

      

    </div>
    
    );
};

export default App;




import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <h1>Quiz Proggraming</h1>
        <p>What proggraming for build cross-platform app?</p>
        <button onClick={()=>props.onQuiz('react') }>React</button>
        <button onClick={()=>props.onQuiz('phyton') }>Phyton</button>
        <button onClick={()=>props.onQuiz('golang') }>Golang</button>
        <h2>{props.Answers}</h2>
    </div>
  )
}

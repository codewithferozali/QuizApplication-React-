// import Question from './Question'
// import React, { useState } from 'react'


// export  function Java() {

//   const javaQuestion=[
//     {
//     qnum : '1',
//     ques : 'Memory occupied by int variable is ?',
//     opA :'2 bytes',
//      opB :'3 bytes',
//       opC :'4 bytes',
//        opD :'8 bytes',
//        ans :'C'
// },
// {
//   qnum : '2',
//   ques : 'Memory occupied by char variable is ?',
//   opA :'2 bytes',
//    opB :'3 bytes',
//     opC :'4 bytes',
//      opD:'8 bytes',
//      ans:'A'
//   },

//   {
//     qnum : '3',
//     ques : 'Memory occupied by byte variable is ?',
//     opA :'2 bytes',
//      opB :'3 bytes',
//       opC :'1 bytes',
//        opD:'8 bytes',
//        ans:'C'
//     },
//     {
//       qnum : '4',
//       ques : 'Memory occupied by short varible is ?',
//       opA :'2 bytes',
//        opB :'3 bytes',
//         opC :'4 bytes',
//          opD:'8 bytes',
//          ans:'A'
//       },

//       {
//         qnum : '5',
//         ques : 'Memory occupied by double varible is ?',
//         opA :'2 bytes',
//          opB :'3 bytes',
//           opC :'4 bytes',
//            opD:'8 bytes',
//            ans:'C'
//         }
// ]
// const [answer,setAnswer]=useState({})

// const handleSubmit=(event)=>{


// }

// const handleOnChange=(questionNum,selectedOption){


// }


//   return (
//     <div>
// <h1>java Assessment</h1>
// <form  onSubmit={handleSubmit}>
//   {
// javaQuestion.map(

// (question)=>(

//   <Question 

//   qnum = {question.qnum}
//     ques ={question.ques}
//     opA ={question.opA}
//      opB ={question.opB}
//       opC ={question.opC}
//        opD ={question.opD}
//        ans ={question.ans}
//        onchange={handleOnChange}
//        />

// )
// )
// }
//     <br></br><br></br>
//     <button type='submit'>Get Result</button>

//     </form>

//     </div>
//   )
// }



// // for Sql
// export  function Sql() {


//   const SqlQuestion=[
//     {
//       qnum:'1',
//       ques:'Sql stands for',
//       opA:'Structured Query language',
//        opB:'Structured Qua language',
//         opC:'Star Query language',
//          opD:' Query language',
//          ans:'A'
// },
// {
//   qnum:'2',
//   ques: 'which command is used to create table in Sql',
//   opA:'cre',
//    opB:'build table',
//     opC:'Create',
//      opD:'select',
//      ans:'C'
//   },

//   {
//     qnum:'3',
//   ques: 'which command is used to display table in Sql',
//   opA:'cre',
//    opB:'display ',
//     opC:'Create',
//      opD:'select',
//      ans:'D'
//     },
//     {
//       qnum:'4',
//   ques: 'which command is used to delete table in Sql',
//   opA:'cre',
//    opB:'drop',
//     opC:'Create',
//      opD:'select',
//      ans:'B'
//       },

//       {
//         qnum:'5',
//         ques: 'which command is used to alter table in Sql',
//         opA:'alter',
//          opB:'build ',
//           opC:'Create',
//            opD:'select',
//            ans:'A'
//         }
// ]
//   return (
//     <div>
//       <h1>Sql Assesssment</h1>
//       <form>
//         {
// SqlQuestion.map(

//   (question)=>(
  
//     <Question 
  
//     qnum = {question.qnum}
//       ques ={question.ques}
//       opA ={question.opA}
//        opB ={question.opB}
//         opC ={question.opC}
//          opD ={question.opD}
//          ans ={question.ans}
//          />
  
//   )
//   )


//         }


//     <br></br><br></br>
//     <button type='submit'>Get Result</button>
//     </form>
//     </div>
//   )
// }



// // for Html
// export  function Html() {
// const HtmlQuestion=[
//   {
//   qnum: '1',
//   ques: 'Html stands for',
//   opA:'Hyper Text Markup Language',
//    opB:'Hyper Texture Markup Language',
//     opC:'Hyper Total Markup Language',
//      opD:'Hyper Text Mark Language',
//      ans:'A',
// },

// {
//   qnum: '2',
//     ques: 'which tag is used to break the line   in Html',
//     opA:'hr',
//      opB:'br',
//       opC:'a-tag',
//        opD:'select tag',
//        ans:'C'
// },
// {
//   qnum: '3',
//   ques: 'which tag is used to provide the contents in bold letters in Html',
//   opA:'hr',
//    opB:'br',
//     opC:'<b>',
//      opD:'select tag',
//      ans:'C'
// },
// {
//   qnum: '4',
//   ques: 'which tag is used to provide the contents in italic letters in Html',
//   opA:'<i>',
//    opB:'br',
//     opC:'<b>',
//      opD:'select tag',
//      ans:'A'
// },
// {
//   qnum: '5',
//   ques: 'which tag is used to provide the contents in paragraph  in Html',
//   opA:'<pre>',
//    opB:'<p>',
//     opC:'<b>',
//      opD:'select tag',
//      ans:'B'
// },

// ]


//   return (
//     <div>
//       <h1>Html contents</h1>
//       <form>
//         {
// HtmlQuestion.map(

//   (question)=>(
  
//     <Question 
  
//     qnum = {question.qnum}
//       ques ={question.ques}
//       opA ={question.opA}
//        opB ={question.opB}
//         opC ={question.opC}
//          opD ={question.opD}
//          ans ={question.ans}
//          />
  
//   )
//   )



//         }
//     <br></br><br></br>
//     <button type='submit'>Get Result</button>
//     </form>
//     </div>
//   )
// }


import React, { useState } from 'react';
import Question from './Question';

export function Java() {
  const javaQuestions = [
    { qnum: '1', ques: 'Memory occupied by int variable is ?', opA: '2 bytes', opB: '3 bytes', opC: '4 bytes', opD: '8 bytes', ans: 'C' },
    { qnum: '2', ques: 'Memory occupied by char variable is ?', opA: '2 bytes', opB: '3 bytes', opC: '4 bytes', opD: '8 bytes', ans: 'A' },
    { qnum: '3', ques: 'Memory occupied by byte variable is ?', opA: '2 bytes', opB: '3 bytes', opC: '1 byte', opD: '8 bytes', ans: 'C' },
    { qnum: '4', ques: 'Memory occupied by short variable is ?', opA: '2 bytes', opB: '3 bytes', opC: '4 bytes', opD: '8 bytes', ans: 'A' },
    { qnum: '5', ques: 'Memory occupied by double variable is ?', opA: '2 bytes', opB: '3 bytes', opC: '4 bytes', opD: '8 bytes', ans: 'C' },
    { qnum: '6', ques: 'Which of the following is not a Java keyword?', opA: ' class', opB: ' interface', opC: 'implements', opD: 'inherits', ans: 'D' },
    { qnum: '7', ques: 'Which of the following statements is true about constructors in Java?', opA: ' Constructors can be private.', opB: ' Constructors can have a return type.', opC: 'Constructors are not called when an object is created.', opD: ' Constructors can be static.', ans: 'A' },
    { qnum: '8', ques: 'Which of the following is used to handle exceptions in Java?', opA: ' try-catch', opB: ' if-else', opC: 'for loop', opD: 'switch-case', ans: 'A' },
    { qnum: '9', ques: 'Which collection class provides the ability to grow or shrink its size?', opA: '  ArrayList', opB: '  HashMap', opC: 'LinkedList', opD: 'Both A and C', ans: 'D' },
    { qnum: '10', ques: 'What is the purpose of the static keyword in Java?', opA: '  To define a constant value', opB: ' To allocate memory at runtime', opC: 'To indicate that a method or variable belongs to the class rather than instances of the class', opD: 'To create a new thread', ans: 'C' },

  ];

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const handleOnChange = (questionNum, selectedOption) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [questionNum]: selectedOption }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let score = 0;
    const wrong = [];

    javaQuestions.forEach(question => {
      if (answers[question.qnum] === question.ans) {
        score++;
      } else {
        wrong.push(question.qnum);
      }
    });

    setWrongAnswers(wrong);
    setResult(`Your score: ${score}/${javaQuestions.length}`);
  };

  return (
    <div>
      <h1>Java Assessment</h1>
      <form onSubmit={handleSubmit}>
        {javaQuestions.map(question => (
          <Question
            key={question.qnum}
            qnum={question.qnum}
            ques={question.ques}
            opA={question.opA}
            opB={question.opB}
            opC={question.opC}
            opD={question.opD}
            onChange={handleOnChange}
          />
        ))}
        <br />
        <button type='submit'>Get Result</button>
      </form>
      {result && <h2>{result}</h2>}
      {wrongAnswers.length > 0 && (
        <div>
          <h3>Wrong Answers:</h3>
          <ul>
            {wrongAnswers.map(qnum => (
              <li key={qnum}>Question {qnum}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


// import React, { useState } from 'react';
// import Question from './Question';



export function Sql() {
  const sqlQuestions = [
    { qnum: '1', ques: 'SQL stands for', opA: 'Structured Query Language', opB: 'Structured Qua Language', opC: 'Star Query Language', opD: 'Query Language', ans: 'A' },
    { qnum: '2', ques: 'Which command is used to create table in SQL?', opA: 'cre', opB: 'build table', opC: 'CREATE', opD: 'SELECT', ans: 'C' },
    { qnum: '3', ques: 'Which command is used to display table in SQL?', opA: 'cre', opB: 'DISPLAY', opC: 'CREATE', opD: 'SELECT', ans: 'D' },
    { qnum: '4', ques: 'Which command is used to delete table in SQL?', opA: 'cre', opB: 'DROP', opC: 'CREATE', opD: 'SELECT', ans: 'B' },
    { qnum: '5', ques: 'Which command is used to alter table in SQL?', opA: 'ALTER', opB: 'BUILD', opC: 'CREATE', opD: 'SELECT', ans: 'A' },
  ];

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const handleOnChange = (questionNum, selectedOption) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [questionNum]: selectedOption }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let score = 0;
    const wrong = [];

    sqlQuestions.forEach(question => {
      if (answers[question.qnum] === question.ans) {
        score++;
      } else {
        wrong.push(question.qnum);
      }
    });

    setWrongAnswers(wrong);
    setResult(`Your score: ${score}/${sqlQuestions.length}`);
  };

  return (
    <div>
      <h1>SQL Assessment</h1>
      <form onSubmit={handleSubmit}>
        {sqlQuestions.map(question => (
          <Question
            key={question.qnum}
            qnum={question.qnum}
            ques={question.ques}
            opA={question.opA}
            opB={question.opB}
            opC={question.opC}
            opD={question.opD}
            onChange={handleOnChange}
          />
        ))}
        <br />
        <button type='submit'>Get Result</button>
      </form>
      {result && <h2>{result}</h2>}
      {wrongAnswers.length > 0 && (
        <div>
          <h3>Wrong Answers:</h3>
          <ul>
            {wrongAnswers.map(qnum => (
              <li key={qnum}>Question {qnum}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}



// import React, { useState } from 'react';
// import Question from './Question';





export function Html() {
  const htmlQuestions = [
    { qnum: '1', ques: 'HTML stands for', opA: 'Hyper Text Markup Language', opB: 'Hyper Texture Markup Language', opC: 'Hyper Total Markup Language', opD: 'Hyper Text Mark Language', ans: 'A' },
    { qnum: '2', ques: 'Which tag is used to break the line in HTML?', opA: '<hr>', opB: '<br>', opC: 'a-tag', opD: 'select tag', ans: 'B' },
    { qnum: '3', ques: 'Which tag is used to provide the contents in bold letters in HTML?', opA: 'hr', opB: 'br', opC: '<b>', opD: 'select tag', ans: 'C' },
    { qnum: '4', ques: 'Which tag is used to provide the contents in italic letters in HTML?', opA: '<i>', opB: 'br', opC: '<b>', opD: 'select tag', ans: 'A' },
    { qnum: '5', ques: 'Which tag is used to provide the contents in paragraph in HTML?', opA: '<pre>', opB: '<p>', opC: '<b>', opD: 'select tag', ans: 'B' },
  ];

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const handleOnChange = (questionNum, selectedOption) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [questionNum]: selectedOption }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let score = 0;
    const wrong = [];

    htmlQuestions.forEach(question => {
      if (answers[question.qnum] === question.ans) {
        score++;
      } else {
        wrong.push(question.qnum);
      }
    });

    setWrongAnswers(wrong);
    setResult(`Your score: ${score}/${htmlQuestions.length}`);
  };

  return (
    <div>
      <h1>HTML Assessment</h1>
      <form onSubmit={handleSubmit}>
        {htmlQuestions.map(question => (
          <Question
            key={question.qnum}
            qnum={question.qnum}
            ques={question.ques}
            opA={question.opA}
            opB={question.opB}
            opC={question.opC}
            opD={question.opD}
            onChange={handleOnChange}
          />
        ))}
        <br />
        <button type='submit'>Get Result</button>
      </form>
      {result && <h2>{result}</h2>}
      {wrongAnswers.length > 0 && (
        <div>
          <h3>Wrong Answers:</h3>
          <ul>
            {wrongAnswers.map(qnum => (
              <li key={qnum}>Question {qnum}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


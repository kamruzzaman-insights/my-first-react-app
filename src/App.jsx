import './App.css'

function App() {

  return (
    <>
      <h1>React Core Concepts</h1>
      <Student></Student>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="sabana" tech="java"></Developer>
      <Developer name="nahid" tech="PCB Design"></Developer>
      <Developer name="raihan" tech="JavaScript"></Developer>
      <Developer name="zaman" tech="python"></Developer>
    </>
  )
}

function Developer(hh) {
  console.log(hh);
  return(
    <div style={{
      border: '2px solid red',
      borderRadius: '10px',
      padding: '5px 10px',
      margin: '5px',
    }}>
      <h3>Developer: {hh.name} </h3>
      <p>Technology: {hh.tech} </p>
    </div>
  )
}

function Student() {
  return(
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

function Person() {
  const age = 17;
  const name = 'zaman';

  const personStyle = {
    color: 'red',
    fontSize: '2.5rem'
  }

  return(
    <div>
      <p style={personStyle}>I am a person: {age} {name} </p>
    </div>
  )
}

export default App

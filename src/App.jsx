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
      <Player name="hasib" runs="5000"></Player>
      <Player name="mushfiq" runs="5000"></Player>
      <Salami event="roja" hadia="1000"></Salami>
      <Salami event="graduation" hadia="2000"></Salami>
    </>
  )
}

function Salami({event, hadia}) {
  return(
    <div className='student'>
      <p>Salami for id: {event}</p>
      <p>Amount: {hadia}</p>
    </div>
  )
}

function Player({name, runs}) {
  return(
    <div className='student'>
      <h3>Name: {name} </h3>
      <p>Runs: {runs} </p>
    </div>
  )
}

function Developer(props) {
  console.log(props);
  return(
    <div style={{
      border: '2px solid red',
      borderRadius: '10px',
      padding: '5px 10px',
      margin: '5px',
    }}>
      <h3>Developer: {props.name} </h3>
      <p>Technology: {props.tech} </p>
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

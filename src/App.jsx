import './App.css';
import Todo from './Todo';
import Brother from './Brother';
import Stupid from './Stupid';


function App() {
  const brothers = ['anik', 'shariful', 'nahid', 'shariful', 'mazed', 'joy'];

  const stupids = [
    { id: 1, name: 'Dr. Mahfuz', age: 68 },
    { id: 2, name: 'Sudaru Younus', age: 80 },
    { id: 3, name: 'Potita Sharmin', age: 62 },
    { id: 4, name: 'Stupid Rizoana', age: 70 },
  ];


  return (
    <>
      <h1>React Core Concepts</h1>


      {
        stupids.map(stupid => <Stupid key= {stupid.id} stupid={stupid}></Stupid>)
      }

      {
        brothers.map(brother => <Brother brother={brother} married={false} ></Brother>)
      }




      {/* <Todo task="learn react" isDone={true}></Todo>
      <Todo task="shower" isDone={false}></Todo>
      <Todo task="roja" isDone={true}></Todo> */}
      {/* <Student></Student>
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
      <Salami event="graduation" hadia="2000"></Salami> */}
    </>
  )
}

function Salami({ event, hadia }) {
  return (
    <div className='student'>
      <p>Salami for id: {event}</p>
      <p>Amount: {hadia}</p>
    </div>
  )
}

function Player({ name, runs }) {
  return (
    <div className='student'>
      <h3>Name: {name} </h3>
      <p>Runs: {runs} </p>
    </div>
  )
}

function Developer(props) {
  console.log(props);
  return (
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
  return (
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

  return (
    <div>
      <p style={personStyle}>I am a person: {age} {name} </p>
    </div>
  )
}

export default App

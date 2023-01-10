import * as React from 'react'

//const Lists =['bob','john','mick'];
const list = [
  {id:1,title:"Assignment 1"},
  {id:2,title:"Assignment 2"},
  {id:3,title:"Assignment 3"},
];

function App() {
    return (
      <div>
      <h1>TodoList</h1>
      <ul>
        {/* {list.map((index) => {
                <li id={index.id}> {index.title} </li>
                })} */}
        {list.map(function(l){
          return <li key={l.id}>{l.title}</li>
        })}
      </ul>
      </div>
    );
}



export default App;

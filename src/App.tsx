import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState{
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
{
  name: "Lebron James",
  url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
  age: 36,
  note: "best"
},
])

// {
//   name: "Lebron James",
//   url: "",
//   age: 36,
//   note: "best"
// },
// {
//   name: "Kobe",
//   url: "",
//   age: 36,

// },

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;

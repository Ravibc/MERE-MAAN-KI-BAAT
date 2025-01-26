import React,{useEffect, useState} from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
   const [todos, setTodos] = useState([]);
   const [input, setInput] = useState('');
   
   useEffect(() => {
     
  db.collection('todos').orderBy('timestamp','asc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc=>({ id:doc.id , todo: doc.data().todo})))
  })
   }, []);

   const addTodo = (event) =>{
     event.preventDefault();
     db.collection('todos').add({
       todo:input,
       timestamp : firebase.firestore.FieldValue.serverTimestamp()
     })
     //setTodos([...todos,input]);
     setInput('');
   };

  return (
    <div className="App">
      <h1 className="title" >Man Ki Baatein</h1>
      <form >
      <FormControl>
           <InputLabel>Feel Free and Let your Emotions Flow Down....</InputLabel>
           <Input className="input-value" value={input} onChange={event =>setInput(event.target.value)} />
      </FormControl>
      <Button className="submit-btn" disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">I'm a Free Bird</Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
           //<li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;

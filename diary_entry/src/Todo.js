import { List, ListItem,ListItemText } from '@material-ui/core'
import React from 'react'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './App.css';

function todo(props) {
    var date = new Date().toTimeString();
    return (
       <List>
           <ListItem>
               <ListItemText className="listItem" primary = {props.todo.todo} secondary= {date} />
           </ListItem>
           <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete() }></DeleteForeverIcon>
       </List>
    )
}

export default todo;

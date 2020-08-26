import React,{useState} from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Note from "./Note/Note";
import CreateArea from "./CreateArea/CreateArea";

function App() {

  const [notes,setNotes] = useState([]);
  const addNote = (newNote) =>{
    setNotes((prevState)=>{
     return [...prevState,newNote];
    })
  }
  const deleteNote = (id) =>{
     setNotes((prevState)=>{
      return prevState.filter((note,index)=>{
        return index !== id;
       })
     })
  }

  return (
    <div>
      <Header />
      <CreateArea
      onAdd={addNote}
       />
       {notes.map((note,index)=>(
         <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>
       ))}
      <Footer />
    </div>
  );
}

export default App;
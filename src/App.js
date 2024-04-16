
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NoteList from "./components/NoteList.js";
import AddNote from "./components/AddNode.js";

const App = () => {
	const [notes, setNotes] = useState([]);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [canvasData,setCanvasData] = useState("")
	useEffect(() => {
		// Fetch notes from the server
		axios
			.get("https://notes-app-taupe-five.vercel.app/api/notes")
			.then((response) => setNotes(response.data))
			.catch((error) => console.error("Error fetching notes:", error));
	}, []);

	const handleAddNote = () => {
		// Add a new note to the server
		axios
			.post("https://notes-app-taupe-five.vercel.app/api/notes", { title, content, canvasData })
			.then((response) => {
				setNotes([...notes, response.data]);
				setTitle("");
				setContent("");
				setCanvasData("");
			})
			.catch((error) => console.error("Error adding note:", error));
	};
	const handleEditNote = (id, updatedTitle, updatedContent) => {
		// Update note by ID
		axios
			.put(`https://notes-app-taupe-five.vercel.app/api/notes/${id}`, {
				title: updatedTitle,
				content: updatedContent,
			})
			.then((response) => {
				const updatedNotes = notes.map((note) =>
					note._id === id ? response.data : note
				);
				setNotes(updatedNotes);
			})
			.catch((error) => console.error("Error updating note:", error));
	};

	const handleDeleteNote = (id) => {
		// Delete note by ID
		axios
			.delete(`https://notes-app-taupe-five.vercel.app/api/notes/${id}`)
			.then((response) => {
				const updatedNotes = notes.filter((note) => note._id !== id);
				setNotes(updatedNotes);
			})
			.catch((error) => console.error("Error deleting note:", error));
	};

	return (
		// <div className="app-container">
		// 	<h1>Notes App</h1>
		// 	{/* <Canvas/> */}

		
		
		// </div>
		
		<div className="app-container">
		<div className="addnotes" style={{width:'50vh',height:'90%'}}>
		<AddNote
				title={title}
				setTitle={setTitle}
				content={content}
				setContent={setContent}
				onAddNote={handleAddNote}
				setCanvasData={setCanvasData}
			/>
		</div>
		<div className="notelistCurve" style={{width:'50vh',height:'90%'}}>
		<h2 style={{textAlign:'center',color:'#41B06E'}}>NOTE LIST</h2>

		<div className="notesList"  style={{width:'50vh',height:'90%'}} >
		
		<NoteList
				notes={notes}
				onEditNote={handleEditNote}
				onDeleteNote={handleDeleteNote}
			
			/>
		</div>
		</div>
		
		</div>

		
		
	);
};

export default App;

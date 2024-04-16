import React from "react";
import Canvas from "./Canvas";

const AddNote = ({ title, setTitle, content, setContent, onAddNote, setCanvasData }) => {
	const handleSaveCanvas = (canvas) => {
    const base64Data = canvas.toDataURL('image/png');
    setCanvasData(base64Data);
  };

	
	return (
		<div>
			<h2 style={{textAlign:'center'}}>ADD NOTE</h2>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			></textarea>
			<h3 style={{textAlign:'center'}}>DRAW HERE</h3>

			<div className="canvas">
			<Canvas width={1000} height={1000} onSaveCanvas={handleSaveCanvas} />

			</div>

			<button style={{borderRadius:"25px"}} className="button1" onClick={onAddNote}>
				Add Note
			</button>

		</div>
	);
};

export default AddNote;

import React from "react";
import CanvasPreview from "./CanvasPreview";

const NoteList = ({ notes, onEditNote, onDeleteNote }) => {
	return (
		
		<ul>

			{notes.map((note) => 
			
			(
				
				<li key={note._id}>
				
					<strong>{note.title}</strong>
					<p>{note.content}</p>
					<CanvasPreview  base64Data={note.canvasData} />

					<button
						className="button2"
						style={{ marginRight: "15px",borderRadius:"25px" }}
						onClick={() =>
							onEditNote(
								note._id,
								prompt("Enter updated title:", note.title),
								prompt("Enter updated content:", note.content)
							)
						}
					>
						Edit
					</button>
					<button
						className="button2" style={{borderRadius:"25px"}}
						onClick={() => onDeleteNote(note._id)}
					>
						Delete
					</button>
				</li>
			))}
		</ul>
	);
};

export default NoteList;

import React from "react";

const Note = ({ title, content, onDelete, id }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        DELETE
      </button>
    </div>
  );
};

export default Note;

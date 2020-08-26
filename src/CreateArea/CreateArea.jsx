import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const { title, content } = note;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const submitNote = (event) => {
    onAdd(note);

    event.preventDefault();
  };
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

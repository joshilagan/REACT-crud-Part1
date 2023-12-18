import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function InputField(props) {
  // Get the title of the blog card from the props
  const { title } = props;

  // Use a state variable to store the edited title
  const [editedTitle, setEditedTitle] = useState(title);

  // Define a function to handle the change event of the input field
  function handleChange(e) {
    // Set the edited title to the new value of the input field
    setEditedTitle(e.target.value);
  }

  return (
    <div>
      {/* Use the defaultValue prop to set the initial value of the input field */}
      <input type="text" id="title" onChange={handleChange} defaultValue={editedTitle} />
      {/* Use the CopyToClipboard component to copy the edited title to the clipboard */}
      <CopyToClipboard text={editedTitle}>
        <button>Copy</button>
      </CopyToClipboard>
    </div>
  );
}

export default InputField;
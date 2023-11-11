import { useState } from "react";
function TodosList({ keyProp, valueProp, del, edit, done }) {
  let [display, changeState] = useState(false);
  let handleKey = (e) => {
    if (e.key == "Enter") {
      console.log("pressed enter");
      let text = document.getElementById("iText").value;

      edit(text, keyProp);
      handleEdit();
    }
  };
  let [status, setStatus] = useState("Incompleate");

  let handleEdit = () => {
    console.log("handle click active");
    if (display == true) {
      changeState(false);
      console.log(display);
    } else {
      changeState(true);
      console.log(display);
    }
  };
  return (
    <div className="todoDiv">
      <h4 className="todoItems">
        {display ? (
          <EditMenu handleKey={handleKey} valueProp={valueProp} />
        ) : (
          <h3>
            {keyProp + 1}:{valueProp}
          </h3>
        )}
      </h4>
      <button onClick={() => del(keyProp)} className="del">
        Delete
      </button>
      <button onClick={() => handleEdit()} className="edit">
        Edit
      </button>
      <button
        onClick={
          status == "Incompleate"
            ? () => setStatus("Compleate")
            : () => setStatus("Incompleate")
        }
        className={status == "Compleate" ? "done" : "notdone"}
      >
        {status}
      </button>
    </div>
  );
}

function EditMenu({ handleKey, valueProp }) {
  return (
    <div>
      <input
        className="textField"
        type="text"
        name="todo"
        id="iText"
        placeholder={valueProp}
        onKeyDown={handleKey}
      />
    </div>
  );
}

export default TodosList;

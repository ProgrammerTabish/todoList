import { useState } from "react";
import TodosList from "./TodosList";

function AddTodo() {
  let [todoArr, addElement] = useState([]);

  function add() {
    let txt = document.getElementById("inputText").value;
    addElement([...todoArr, txt]);
    document.getElementById("inputText").value = null;
  }

  let handleDel = (number) => {
    todoArr.splice(number, 1);
    addElement([...todoArr]);
  };
  let handleEdit = (text, keyProp) => {
    let tempArray = [...todoArr];
    tempArray[keyProp] = text;
    addElement([...tempArray]);
  };
  let handleDone = (number) => {
    console.log(number);
  };
  let handleKeyDown = (e) => {
    if (e.key == "Enter") {
      add();
    }
  };

  return (
    <>
      <div className="addTodo">
        <input
          className="textField"
          type="text"
          name="todo"
          id="inputText"
          placeholder="Enter todo here....."
          onKeyDown={handleKeyDown}
        />
        <button className="addButton" onClick={add}>
          Add Todo
        </button>
      </div>
      {todoArr.map((item, index) => (
        <TodosList
          key={index}
          keyProp={index}
          valueProp={item}
          del={handleDel}
          edit={handleEdit}
          done={handleDone}
        />
      ))}
    </>
  );
}

export default AddTodo;

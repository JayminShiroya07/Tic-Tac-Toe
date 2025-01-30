import { useState } from "react";

export default function Player({ Name, sort, Symbole, button, num, isActive, ...props }) {
  const [changedName, setChangedName] = useState(Name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editValue) => !isEditing);
  }

  function handleNameChange(event) {
    setChangedName(event.target.value);
  }


  let playerName = <h1>{changedName}</h1>;

  if (isEditing) {
    playerName = (
      <input
        id="name"
        className="outline-amber-200 w-full p-1"
        value={changedName}
        onChange={handleNameChange}
        autoFocus
        type="text"
        maxLength={10}
        required
      />
    );
  }

  return (
    <>
      <div className="w-1/2 flex justify-center flex-col p-2 gap-2 ">
        <h5 className="w-full text-center font-semibold text-[14px] md:text-2xl text-white ">
          Player {num}
        </h5>
        <div className="w-full border-t-2 p-3 flex justify-center items-center">
          <div className="w-2/3 p-2 text-white overflow-hidden">
            {playerName}
          </div>
          <div 
            id={isActive?'active':''}
            className='w-1/3 rounded-md border-2 p-3 md:text-4xl font-bold text-center'>
            {Symbole}
          </div>
        </div>
        <button
          onClick={() => handleEditClick()}
          className="bg-amber-200 rounded-md w-full text-black"
        >
          {isEditing ? "save" : "edit"}
        </button>
      </div>
    </>
  );
}

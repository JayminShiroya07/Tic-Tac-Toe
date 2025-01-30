function Recipe({ rec }) {

  

  const onSelectUpdate = (rec) => {
    document.getElementById("name").value = rec.name;
    document.getElementById("type").value = rec.type;
    document.getElementById("description").value = rec.description;
    document.getElementById("name").classList.a
    setSelectedItem(rec.id);
  }

  return (
    <>
        <div
          key={rec.id}
          className="card shadow-sm rounded-sm bg-white flex flex-col md:flex-row "
        >
          <div className="card shadow-sm rounded-sm md:w-1/12 w-full p-2 text-center font-bold h-full flex justify-center flex-col bg-gray-400">
            Recipe {rec.id}
          </div>
          <div className="p-3 text-black md:h-full md:w-10/12">
            <ul className="p-2">
              <li>
                <span className="text-gray-900 font-bold">Name </span>:{" "}
                {rec.name}
              </li>
              <hr />
              <li>
                <span className="text-gray-900 font-bold">Type </span> :{" "}
                {rec.type}
              </li>
              <hr />
              <li>
                <span className="text-gray-900 font-bold">Description </span> :{" "}
                {rec.description}
              </li>
            </ul>
          </div>
          <div className="md:w-1/12 w-full h-full p-3 bg-gray-400 flex flex-row md:flex-col justify-center gap-2 rounded">
            <button
              className="bg-yellow-400 p-2 rounded-md"
              onClick={() => onSelectUpdate(rec)}
            >
              Update
            </button>
            <button
              className="bg-red-400 p-2 rounded-md"
              onClick={() => {
                deleteItem(rec.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
    </>
  );
}

export default Recipe;

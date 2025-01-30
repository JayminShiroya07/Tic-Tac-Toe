import { Fragment, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

let  DummyRecipes = [
  {
    id: 1,
    name: "Biryani",
    type: "Non-Veg",
    description:
      "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, pork, lamb, prawn, or fish), and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties.",
  },
  {
    id: 2,
    name: "Pav Bhaji",
    type: "Veg",
    description:
      "Pav Bhaji is a fast food dish from India, consisting of a thick vegetable curry served with a soft bread roll. Its origins are in the state of Maharashtra.",
  },
  {
    id: 3,
    name: "Pasta",
    type: "Veg",
    description:
      "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking. Rice flour, or legumes such as beans or lentils, are sometimes used in place of wheat flour to yield a different taste and texture, or as a gluten-free alternative.",
  },
  {
    id: 4,
    name: "Pizza",
    type: "Veg",
    description:
      "Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven.",
  },
  {
    id: 5,
    name: "Burger",
    type: "Veg",
    description:
      "A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan-fried, grilled, smoked, or flame-broiled.",
  },
  {
    id: 6,
    name: "Dosa",
    type: "Veg",
    description:
      "Dosa is a type of pancake from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance. Its main ingredients are rice and black gram.",
  },
  {
    id: 7,
    name: "Idli",
    type: "Veg",
    description:
      "Idli or idly are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and among Tamils in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils and rice.",
  },
  {
    id: 8,
    name: "Samosa",
    type: "Veg",
    description:
      "A samosa is a fried or baked pastry with a savory filling, such as spiced potatoes, onions, peas, cheese, beef and other meats, or lentils. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.",
  },
  {
    id: 9,
    name: "Pani Puri",
    type: "Veg",
    description:
      "Panipuri is a type of snack that originated in the Indian subcontinent. It consists of a round or ball-shaped, hollow puri filled with a mixture of flavored water, tamarind chutney, chili, chaat masala, potato, onion, or chickpeas.",
  },
  {
    id: 10,
    name: "Chole Bhature",
    type: "Veg",
    description:
      "Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala and bhatura, a fried bread made from maida flour.",
  },
  {
    id: 11,
    name: "Gulab Jamun",
    type: "Veg",
    description:
      "Gulab jamun is a milk-solid-based sweet from the Indian subcontinent, and a type of mithai, popular in India, Nepal, Pakistan, the Maldives, and Bangladesh, as well as Myanmar.",
  },
  {
    id: 12,
    name: "Rasgulla",
    type: "Veg",
    description:
      "Rasgulla is a syrupy dessert popular in the Indian subcontinent and regions with South Asian diaspora. It is made from ball-shaped dumplings of chhena and semolina dough, cooked in light syrup made of sugar.",
  },
  {
    id: 13,
    name: "Jalebi",
    type: "Veg",
    description:
      "Jalebi, also known as zulbia and zalabia, is a sweet popular food in some parts of South Asia, West Asia, North Africa, and East Africa. It is made by deep-frying maida flour batter in pretzel or circular shapes, which are then soaked in sugar syrup.",
  },
];

function App() {
  const [recipes, setRecipes] = useState(DummyRecipes);
  const [selectedItem,setSelectedItem] = useState(null);


  const titles = ["Gulab Jamun", "Rasgulla", "Jalebi" , "rasmalai" , "kaju katli"];

  function generateRandomNumber(max) {
    return Math.floor(Math.random() * (max+1));
  }

  const addRecipe = () => {
    alert("submit");
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const description = document.getElementById("description").value;
    const id = recipes.length > 0 ? Math.max(...recipes.map(r => r.id)) + 1 : 1;

    setRecipes([...recipes, { id, name, type, description }]);
    resetForm();
  };

  const resetForm = () => {
    document.getElementById("name").value = "";
    document.getElementById("type").value = "breakfast";
    document.getElementById("description").value = "";
    setSelectedItem(null);
  };


  const updateRecipe = () => {
    alert("updated successfuly!");
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const description = document.getElementById("description").value;
    
    const newRecipes = recipes.map((rec) =>
      rec.id === selectedItem ? { ...rec, name, type, description } : rec
    );
    setRecipes(newRecipes);
    resetForm();
  }


  const deleteItem = (id) => {
    const newRecipes = recipes.filter((rec) => rec.id !== id);
    setRecipes(newRecipes);
  }

  return (
    <Fragment>
      <div className="w-screen h-screen bg-slate-900">
        <div className="bg-slate-600 h-14 justify-center items-center flex fixed w-full">
          <h1 className="text-2xl font-bold">Wanna make {titles[generateRandomNumber(titles.length - 1)]}</h1>
        </div>

        <div className="flex pt-16 w-full h-full justify-items-start md:justify-evenly p-4 gap-4 flex-col md:flex-row">
          <div className="w-full md:2/3 h-1/2 md:h-full bg-slate-400 rounded-md overflow-hidden">
            <div className="w-full bg-slate-700 h-14 flex justify-center items-center shadow-md shadow-slate-900 rounded-t-md">
              <h1 className="text-2xl font-bold ">Recipes</h1>
            </div>

            <div className="w-full mt-[1px] bg-slate-600 flex flex-col gap-2 p-4 text-black overflow-y-scroll" style={{ height: "calc(100% - 50px)" }}>
              {recipes.map((rec)=><Recipe rec={rec}/>)}
              
            </div>
          </div>
          <div className="w-full md:w-1/3 md:h-full h-1/2 bg-slate-400 rounded-md overflow-hidden grid 
          align-center grid-flow-row md:grid-rows-[56px_1fr_56px] grid-rows-[30px_1fr_46px]">
            <div className="w-full bg-slate-700 flex justify-center items-center shadow-md shadow-slate-900 rounded-t-md">
              <h1 className=" md:text-2xl font-bold ">Add Recipe</h1>
            </div>

            <div className="w-full mt-[1px] bg-slate-600 flex flex-col gap-2 p-4 text-black">
              <form>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-bold text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="p-2 rounded-md outline-1 placeholder:text-gray-400 text-gray-400 font-medium"
                    placeholder="Enter Name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="Type" className="font-bold text-gray-400">
                    Type
                  </label>
                  <select
                    name="type"
                    id="type"
                    className="p-2 rounded-md outline-1 placeholder:text-gray-400 text-gray-400 font-medium"
                  >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="ingredients" className="font-bold text-gray-400">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    className="p-2 rounded-md outline-1 placeholder:text-gray-400 text-gray-400 font-medium"
                    placeholder="Enter Description"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="w-full bg-slate-700 flex justify-start item-center p-2 gap-2">
              <input
                type="submit"
                value={selectedItem ? "update":"submit"}
                id="submit"
                className="text-center bg-amber-100 text-black rounded w-20 font-bold"
                onClick={selectedItem ? updateRecipe : addRecipe}
              />
              <input
                type="reset"
                value="reset"
                className="text-center bg-red-400 text-black rounded w-20 font-bold"
                onClick={resetForm}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

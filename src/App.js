
import "./App.css";
import axios from "axios";
import { useState } from "react";

// set local storage json.stringlifly
// what I did here. I stored our favorites into local storage with key name favorites.
// We also stored the array of the record that has been passed to the addFav(). If the item
// exit in local storage then it means, we are going to remove it from our favorite list.

// setFavorites([...array]);
// localStorage.setItem("favorites", JSON.stringify(favorites));

// var storage = localStorage.getItem("favItem" + props.i || "0");
// if (storage == null) {
//   localStorage.setItem("favItem" + props.i, JSON.stringify(props.items));
// } else {
//   localStorage.setItem("favItem" + props.i);
// }


function App() {
  const listType = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];
  const [type, setType] = useState("education");
  const [dataActivity, setDataActivity] = useState("education");
  const onChange = (value) => {
    console.log(`selected ${value}`);
    setType(value);
    // Make a request for a user with a given ID
    axios
      .get(`https://www.boredapi.com/api/activity?type=${value}`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setDataActivity(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <div className="col-6">
      <label>type of activity :</label>
      <select onChange={(e) => onChange(e.target.value)}>
        {" "}
        {listType.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
      <button onClick={(e) => onChange(type)}> roll</button>
      <h1>{type}</h1>
      <h2>{dataActivity.activity}</h2>
    </div>
  );
}

// function D() {
//   const [fullList, setFullList] = useState([
//     "item1",
//     "item2",
//     "item3",
//     "item4",
//   ]);
//   const [favList, setFavList] = useState([]);

//   const handleFavAddClick = (e) => {
//     setFavList((preState) => [...preState, e]);
//     setFullList((preState) => preState.filter((item) => item !== e));
//   };

//   return (
//     <div>
//       Full List (add to fav by clicking them)
//       <ul>
//         {fullList.map((e) => (
//           <li key={e} onClick={() => handleFavAddClick(e)}>
//             {e}
//           </li>
//         ))}
//       </ul>
//       Fav List
//       <ul>
//         {favList.map((e) => (
//           <li key={e}>{e}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default App;

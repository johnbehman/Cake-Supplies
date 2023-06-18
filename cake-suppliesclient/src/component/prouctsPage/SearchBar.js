import { useEffect, useState } from "react";
import React from "react";



export const SearchBar = async () => {
  
      const [searchInput, setSearchInput] = useState("");
const  ListOfCategory = [  
    { Category: "coloring", Name:  "Ivory Amerimist Air Brush Color"}, 
    { Category: "coloring", Name: "Copper Amerimist Airbrush Color 4.5 oz."}, 
    { Category: "coloring", Name: "Lemon Yellow Amerimist Airbrush Color 4.5 oz. "},
    { Category: "coloring", Name: "Green Sheen Amerimist Airbrush Col or 4.5 oz."},
    { Category: "coloring", Name: "Green Sheen Airbrush Color 4.5 oz"}, 
    { Category: "coloring", Name: "Lavender Sheen Airbrush Color 4.5  oz"},
    { Category: "coloring",Name:" Silve r Sheen Airbrush Color 4.5oz"} ,
    { Category: "BakingSupplies", Name: "Tall Window Cake Box  - White"},
    { Category: "BakingSupplies", Name: "Cupcake Boxes Mockup"}, 
    { Category: "BakingSupplies", Name: "OXO Good Grips Offset Icing Spatula"}, 
    { Category: "BakingSup plies ",Name:"KitchenAid Artisan Serie s Stand Mixer"},
    { Category: "Edibles", Name: "FONDANT AMOUNTS TO COVER CAKES" },
    { Category: "Edibles", Name: "merckens  milk chocolate wafers"},
    { Category: "Edibles", Name: "Fondant" },
    { Category: "Edibles", Name: "Fondant" },
    { Category: "Edibles", Name: "Fondant" },
    { Category: "Edibles", Name: "Fondant" },
    { Category: "Edibles", Name: "Fondan t"},
    { Category: "Edibles",Name:"Ca ndy"} , 
    { Category: "DecoratingTools", Name: "Round Table"}, 
    { Category: "DecoratingTools", Name: "Fondant Rolling"}, 
    { Category: "DecoratingTools", Name: "Decorating Tool Set"}, 
    { Category: "DecoratingTools", Name: "cake decorat ing tool set"},
      {Category:"DecoratingTools",Name:"Cake Nozzle"},
];

  
const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
};
  
  if (searchInput.length > 0) {
    ListOfCategory.filter((taco) => {
        return taco.Name.match(searchInput);
  });
  
}




  return (<div>

  <input
     type="search"
     placeholder="Search here"
     onChange={handleChange}
     value={searchInput} />
  
  <table>
    <tr>
      <th>Country</th>
      <th>Continent</th>
    </tr>
  
  {ListOfCategory.map((country, ) => {
  
  <div>
    <tr>
      <td>{country.Name}</td>
      <td>{country.Category}</td>
    </tr>
  </div>
  
  })}
  </table>
  
  </div>
  );
  
  };

 

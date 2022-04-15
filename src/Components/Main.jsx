// import React from "react";
// import { Products } from "./Products";
// import { Logger, ConsoleLogger } from "react-console-logger";

// Products.forEach(function (a) {
//     let price = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
//       a.price / 100
//     );

// function Main() {
//   return (
//     <div className="background">
//       <div className="mainContainer">
//           <h1>Weapons... of love</h1>
//           <hr />

//         Products.map((data) => (
//         <div className="mainGrid" key={data.id}>
//             <figure>data.image</figure>
//             <h2>data.title</h2>
//             <p>data.price</p>
//         </div>
//         ));
//       </div>
//     </div>
//   );
// }

// export default Main;

import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products.json";
import Lilies from "./Lilies";
import Lilies from "./Lilies";
import Lilies from "./Lilies";
import Lilies from "./Lilies";

const Main = ({ handleSelect }) => {
  const navigate = useNavigate();
  const goToAccountDetail = () => navigate("/Lilies");

  return (
    <div className="background">
      <div className="mainContainer">
        <h1>Weapons... of love</h1>
        <hr />

        <h2>Roses</h2>
        <Lilies products={products} handleSelect={handleSelect} />
        <h2>Lilies</h2>
        <Lilies products={products} handleSelect={handleSelect} />
        <h2>Carnations</h2>
        <Lilies products={products} handleSelect={handleSelect} />
        <h2>Mixed</h2>
        <Lilies products={products} handleSelect={handleSelect} />

        {/* <div className="gridContainer">
        <div className="gridContainer">
          {products.map((item) => {
            return (
              <div
                className="mainGrid"
                key={item.id}
                onClick={function () {
                  handleSelect(item);
                }}
              >
                <figure>
                  <img
                    src={item.image}
                    alt="image-JPG"
                    style={{ width: "200px" }}
                  />
                  {console.log(item.image)}
                </figure>
                <h2>{item.title}</h2>
                <p>
                  {new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: "CAD",
                  }).format(item.price / 100)}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Main;

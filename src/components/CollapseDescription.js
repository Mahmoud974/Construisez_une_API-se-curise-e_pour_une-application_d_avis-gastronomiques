import { React, useState } from "react";

//Composant de description Equipement & Description
const CollapseDescription = ({ card }) => {
  const [collapse, setCollapse] = useState(false);
  const [display, setDisplay] = useState("none");
  const [isActive, setIsActive] = useState("");
  const [rotate, setRotate] = useState("180deg");

  /**
   * Actionner le collapse du produit descriptif
   */
  const inputCollapse = () => {
    setIsActive(isActive === "" ? "active" : "");
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
    setDisplay(display === "block" ? "none" : "block");
    setCollapse(!collapse);
  };

  return (
    <>
      <div className="card">
        <div className="collapse">
          <h3>Description </h3>
          <i
            className={
              collapse
                ? "fa-sharp fa-solid fa-angle-up"
                : "fa-sharp fa-solid fa-angle-down"
            }
            onClick={() => inputCollapse()}
          ></i>
        </div>
        <div
          className={`list-description ${isActive}`}
          style={{ display: `${display}` }}
        >
          <p>{card.description}</p>
        </div>
      </div>

      <div className="card">
        <div className="collapse">
          <h3>Équipement </h3>
          <i
            className={
              collapse
                ? "fa-sharp fa-solid fa-angle-up"
                : "fa-sharp fa-solid fa-angle-down"
            }
            onClick={() => inputCollapse()}
          ></i>
        </div>
        <ul
          className={`list-equipment  ${isActive}`}
          style={{ display: `${display}` }}
        >
          <div>
            {card.equipments.map((equipement, index) => {
              return <li key={index}>{equipement}</li>;
            })}
          </div>
        </ul>
      </div>
    </>
  );
};

export default CollapseDescription;

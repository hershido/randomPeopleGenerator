import "../css/Main.css";
import React, { useState } from "react";
import PersonList from "./PersonList";
import { data } from "../data";
import faker from "faker";

export default function Main() {
  const [people, setPeople] = useState(data);

  function addPerson() {
    let fakeName = faker.name.findName();
    let fakeAge = Math.floor(Math.random() * (65 - 20 + 1)) + 20;
    let fakeImg = faker.image.avatar();

    console.log(fakeImg);

    let newPerson = {
      id: people.length,
      name: fakeName,
      age: fakeAge,
      img: fakeImg,
    };

    setPeople((prev) => {
      return [...prev, newPerson];
    });
  }

  function checkPeople() {
    if (people.length === 0) {
      return "Add a new person";
    } else if (people.length === 1) {
      return "1 random person";
    } else {
      return `${people.length} random people`;
    }
  }

  return (
    <main>
      <div className="mainContainer">
        <h1>{checkPeople()}</h1>
        <p>CHANGE</p>
        <p>CHANGE2</p>
        <PersonList people={people} />
        <button onClick={addPerson} className="btn add-btn">
          Add Random Person
        </button>
        <button
          onClick={() => {
            setPeople([]);
          }}
          className="btn clear-btn"
        >
          Clear All
        </button>
      </div>
    </main>
  );
}

import "../css/Component.css";
import "../css/PersonList.css"

export default function PersonList({ people }) {
  return (
    <div class="personList">
      {people.map((person) => {
        const { name, age, img } = person;
        console.log(name, age, img);

        return (
          
             <div key={person.id} className="component">
            <img className="avatar" src={img}></img>
            <div className="name-and-age">
              <p className="name">{name}</p>
              <p className="age">{age} years</p>
            </div>
          </div>
         
         
        );
      })}
    </div>
  );
}

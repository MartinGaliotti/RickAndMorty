import Card from "../../components/card/Card";
import Styles from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={Styles.container}>
      {props.characters.map((character, key) => (
        <Card
          key={key}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={props.onClose}
        />
      ))}
    </div>
  );
}

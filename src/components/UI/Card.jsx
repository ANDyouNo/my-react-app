import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // добавляет классы из других компонентов
  return <div className={classes}>{props.children}</div>; //Позволяет закинуть разметку между тегов компонента
}

export default Card;

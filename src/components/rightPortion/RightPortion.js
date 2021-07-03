import "./styles.css";
import Card from "../card/Card";
export default function RightPortion() {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>What are you having for lunch?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

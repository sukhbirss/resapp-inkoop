import "./styles.css";
import { useState } from "react";
const css = { textDecorationLine: "line-through", textDecorationColor: "red" };
export default function Sidebar() {
  const [state, setState] = useState("About");

  return (
    <div className="sidebar">
      <h1>Lorem Ipsum</h1>
      <p
        onClick={() => setState("About")}
        style={state === "About" ? css : null}
      >
        About
      </p>
      <p
        onClick={() => setState("Service")}
        style={state === "Service" ? css : null}
      >
        Service
      </p>
      <p
        onClick={() => setState("Cuisine")}
        style={state === "Cuisine" ? css : null}
      >
        Cuisine
      </p>
      <p
        onClick={() => setState("Gallary")}
        style={state === "Gallary" ? css : null}
      >
        Gallary
      </p>
      <p
        onClick={() => setState("Contact")}
        style={state === "Contact" ? css : null}
      >
        Contact
      </p>
      <p onClick={() => setState("Book")} style={state === "Book" ? css : null}>
        Book
      </p>
      <button>cart</button>
    </div>
  );
}

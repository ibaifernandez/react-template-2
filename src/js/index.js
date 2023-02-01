import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Component from "./component/Component.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Hendrix from "../../public/img/Hendrix.jpeg";

let dataObject = {
    image: Hendrix,
    title: "Jimi Hendrix",
    description:
        "James Marshall Hendrix was an American guitarist, singer and songwriter.",
    button: {
        buttonLabel: "Go Wiki",
        buttonURL: "buttonURLhttps://en.wikipedia.org/wiki/Jimi_Hendrix",
    },
};

ReactDOM.render(
    <Component
        imageURL={dataObject.image}
        imageAltText={dataObject.description}
        title={dataObject.title}
        description={dataObject.description}
        buttonTargetURL={dataObject.button.buttonURL}
        buttonLabel={dataObject.button.buttonLabel}
    />,
    document.querySelector("#app")
);

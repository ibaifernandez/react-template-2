import React from "react";

const Component = (props) => {
    return (
        <div className="card w-25 mt-5 mx-auto">
            <img
                className="card-img-top"
                src={props.imageURL}
                alt={props.imageAltText}
            />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.buttonTargetURL} className="btn btn-primary">
                    {props.buttonLabel}
                </a>
            </div>
        </div>
    );
};

export default Component;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from "@fortawesome/free-regular-svg-icons";

export const ToDo = ({task}) => {
    return (
        <div className="Todo">
            <p>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} />
                <FontAwesomeIcon icon={faTrash} />
                {/* <FontAwesomeIcon icon={faCoffee} />
                <FontAwesomeIcon icon={faUser} /> */}
            </div>
        </div>
    )
}

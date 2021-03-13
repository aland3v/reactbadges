import React from "react";
import md5 from "md5";

function Gravatar(props) {
    const email = props.email;
    const hash = md5(email);
    return (
        <img
            src={`https://s.gravatar.com/avatar/${hash}?s=80`}
            className={props.className}
            alt="Avatar"
        />
    );
}

export default Gravatar;

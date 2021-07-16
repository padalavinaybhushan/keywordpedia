import React from "react";
import "../header.css";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        {/* <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span> */}
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
      <dd class="butt_lang">{props.Button_link}</dd>
    </div>
  );
}

export default Entry;

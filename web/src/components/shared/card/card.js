import React from "react";
import "./card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card__content">
        {/* <div className="card__content__avatar">...</div> */}
        <div className="card__content__pseudo">Eddwiin</div>
        <div className="card__content__date">05/2020</div>
        <div className="card__content__last-message">
          {/* Lorem Ipsum is simply dummy text of the printing 
          and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has 
          survived not only five centuries, but also the leap 
          into electronic typesetting, remaining essentially 
          unchanged. It was popularised in the 1960s with the 
          release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of 
          Lorem Ipsum. */}
        </div>
      </div>
    </div>
  );
};

export { Card };
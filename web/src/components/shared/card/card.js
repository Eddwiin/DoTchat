import React from "react";
import avatar from "@/assets/images/avatar-empty.png";
import "./card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card__content">
        <img className="card__content__avatar" src={avatar} alt="avatar" />
        <div className="card__content__pseudo">Pseudo</div>
        <div className="card__content__date">Date</div>
        <div className="card__content__last-message">
          Alii summum decus in carruchis solito
          {/* altioribus et ambitioso
          vestium cultu ponentes sudant sub ponderibus lacernarum, quas in
          collis insertas cingulis ipsis adnectunt nimia subtegminum tenuitate
          perflabiles, expandentes eas crebris agitationibus maximeque
          sinistra, ut longiores fimbriae tunicaeque perspicue luceant
          varietate liciorum effigiatae in species animalium multiformes. */}
        </div>
      </div>
    </div>
  );
};

export { Card };

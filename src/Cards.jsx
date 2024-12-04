import propTypes from "prop-types";
import './App.css'
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";



const Cards = (card) => {
  //  console.log(card);
  console.log(card.card.features[0].isIncluded);

  return (
    <>
    <div className="cart ">
      <i className=" bg-primary bi bi-check-lg"></i>
      <div className="card-con">
        <p className="fw-medium mt-3 mb-2" style={{ color: "#ccc" }}>{card.card.tag}</p>
        <h1>{card.card.tittle}</h1>
        <div className="horizontal-line"></div>
        <div className="line">
          <p><span className="me-2">{card.card.features[0].isIncluded ? <FaCheck /> : <FaXmark />}</span>{card.card.features[0].text}</p>
          <p><span className="me-2">{card.card.features[1].isIncluded ? <FaCheck /> : <FaXmark />}</span>{card.card.features[1].text}</p>
          <p><span className="me-2">{card.card.features[2].isIncluded ? <FaCheck /> : <FaXmark />}</span>{card.card.features[2].text}</p>
          <p><span className="me-2">{card.card.features[3].isIncluded ? <FaCheck /> : <FaXmark />}</span>{card.card.features[3].text}</p>
          <p><span className="me-2">{card.card.features[4].isIncluded ? <FaCheck /> : <FaXmark />}</span>{card.card.features[4].text}</p>
          <p><span className="me-2">{card.card.features[5].isIncluded ? <FaCheck /> : <FaXmark />}</span>{card.card.features[5].text}</p>
          <p><span className="me-2">{card.card.features[6].isIncluded ? <FaCheck /> : <FaXmark />}</span>{card.card.features[6].text}</p>
          <p><span className="me-2">{card.card.features[7].isIncluded ? <FaCheck /> : <FaXmark />}</span>{card.card.features[7].text}</p>
        </div>
        <button className="btn btn-primary mb-4 fw-medium">BUTTON</button>
      </div>
    </div>
    </>

  )
  

}

Cards.ProtoTypes = {
  card: propTypes.string.isRequired,

};

export default Cards
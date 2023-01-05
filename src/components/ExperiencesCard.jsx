import starIcon from '../assets/star-logo.svg';

function ExperiencesCard(props) {
  return (
    <div className="card">
      {props.status && <div className="status">{props.status}</div>}
      <img className="card-img" src={props.img} alt="bike" />
      <div className="card-info">
        <img src={starIcon} />
        <p>
          <span className="rate">{props.rate}</span> ({props.reviewCount}) · USA
        </p>
      </div>
      <div className="card-body">
        <p>{props.description}</p>
        <p>
          <span className="price">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default ExperiencesCard;

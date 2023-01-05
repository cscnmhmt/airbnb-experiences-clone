import ExperiencesCard from './ExperiencesCard';
import personImg from '../assets/person.png';
import weddingImg from '../assets/wedding.png';
import bikeImg from '../assets/bike.png';

function Cards() {
  return (
    <div className="cards">
      <ExperiencesCard
        img={personImg}
        status="sold out"
        description="Life Lessons with Katie"
        rate="5.0"
        reviewCount="6"
        price="136"
      />
      <ExperiencesCard
        img={weddingImg}
        status="online"
        description="Learn wedding photography"
        rate="5.0"
        reviewCount="30"
        price="125"
      />
      <ExperiencesCard
        img={bikeImg}
        status=""
        description="Group Mountain Biking"
        rate="4.8"
        reviewCount="2"
        price="50"
      />
    </div>
  );
}

export default Cards;

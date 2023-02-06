import { Link } from 'react-router-dom';
import boyIcon from '/boy.svg';
import girlIcon from '/girl.svg';
import petImage from '/Naisy.png';
import './pet-card.css';

function PetCard({
  name = 'Найси',
  gender = 'girl',
  text = 'Идеальная, послушная и умная юная девочка',
  id = '1',
  phone = '89178122111',
  isDelitable = false,
}) {
  const genderObj =
    gender === 'male'
      ? { gender: 'МАЛЬЧИК', icon: boyIcon }
      : { gender: 'ДЕВОЧКА', icon: girlIcon };

  function deletePetCard() {
    console.log('Удаление карточки питомца');
  }

  return (
    <div className="pet__card">
      <img src={petImage} className="pet__card-image" />
      <div className="pet__card-info">
        <div className="pet__card-block">
          <h4 className="pet__card-title">{name}</h4>
          <div className="pet__card-gender-block">
            <img src={genderObj.icon} className="pet__card-gender-image" />
            {genderObj.gender}
          </div>
        </div>
        <p className="pet__card-text">{text}</p>
      </div>
      <div className="ped__card-links">
        <Link
          to={`/pet-project/pets/${id}`}
          className="pet__card-link pet__card-link--left"
        >
          Подробнее
        </Link>
        {isDelitable ? (
          <button
            onClick={deletePetCard}
            className="pet__card-button pet__card-button--right"
          >
            Удалить
          </button>
        ) : (
          <a
            href={`tel:+${phone}`}
            className="pet__card-link pet__card-link--right"
          >
            Позвонить
          </a>
        )}
      </div>
    </div>
  );
}

export { PetCard };

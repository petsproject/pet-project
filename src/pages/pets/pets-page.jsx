import { PetCard } from '../../components/pet-card/pet-card';
import './pets-page.css';

const filters = ['Все животные', 'Кошки', 'Собаки'];

function PetsPage() {
  return (
    <div className="pets">
      <div className="container pets__container">
        <select className="pets__select">
          {filters.map((filter) => (
            <option key={filter} value={filter} className="pets__option">
              {filter}
            </option>
          ))}
        </select>
        <div className="pets__block">
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </div>
      </div>
    </div>
  );
}

export { PetsPage };

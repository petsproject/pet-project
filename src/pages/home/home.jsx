import { Link } from 'react-router-dom';
import linkIcon from '/link.svg';
import dogImage from '/dog.png';
import catImage from '/cat.png';
import './home.css';

function Home() {
  const isAuth = false;
  return (
    <div className="home">
      <div className="container home__container">
        <div className="home__block">
          <h1 className="home__title">
            Найди нового питомца и забери его из приюта
          </h1>
          <Link to="/pets" className="home__link">
            Посмотреть питомцев
            <img src={linkIcon} className="home__link-img" />
          </Link>
          {isAuth ? null : (
            <>
              <p className="home__text">Вы владеете приютом?</p>
              <p className="home__text">
                Зарегистрируйте его на нашем сайте и сможете выкладывать
                объявления, чтобы найти животным новый дом.
              </p>
              <Link to="/register" className="home__link">
                Регистрация
                <img src={linkIcon} className="home__link-img" />
              </Link>
            </>
          )}
        </div>
        <div className="home__image-block">
          <img src={catImage} className="home__image home__image--small" />
          <img src={dogImage} className="home__image" />
        </div>
      </div>
    </div>
  );
}

export { Home };

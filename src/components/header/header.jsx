import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.svg';
import './header.css';

const menuText = {
  default: 'Открыть меню',
  active: 'Закрыть меню',
};

const navigationClass = {
  default: 'header__navigation',
  active: 'header__navigation header__navigation--active',
};

function Header() {
  const isAuth = false;
  const [buttonText, setButtonText] = useState(menuText.default);
  const [navClass, setNavClass] = useState(navigationClass.default);

  function toggleMenu() {
    if (buttonText === menuText.default) {
      setButtonText(menuText.active);
      setNavClass(navigationClass.active);
    } else {
      setButtonText(menuText.default);
      setNavClass(navigationClass.default);
    }
  }

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/pet-project/" className="logo">
          <img src={logo} className="header__image" />
        </Link>
        <button
          onClick={toggleMenu}
          className="header__button header__button--menu"
        >
          {buttonText}
        </button>
        <nav className={navClass}>
          <Link to="/pet-project/" className="header__link header__link--menu">
            Главная
          </Link>
          <Link to="/pet-project/pets" className="header__link">
            Посмотреть животных
          </Link>
          {isAuth ? (
            <>
              <Link to="/pet-project/pets/add" className="header__link">
                Добавить объявление
              </Link>
              <Link to="/pet-project/pets/shelter" className="header__link">
                Животные приюта
              </Link>
              <button className="header__button header__button--logout">
                Выйти
              </button>
            </>
          ) : (
            <Link to="/pet-project/register" className="header__link">
              Зарегистрировать приют
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export { Header };

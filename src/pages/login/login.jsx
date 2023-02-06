import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CustomButton } from '../../components/custom-button/custom-button';
import { CustomInput } from '../../components/custom-input/custom-input';
import './login.css';

function Login() {
  const isAuth = false;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isAuth) {
    return <Navigate to="/pet-project/" />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Авторизация');
  }

  return (
    <div className="login">
      <div className="container">
        <div className="form__block">
          <form onSubmit={handleSubmit} className="form">
            <CustomInput
              value={email}
              setValue={setEmail}
              placeholder="E-mail"
            />
            <CustomInput
              value={password}
              setValue={setPassword}
              placeholder="Пароль"
            />
            <CustomButton text="Авторизоваться" />
          </form>
          <h4 className="form__title">Не зарегистрированы?</h4>
          <Link to="/pet-project/register" className="form__link">
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
}
export { Login };

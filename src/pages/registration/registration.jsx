import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CustomButton } from '../../components/custom-button/custom-button';
import { CustomInput } from '../../components/custom-input/custom-input';
import './registration.css';

function Registration() {
  const isAuth = false;
  const [email, setEmail] = useState('');
  const [shelterName, setShelterName] = useState('');
  const [shelterAddress, setShelterAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  if (isAuth) {
    return <Navigate to="/" />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Регистрация');
  }

  return (
    <div className="registration">
      <div className="container">
        <div className="form__block">
          <form onSubmit={handleSubmit} className="form">
            <CustomInput
              value={email}
              setValue={setEmail}
              placeholder="E-mail"
            />
            <CustomInput
              value={shelterName}
              setValue={setShelterName}
              placeholder="Название приюта"
            />
            <CustomInput
              value={shelterAddress}
              setValue={setShelterAddress}
              placeholder="Адрес приюта"
            />
            <CustomInput
              value={phone}
              setValue={setPhone}
              placeholder="Номер телефона"
            />
            <CustomInput
              value={password}
              setValue={setPassword}
              placeholder="Пароль"
            />
            <CustomButton text="Зарегистрироваться" />
          </form>
          <h4 className="form__title">Уже зарегистрированы?</h4>
          <Link to="/login" className="form__link">
            Авторизация
          </Link>
        </div>
      </div>
    </div>
  );
}
export { Registration };

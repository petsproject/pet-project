import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CustomButton } from '../../components/custom-button/custom-button';
import { CustomInput } from '../../components/custom-input/custom-input';
import { CustomSelect } from '../../components/custom-select/custom-select';
import { CustomTextarea } from '../../components/custom-textarea/custom-textarea';
import './pet-creating.css';

function PetCreating() {
  const isAuth = false;
  const [name, setName] = useState('');
  const [pet, setPet] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [gender, setGender] = useState('');

  if (!isAuth) {
    return <Navigate to="/pet-project/" />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Создание обьяввления');
  }
  return (
    <div className="editor">
      <div className="container">
        <div className="form__block">
          <form onSubmit={handleSubmit} className="form">
            <CustomInput value={name} setValue={setName} placeholder="Кличка" />
            <CustomInput
              value={pet}
              setValue={setPet}
              placeholder="Вид животного"
            />
            <CustomSelect
              value={gender}
              setValue={setGender}
              options={['Мальчик', 'Девочка']}
            />
            <CustomInput
              value={shortDescription}
              setValue={setShortDescription}
              placeholder="Краткое описание"
            />
            <CustomTextarea
              value={description}
              setValue={setDescription}
              placeholder="Описание"
            />
            <CustomInput
              value={imageUrl}
              setValue={setImageUrl}
              placeholder="Фотография"
              type="file"
            />
            <CustomButton text="Добавить" />
          </form>
        </div>
      </div>
    </div>
  );
}

export { PetCreating };

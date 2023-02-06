import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { PetCreating } from './pages/pet-creating/pet-creating';
import { PetsPage } from './pages/pets/pets-page';
import { Registration } from './pages/registration/registration';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/pet-project/" element={<Home />} />
        <Route path="/pet-project/pets" element={<PetsPage />} />
        <Route path="/pet-project/register" element={<Registration />} />
        <Route path="/pet-project/login" element={<Login />} />
        <Route path="/pet-project/pets/add" element={<PetCreating />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

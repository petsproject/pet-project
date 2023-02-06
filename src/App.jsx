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
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pets/add" element={<PetCreating />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

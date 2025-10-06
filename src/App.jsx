import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import EmployeeManagement from './pages/EmployeeManagement';
import Footer from './components/Footer';
import { WelcomeProvider } from './context/WelcomeContext';



function App() {

  return (
    <WelcomeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeManagement />} />
        </Routes>
        <Footer />
      </Router>
    </WelcomeProvider>

  )
}

export default App

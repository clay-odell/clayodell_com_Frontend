
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteRouter from './SiteRouter';
import NavBar from './NavBar';
function App() {
  

  return (
    <>
      <Router>
      <NavBar />
        <SiteRouter />
      </Router>
    </>
  )
}

export default App

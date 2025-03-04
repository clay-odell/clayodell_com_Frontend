import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import Experience from './Experience';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

const SiteRouter = () => {

    return (

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default SiteRouter;
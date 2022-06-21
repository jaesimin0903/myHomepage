
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Navbar, Container, NavDropdown, Card} from 'react-bootstrap';

import Navigation from './components/navigation.js';
import Introduction from './components/introduction';
import Stack from './components/stack.js';
import Project from './components/project.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <Stack />
      <Project />
      
    
    </div>
  );
}

export default App;

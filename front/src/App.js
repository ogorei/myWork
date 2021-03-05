import React from 'react';
import './Styles/CardStyle.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Footer from './components/Footer';
import Homepage from './pages/Home.jsx';
import About from './pages/About';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
 constructor(props) {
   super(props);
   //state of navbar
   this.state={
     title:'Reina N.Suzuki',
     //content needed for the nav bar 
     headerLinks:[
       {title: 'Home', path: '/'},
       {title: 'About', path: '/about'},
       {title: 'Contact', path: '/contact'}
      ],
      //top level information for each page below

      home:{
        title: 'Designing Tomorrow',
        substitle: 'Projects that make a difference',
        description: 'プロジェクトを確認する'
      },

      about:{
        title: 'About Me',
        substitle: 'Projects that make a difference',
      },

      contact: {
        title: 'Get In Touch',
        substitle: 'Projects that make a difference',
      }

   };
 }
 
  render() {
   return(
     <Router>
     <Container fluid={true}>
     <Navbar className="top-nav">
     <Navbar.Brand>Reina Suzuki</Navbar.Brand>
     <Navbar.Toggle className="border-0"></Navbar.Toggle>
     <Navbar.Collapse id="navbar-toggle">

     <Nav className="ml-auto">
     <Link className="nav-link" to="/">Home</Link>
     <Link className="nav-link" to="/about">About</Link>
     <Link className="nav-link" to="/contact">Contact</Link>
     </Nav>
     </Navbar.Collapse>
     </Navbar>

     <Switch>
     <Route path="/" exact render={()=> <Homepage title={this.state.home.title} subtitle={this.state.home.substitle} description={this.state.home.description}/>}></Route>
     <Route path="/About" exact render={()=> <About title={this.state.about.title}/>}></Route>
     <Route path="/Contact" exact render={()=> <Contact title={this.state.contact.title}/>}></Route>
     </Switch>
     <Footer />
     </Container>

     </Router>
   )
 }
}

export default App;

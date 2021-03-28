import React from 'react';
import './Styles/CardStyle.css';
import {Route, Link, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Footer from './components/Footer';
import Homepage from './pages/Home.jsx';
import Projects from './pages/Projects';
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
       {title: 'Projects', path: '/projects'},
       {title: 'Contact', path: '/contact'}
      ],
      //top level information for each page below

      home:{
        title: 'Designing Tomorrow',
        subtitle: 'Projects that make a difference',
        description: 'プロジェクトを確認する'
      },

      projects:{
        title: 'Projects',
        subtitle: 'Projects that make a difference',
      },

      contact: {
        title: 'Get In Touch',
        subtitle: 'Projects that make a difference',
      }

   };
 }
 
  render() {
   return(
     <div>
     <Container fluid={true}>
     <Navbar className="top-nav">
     <Navbar.Brand>Reina Suzuki</Navbar.Brand>
     <Navbar.Toggle className="border-0"></Navbar.Toggle>
     <Navbar.Collapse id="navbar-toggle">

     <Nav className="ml-auto">
     <Link className="nav-link" to="/">Home</Link>
     <Link className="nav-link" to="/projects">Projects</Link>
     <Link className="nav-link" to="/contact">Contact</Link>
     </Nav>
     </Navbar.Collapse>
     </Navbar>

     <Switch>
     <Route path="/" exact render={()=> <Homepage title={this.state.home.title} subtitle={this.state.home.subtitle} description={this.state.home.description}/>}></Route>
     <Route path="/Projects" exact render={()=> <Projects title={this.state.projects.title} subtitle={this.state.projects.subtitle}/>}></Route>
     <Route path="/Contact" exact render={()=> <Contact title={this.state.contact.title} subtitle={this.state.contact.subtitle}/>}></Route>
     </Switch>
     <Footer />
     </Container>

     </div>
   )
 }
}

export default App;

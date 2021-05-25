import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Footer from './components/footer';
import { CourseProvider } from './data';
import Courses from './courses';
import Nav from './components/nav';
import Linking from './linking';
import './styles/details.css';

const App = () => {
    return (
      <Router>
        <CourseProvider>
          <Switch>
          <div className="App">
                <Nav />
                <Route path="/" exact component={ Courses } />
                <Route path="/:id" component={ Linking } />
                <Footer />
          </div>
          </Switch>
        </CourseProvider>
      </Router>
    );
}

export default App;
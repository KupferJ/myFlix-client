import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';

//import for Bootstrap
import Container from 'react-bootstrap/Container';


//import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

//main component(will use all others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container id="main-cont" >
        <MainView />
      </Container>
    );
  }
}

//finds roof of the app
const container = document.getElementsByClassName('app-container')[0];

//tells React to render the app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
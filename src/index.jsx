import React from 'react';
import ReactDOM from 'react-dom';

//import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

//main component(will use all others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <div className="my-flix">
        <div>Good morning</div>
      </div>
    );
  }
}

//finds roof of the app
const container = document.getElementsByClassName('app-container')[0];

//tells React to render the app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
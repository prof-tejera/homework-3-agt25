import { Component } from 'react';
import MediaButtons from 'MediaButtons/MediaButtons';
import LoginForm from 'LoginForm/LoginForm';
import Pager from 'Pager/Pager';
import RadioButtons from 'RadioButtons/RadioButtons';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <div className="App-component">
          <header className="App-header">
            Media Buttons Component (Example)
          </header>
          <div className="App-content">
            <MediaButtons />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Login form component</header>
          <div className="App-content">
            <LoginForm />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Pager component</header>
          <div className="App-content">
            <Pager pages={11}/>
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Radio Buttons component</header>
          <div className="App-content">
            <RadioButtons options={[
                ['Apple', false], 
                ['Pear', false], 
                ['Oranges', false],
                ['Beets', true]
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import './MediaButtons.css';


class MediaButtons extends Component {

  handleClick = (e) => {
    console.log(`${e.target.innerHTML} has been clicked`);
  }

  render() {
    return (
      <Panel height="auto" width="auto">
        <Button text="Rewind" onClick={this.handleClick} />
        <Button text="Fast Forward" onClick={this.handleClick} />
        <Button text="Play" onClick={this.handleClick} color="green"/>
        <Button text="Stop" onClick={this.handleClick} color="red"/>
        <Button type="Rounded-button" onClick={this.handleClick} color="white"
                background="green"  
                width="200" height="100" 
                fontSize="20px" text="Test">    
        </Button>
      </Panel>
    );
  }
}

export default MediaButtons;

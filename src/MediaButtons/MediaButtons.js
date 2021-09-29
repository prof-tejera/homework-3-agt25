import { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import './MediaButtons.css';

class MediaButtons extends Component {
  render() {
    return (
      <Panel height="auto" width="auto">
        <Button text="Rewind" onClick={() => {}} />
        <Button text="Fast Forward" onClick={() => {}} />
        <Button text="Play" onClick={() => {}} color="green"/>
        <Button text="Stop" onClick={() => {}} color="red"/>

        <Button type="Rounded-button" background="green" color="white" 
                width="200" height="100" 
                fontSize="20px" text="Test">    
        </Button>
      </Panel>
    );
  }
}

export default MediaButtons;

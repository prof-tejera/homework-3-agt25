import { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { type, color, background, height, width, fontSize, text } = this.props; 
    const style = {
      color: color, 
      background: background,
      height: height,
      width: width, 
      fontSize: fontSize
    }
    
    return (
    
    <button style={style} className={`Default-button ${type}`}>{text}</button>
    )
  }
}

export default Button;

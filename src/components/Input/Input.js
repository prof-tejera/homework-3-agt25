import { Component } from 'react';
import './Input.css';

class Input extends Component {
    render() {
        const { type, placeholder } = this.props; 
        return (
            <input
                className="default-input"
                placeholder={placeholder}
                type={type}
                autoComplete="off"/>
        );
    }
}

export default Input;

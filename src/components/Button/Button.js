import {Component} from 'react';
import './Button.css';


class Button extends Component {

    render() {
        const {
            selected,
            type,
            color,
            background,
            height,
            width,
            fontSize,
            text,
            disabled,
        } = this.props;

        const style = {
            color: color,
            background: background,
            height: height,
            width: width,
            fontSize: fontSize
        }

        return (

          <button
              onClick={(e) => {
                  this.props.onClick(e);
              }}
              disabled={disabled}
              style={style}
              className={`Default-button ${selected} ${type}`}>
                {text}
          </button>
        )

    }
}

export default Button;

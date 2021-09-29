import React, {Component} from 'react';
import './Panel.css';

class Panel extends Component {
    render() {
      const { height, width, backgroundColor } = this.props; 
      const style = {
        height: height, 
        width: width, 
        background: backgroundColor
      }
      return (<div style={style} className="panel-container">{this.props.children}</div>);
    }
}

export default Panel;

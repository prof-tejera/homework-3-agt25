import {Component} from 'react';
import './RadioButtons.css';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';


class RadioButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedButton: null
        }
    }

    buttonSelected = selectedButton => ev => {
        this.setState({selectedButton})
    }

    render() {

        const { options } = this.props;

        return (
            <div>
                <Panel>
                    <div>
                        {
                          options.map((item, i) => (
                              <span key={i}>
                                  <Button key={i} text={item} 
                                          selected={i === this.state.selectedButton ? 'selected': ''}
                                          onClick={this.buttonSelected(i)}
                                          disabled={item[1]}/>
                              </span>
                          ))
                        }
                    </div>
                </Panel>
            </div>
        )
    }
}

export default RadioButtons;

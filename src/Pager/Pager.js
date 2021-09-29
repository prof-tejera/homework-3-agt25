import {Component} from 'react';
import './Pager.css';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

class Pager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedButton: 1,
            currentPage: 0,
            backwardsDisabled: true
        }
    }

    buttonSelected = selectedButton => ev => {
        this.setState({selectedButton})
    }
    pageChange = currentPage => ev => {
        this.setState({currentPage})
    }

    render() {
        const {pages} = this.props;
        const buttons = [];

        for (let i = 1; i <= pages; i++) {
            buttons.push(
                <Button
                    key={i}
                    text={i}
                    type="Rounded-button"
                    selected={i === this.state.selectedButton
                        ? 'selected'
                        : ''}
                    width="45px"
                    height="45px"
                    background="none"
                    onClick={this.buttonSelected(i)}/>
            )
        }

        return (
        <div>
            <Panel height="25">
                <Button
                    type="Round-button"
                    text="<"
                    onClick={this.pageChange(this.state.currentPage - 3)}/>

                  {buttons[this.state.currentPage]}
                  {buttons[this.state.currentPage + 1]}
                  {buttons[this.state.currentPage + 2]}

                <Button
                      type="Round-button"
                      text=">" onClick={this.pageChange(this.state.currentPage + 3)}/>
            </Panel>

        </div>

        )
    }
}

export default Pager;
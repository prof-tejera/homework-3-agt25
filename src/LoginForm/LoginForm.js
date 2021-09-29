import {Component} from 'react';
import './LoginForm.css';
import Panel from 'components/Panel/Panel';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

class LoginForm extends Component {

  handleClick = (e) => {
      
    console.log('Submit event!');

  }
    render() {
        return (
            <div className="login-form-container">
                <Panel width="60%" height="100%">
                  
                    <form>
                        <Input type="username" placeholder="Username"></Input>
                        <div>
                            <Input type="password" placeholder="Password"></Input>
                        </div>
                    </form>

                    <Button
                        type="Rounded-button"
                        background="black"
                        color="white"
                        width="55%"
                        height="20%"
                        fontSize="1rem"
                        text="Login" onClick={this.handleClick}></Button>

                    <div>
                        <p>Not registered?
                            <span> <a href="void(0);">
                                Create an account</a>
                            </span>
                        </p>
                    </div>

                </Panel>

            </div>
        )
    }
}

export default LoginForm;

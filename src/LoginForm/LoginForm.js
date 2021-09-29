import {Component} from 'react';
import './LoginForm.css';
import Panel from 'components/Panel/Panel';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

class LoginForm extends Component {
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
                        text="Login"></Button>

                  
                        <div>
                        <p>Not registered?
                           
                            
                        <a href=";"> Create an account</a>
                        </p>
                     
                        </div>
                    
                </Panel>

            </div>
        )
    }
}

export default LoginForm;

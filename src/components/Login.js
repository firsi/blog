import React from 'react';
import './login-register.css';
class Login extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
    }
    render(){
        return <div className="auth-container">
                <h1 className="title">Sign In And Get Started</h1>
                <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" className="form-control" placeholder="Enter your email" value={this.state.email} onChange={this.handleChange} name="email" />

                    <input type="password" className="form-control" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange} name="password" />
                </form>
        </div>
    }
}

export default Login;
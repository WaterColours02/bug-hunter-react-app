import PropTypes from 'prop-types';
import React from 'react';

class Login extends React.Component {
    render() {


        return (
            <nav className="login">
            <h2>Login</h2>
            <p>Please login to view your projects</p>
            <button className="github" onClick={() => this.props.authenticate('Github') }>
                    Login with Github
                </button>

                <button className="google" onClick={() => this.props.authenticate('Google') }>
                    Login with Google
                </button>

            </nav>
        )
    }

}

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default Login;
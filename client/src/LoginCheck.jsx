import React from 'react'


import PropTypes from 'prop-types'

function LoginCheck(props) {
    const isLoggedIn = true; // Replace with your login check logic

        const welcomeMessage = <p>
                                Welcome! You are logged in.
                                </p>

        const loginMessage = <p>
                            Please log in.
                            </p>

        return(
            <div>
            {props.isLoggedIn ? welcomeMessage : loginMessage}
            </div>
            );
}

LoginCheck.propTypes = {
    isLoggedIn: PropTypes.bool
}

LoginCheck.defaultProps = {
    isLoggedIn: false
}

export default LoginCheck;
import React from 'react';
import { Alert } from 'react-bootstrap';

class Banner extends React.Component {
    state = {
        show: true
    }

    setShow = () => 
        this.setState({
            show: false
        })

    render() {
        return (
            this.state.show ? <>
                <Alert className="login-alert" variant="warning" onClose={() => this.setShow()} dismissible>
                        <p>
                            For testing purposes login using <b>test@test.com</b> and the password <b>gethired</b>. Please limit deleting jobs so that others can also test functionality.
                        </p>
                    </Alert>
                    </> : ''
        )
    }
}

export default Banner;
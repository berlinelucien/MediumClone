import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default function ( Conmponent) {
    class Authenticate extends Component {

        componentWillMount() {
            if (!this.props.isAuth) {
                this.context.router.history.push('/')
            }
        }
        render () {
            return(
                <Conmponent {...this.props} />
            )
        }
    }
    Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    }
    const mapStateToProps = state => {
        return {
            isAuth: state.authUser.isAuth
        }
    }
    return connect(mapStateToProps)(Authenticate)
}

/**
 * You see here, we tap into our app redux store using the connect function react-redux, we get the state slice isAuth. This isAuth will be set to true if the user is logged. componentDidMount checks for truthy isAuth and pushes / to the navigation history to redirect the user if he/she is not logged in, therefore the render method will not be called.
 */




/**
 * Authenticate routes
Here, we are going to secure our app, this prevents users from accessing pages without being registered.
In this app, we are only going to secure the /editor route. That is, you have to be registered and logged in inorder to write an article.
To auth our /editor route, we are going to create a component Authenticate, this component will be able to get the isAuth state from our app store to deduce whether to render the Editor compnent sent to it.
 */
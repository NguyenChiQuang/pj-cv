import React from 'react';
import { Redirect} from 'react-router-dom';
import LocalStorage from '../../utils/LocalStorage';
import permissions from '../../config/permissions';
import Page403 from '../errors/Page403';

class PrivateRoute extends React.Component {
    constructor (props) {
        super(props)

        let session = LocalStorage.get()
        this.state = {
            hasPermission: this.hasPermission(session),
            session: session
        }
    }

    hasPermission = (session) => {
        if(!session) return false;
        const userPermissions = session.user.permissions;
        let path = this.props.path;
        let hasPermission = false;
        if(permissions[path] === undefined || session.user.is_sadmin) {
            hasPermission = true;
        } else {
            for(let i in userPermissions) {
                if(i.trim() === '') continue;
                if(permissions[path].indexOf(i) > -1) {
                    hasPermission = true;
                    break;
                }
            }
        }

        return hasPermission
    }

    render () {
        let self = this;
        if(!sessionStorage.getItem("logged") || !this.state.session) {
            return <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: self.props.location }
                        }}
                    />;
        } else {
            if(this.state.hasPermission) {
                let Component = this.props.component
                return (
                    <Component session={this.state.session} {...this.props} />
                )
            } else {
                return (
                    <Page403 />
                )
            }
        }
    }
}

export default PrivateRoute;
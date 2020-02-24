// Higher Order Component (HOC) - A component that renders another component
// Reuse Code
// Render hijacking
// Prop manipulation
// Abstract state


console.log('test');

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share.</p>}
            <WrappedComponent {...props} />
        </div>
    )

}

const requireAuthetication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You are not logged in</p>}
        </div>
    )
}



const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthetication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info='There are some details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='There are some details' />, document.getElementById('app'));

//Higher Order Component --> A component(HOC) That renders Another Component 
// Reuse Code
// Render Hijacking



import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props) =>(
    <div>
        <h1>Info</h1>
        <p>The Info Is:{props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) =>{
    return (props)  => (
        <div>
           {props.isAdmin && <p>This is Private Info. Please Don't Share</p>}
            <WrappedComponent {...props}/> 
        </div>
    )
}   

//Require Authentication
const requireAuthentication = (WrappedComponent) => {
    return (props) =>(
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please Login</p>)}
        </div>
    )
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="example" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="example" />,document.getElementById('app'));
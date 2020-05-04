import React, { useContext } from "react";
import { Context } from "../store/appcontext";

const Login = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
             <div className="body">
                < div className="container">

                    {
                        !!store.errors && (
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <strong>Error!!</strong> {store.errors.msg}
                                        <button onClick={actions.deleteErrors} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h1>Login</h1>
                            <form onSubmit={e => actions.login(e, props.history)}>

                                <div className="form-group">
                                    <label htmlFor="Email1">Email address</label>
                                    <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Enter email" name="email"
                                        value={store.email}
                                        onChange={actions.handleChange} />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Password1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password"
                                        value={store.password}
                                        onChange={actions.handleChange} />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
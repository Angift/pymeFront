import React, { useContext} from "react";
import { Context } from "../store/appcontext";

const ChangePassword = props => {
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
                    {
                        !!store.success && (
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Huena!!</strong> {store.success.success}
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
                            <h1>Change Password</h1>
                            <form onSubmit={e => actions.changePassword(e, props.history)}>
                                <div className="form-group">
                                    <label htmlFor="password">Password Actual</label>
                                    <input type="password" className="form-control" id="oldpassword" placeholder="Old Password" name="oldpassword"
                                        value={store.oldpassword}
                                        onChange={actions.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password Nuevo</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" name="password"
                                        value={store.password}
                                        onChange={actions.handleChange} />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Change Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword;
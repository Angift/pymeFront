import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Context } from '../store/appcontext';

const Navbar = props => {
    const { store, actions } = useContext(Context);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand text-success" to="/">pymeDash</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    {
                        store.currentUser == null && (
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                        )
                    }
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {store.currentUser !== null ? store.currentUser.user.email : "Usuario"}
                        </a>                        
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            {
                                store.currentUser !== null ? (
                                    <>
                                        <Link className="dropdown-item" to="/scorecard">Scorecard</Link>
                                        <Link className="dropdown-item" to="/change-password">Change Password</Link>
                                        <div className="dropdown-divider"></div>
                                        <form onSubmit={e => actions.logout(props.history)}>
                                            <button type="submit" className="dropdown-item">       
                                            Logout  
                                            </button>
                                        </form>

                                    </>
                                ) : (
                                        <>
                                            <Link className="dropdown-item" to="/login">Login</Link>
                                            <Link className="dropdown-item" to="/register">Registrarse</Link>
                                        </>
                                    )
                            }
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);
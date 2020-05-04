import React, { useContext } from 'react';
import { Context } from '../store/appcontext';

const Contact = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="body">
            <div className="container">
                {
                    !!store.errors && (
                        <div className="row">
                            <div className="col-md-12">
                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Error!</strong> {store.errors.msg}
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
                                    <strong>Success!</strong> {store.success.success}
                                    <button onClick={e => actions.deleteErrors(props.history)} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1>Contact</h1>
                        <form onSubmit={e => actions.sendEmail(e, props.history)}>
                            <div className="form-group">
                                <label htmlFor="contact_name">Nombre</label>
                                <input type="text" className="form-control" id="contact_name" name="contact_name"
                                    value={store.contact_name}
                                    onChange={actions.handleChange}
                                    placeholder="Escribe tu nombre" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email1">Email</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" id="contact_email" name="contact_email"
                                    value={store.contact_email}
                                    onChange={actions.handleChange}
                                    placeholder="Escribe tu email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact_message">En que te podemos ayudar</label>
                                <textarea className="form-control" id="contact_message" name="contact_message"
                                    onChange={actions.handleChange} placeholder="Mensaje" rows="5" value={store.contact_message} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Contact</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
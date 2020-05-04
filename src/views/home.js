import { Link, Route } from "react-router-dom";
import React, { useContext} from "react";
import { Context } from '../store/appcontext';
import BepImg from "../img/BEP.jpg";
import RenneLogo from "../img/Renne-2.jpg";
import JardinLogo from "../img/Jardin.jpg";
import GringosLogo from "../img/Gringos.jpg";
import BrusellsLogo from "../img/Brussells.jpg";
import SuziLogo from "../img/Suzi.jpg";
import MagiaLogo from "../img/MyC.jpg";
import Carousel from "../component/carosuel"

const Home = props => {  
    const { store } = useContext(Context);    
    console.log(store.visitors)
    return (
        <>        
            <div className="body">
                {/* <!-- Page Content --> */}
                <div className="container">

                    {/* <!-- Image Header --> */}
                    <div className="mt-4 mb-3">
                        <img className="img-fluid rounded mb-4" src={BepImg} alt="" />
                    </div>

                    {/* <!-- TESTIMONIAL SECTION--> */}
                    <section className="mt-4 mb-3" id="testimonial" >
                        <Route exact path="/" component={Carousel} />
                    </section>
                    {/* <!-- Marketing Icons Section --> */}
                    <h4>Partners</h4>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <h5 className="card-header">Steward</h5>
                                <div className="card-body">
                                    <p className="card-text">Especialistas, inscribite en pymeDash y disfruta los convenios exclusivos para nuestros asociados</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/login" className="btn btn-primary">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <h5 className="card-header">Todo Saldos</h5>
                                <div className="card-body">
                                    <p className="card-text">Especialistas, inscribite en pymeDash y disfruta los convenios exclusivos para nuestros asociados</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/login" className="btn btn-primary">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <h5 className="card-header">Supermaq</h5>
                                <div className="card-body">
                                    <p className="card-text">Especialistas, inscribite en pymeDash y disfruta los convenios exclusivos para nuestros asociados</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/login" className="btn btn-primary">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.row --> */}

                    {/* <!-- Our Customers --> */}
                    <h4>Nuestros Clientes</h4>
                    <div className="row">
                        <div className="col-lg-2 col-sm-4 mb-4">
                            <img className="img-fluid" src={MagiaLogo} alt="" width="80" />
                        </div>
                        <div className="col-lg-2 col-sm-4 mb-4">
                            <img className="img-fluid" src={JardinLogo} alt="" width="80" />
                        </div>
                        <div className="col-lg-2 col-sm-4 mb-4">
                            <img className="img-fluid" src={RenneLogo} alt="" width="80" />
                        </div>
                        <div className="col-lg-2 col-sm-4 mb-4">
                            <img className="img-fluid" src={GringosLogo} alt="" width="80" />
                        </div>
                        <div className="col-lg-2 col-sm-4 mb-4">
                            <img className="img-fluid" src={BrusellsLogo} alt="" width="80" />
                        </div>
                        <div className="col-lg-2 col-sm-4 mb-4">
                            <img className="img-fluid" src={SuziLogo} alt="" width="80" />
                        </div>
                    </div>
                    {/* <!-- /.row --> */}
                    <div className="row d-flex justify-content-center">
                        <div className="hitcounter">                         
                           <span className="middle center">Visitas &nbsp; {store.visitors.counter}</span>                                                         
                        </div>
                    </div>


                </div>
                {/* <!-- /.container --> */}
            </div>
        </>
    )
}

export default Home;  
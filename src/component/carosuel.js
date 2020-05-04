import React from "react";
import GringosLogo from "../img/Gringos.jpg";
import BrusellsLogo from "../img/Brussells.jpg";
import SuziLogo from "../img/Suzi.jpg";

const Carousel = props => {

    return (
        <>
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container col-5">
                                    <div className="justify-content-center">                                    
                                        <h4><i className="fa fa-quote-left"></i>&nbsp;
                                            No podria vivir sin <strong className="text-success">pymeDash</strong>, foto instantanea de los numeros de mi empresa&nbsp; 
                                            <i className="fa fa-quote-right"></i>
                                        </h4>
                                        <div className="float-right">
                                            <img src={BrusellsLogo} alt="" className="img-u image-responsive img-circle" width="70"/>
                                        </div>
                                        <h5 className="float-right"><strong className="c-set" >CEO Brusells</strong></h5>
                                    </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container col-5">
                            <div className="justify-content-center">                                    
                                <h4><i className="fa fa-quote-left"></i>&nbsp;
                                    <strong className="text-success">pymeDash</strong> simplemente genial, podemos plantear objetivos de marketing intantaneos&nbsp; 
                                    <i className="fa fa-quote-right"></i>
                                </h4>
                                <div className="float-right">
                                    <img src={GringosLogo} alt="" className="img-u image-responsive img-circle" width="70"/>
                                </div>
                                    <h5 className="float-right"><strong className="c-set" >CMO Gringos</strong></h5>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container col-5">
                                <div className="justify-content-center">                                    
                                    <h4><i className="fa fa-quote-left"></i>&nbsp;
                                        Cuando viajas a 200 km/hr <strong className="text-success">pymeDash</strong> es tu mejor aliado &nbsp; 
                                        <i className="fa fa-quote-right"></i>
                                    </h4>
                                    <div className="float-right">
                                        <img src={SuziLogo} alt="" className="img-u image-responsive img-circle" width="70"/>
                                    </div>
                                        <h5 className="float-right"><strong className="c-set" >CEO Suzi Santiago</strong></h5>
                                </div>
                        </div>
                    </div>
                </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
            </div>
        </div>
        </>
    )
}

export default Carousel;
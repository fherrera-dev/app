import React, { Component } from 'react';
import axios from 'axios';
import imgSlot from '../assets/img-perezosos-sloth-filivora.jpg';
import imgKayak from '../assets/img-tour-kayak.jpg';
import imgRafting from '../assets/img-tour-rapidos-rafting.jpg';
import imgHots from '../assets/img-tour-termales-hotsprinig.jpg';
import imgCararata from '../assets/img-tour-catarata-waterfall.jpg';
import imgPedal from '../assets/img-tour-peddling.jpg';
class Home extends Component {

    /*componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data=>{
            console.log(data);
        })
    }*/

    //imgSlot = require("./assets/imgSlot.jpg").default;
    
    state = {  } 
    render() { 
        return (
            <main class='container'>
               
            <div class="row row-cols-1 row-cols-md-3 margen">
                <div class="col mb-4 card-tour">
                    <img src={imgSlot} />
                    <div class="card-body">
                        <h6 class="card-title">Sloth Tour</h6>
                        <p class="card-text"><small class="text-muted">Includes transpor, entrance and Meal, tour guide</small></p>
                        
                        {/* nuevo cod */}
                        <div>
                            <a><h4>SEE INFO...</h4></a>
                        </div>

                        <div class="tour-book">
                            <div class="section-book">
                                <a class="btn btn-success btn-book">Book</a>
                            </div>


                            <div class="section-price">
                            <a class="btn btn-danger btn-price"><strong>$50</strong></a>
                            </div>

                        </div>
                    
                    </div>
                </div>
                <div class="col mb-4 card-tour">
                <img src={imgKayak} />
                    <div class="card-body">
                        <h6 class="card-title">Kayaking Tour</h6>
                        <p class="card-text"><small class="text-muted">Includes transpor, entrance and Meal, tour guide</small></p>
                    
                        <div>
                            <a><h4>SEE INFO...</h4></a>
                        </div>

                        <div class="tour-book">
                            <div class="section-book">
                                <a class="btn btn-success btn-book">Book</a>
                            </div>


                            <div class="section-price">
                            <a class="btn btn-danger btn-price"><strong>$60</strong></a>
                            </div>

                        </div>
                    
                    </div>
                </div>
                <div class="col mb-4 card-tour">
                <img src={imgRafting} />
                    <div class="card-body">
                        <h6 class="card-title">Tour Rafting class 2 and 3</h6>
                        <p class="card-text"><small class="text-muted">Includes transpor, entrance and Meal, profesional tour guide</small></p>

                        <div>
                            <a><h4>SEE INFO...</h4></a>
                        </div>

                        <div class="tour-book">
                            <div class="section-book">
                                <a class="btn btn-success btn-book">Book</a>
                            </div>

                            <div class="section-price">
                            <a class="btn btn-danger btn-price"><strong>$100</strong></a>
                            </div>

                        </div>

                    </div>
                </div>
            
           
                <div class="col mb-4 card-tour">
                    <img src={imgHots} />
                    <div class="card-body">
                        <h6 class="card-title">Hot Springs Paradise</h6>
                        <p class="card-text"><small class="text-muted">Includes transpor, entrance and Meal</small></p>
                    
                        <div>
                            <a><h4>SEE INFO...</h4></a>
                        </div>

                        <div class="tour-book">
                            <div class="section-book">
                                <a class="btn btn-success btn-book">Book</a>
                            </div>

                            <div class="section-price">
                            <a class="btn btn-danger btn-price"><strong>$40</strong></a>
                            </div>

                        </div>
                    
                    </div>
                </div>
                <div class="col mb-4 card-tour">
                <img src={imgCararata} />
                    <div class="card-body">
                        <h6 class="card-title">Tour Waterfall</h6>
                        <p class="card-text"><small class="text-muted">Includes transpor, entrance and Meal, tour guide</small></p>
                    
                        <div>
                            <a><h4>SEE INFO...</h4></a>
                        </div>

                        <div class="tour-book">
                            <div class="section-book">
                                <a class="btn btn-success btn-book">Book</a>
                            </div>

                            <div class="section-price">
                            <a class="btn btn-danger btn-price"><strong>$55</strong></a>
                            </div>

                        </div>
                    
                    </div>
                </div>
                <div class="col mb-4 card-tour">
                <img src={imgPedal} />
                    <div class="card-body">
                        <h6 class="card-title">Tour Stand Up Paddling</h6>
                        <p class="card-text"><small class="text-muted">Includes transpor, entrance and Meal, tour guide</small></p>
                    
                        <div>
                            <a><h4>SEE INFO...</h4></a>
                        </div>

                        <div class="tour-book">
                            <div class="section-book">
                                <a class="btn btn-success btn-book">Book</a>
                            </div>

                            <div class="section-price">
                            <a class="btn btn-danger btn-price"><strong>$75</strong></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            </main>
        );
    }
}
 
export default Home;
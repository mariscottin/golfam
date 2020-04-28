import React, { Component } from 'react';

import './HomeFooter.css';

class HomeFooter extends Component {
    render(){
        return(
            <div className="App-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <p>Contactanos</p>
                        </div>
                        <div className="col-lg-4">
                            <p>Golfam&reg; 2020</p>
                        </div>
                        <div className="col-lg-4">
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeFooter;
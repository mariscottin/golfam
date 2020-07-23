import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import cnsiLogo from '../../../../assets/img/cnsi-logo.png'
import Scorecard from './Scorecard';
import './ScorecardsModule.css';

const ScorecardsModule = ({ scorecards }) => {
    return (
        <div className="scorecards-module__container">
            <div className="scorecards-module__header">
                <div className="scorecards-module__img-holder">
                    <img src={cnsiLogo} alt="CNSI logo" />
                </div>
                <div className="scorecards-module__username">
                    <h2>Nicolas Mariscotti</h2>
                    <p>Club Nautico San Isidro</p>
                </div>
            </div>
            <div className="scorecards-module__info">
                <div className="scorecards-module__info-body">
                    <div className="scorecards-module__last-tournament">
                        <p className="date">{scorecards[0].date}</p>
                        <h5>{scorecards[0].torneo} - {scorecards[0].modalidad}</h5>
                    </div>
                    <button className="btn btn-primary btn-sm">Ver Leaderboard</button>
                    <div className="scorecards-module__filters">
                        <div className="select-year">
                            <select>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                            </select>
                        </div>
                        <div className="select-tournament">
                            <select>
                                <option>Sweepstake - Medal Play - 08/02/2020</option>
                                <option>Torneo los Patos - Medal Play - 01/02/2020</option>
                                <option>Sweepstake - Medal Play - 23/01/2020</option>
                                <option>Yo le Gané A... - Laguneada - 11/01/2020</option>
                                <option>Gran Premiemio CNSI - Medal Play - 02/01/2020</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scorecards-module__scorecard-container">
                <h3 className="scorecard-club">Club Nautico San Isidro</h3>
                <Scorecard />
            </div>
            <div className="scorecards-module__tournament-info-container">
                <div className="info-row">
                    <div className="hcp-item">
                        <div className="value">5</div>
                        <div className="denotation">hcp</div>
                    </div>
                    <div className="sc-item">
                        <div className="value">65</div>
                        <div className="denotation">neto</div>
                    </div>
                </div>
                <div className="tournament-position">
                    <div className="value"><FontAwesomeIcon icon={faTrophy}/></div>
                    <div className="denotation">Posición</div>
                </div>
            </div>
        </div>
    )
}

export default ScorecardsModule;
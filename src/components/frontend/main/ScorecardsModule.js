import React from 'react';
import Scorecard from './Scorecard';
import './Main.css';

const ScorecardsModule = ({user}) => {
    return(
    <div className="Main-scorecards-module">
        <div className="player-scorecards-header">
            <div className="scorecards-header-container">
                <img src={user.profileImg} alt="profile-img" className="scorecards-profile-img"/>
                <div className="scorecards-player-info">
                    <span className="scorecards-player-name">{user.name} {user.lastName}</span>
                    <span className="scorecards-player-club">{user.club}</span>
                </div>
            </div>
        </div>
        <div className="player-scorecards-head">
            {/* THIS SHOULD BE DYNAMIC FETCHED FROM DB */}
            <span className="date">Ultimo torneo jugado el: 01/03/2020</span>
            <div>
                <h4 className="tournament-title">Sweepstake - Medal Play</h4>
                <span className="btn btn-sm btn-primary view-leaderboard-btn">Ver Leaderboard</span>
            </div> 
            <div className="player-scorecards-controls">
                <div className="select-container container">
                    <div className="row">
                        <div className="year-select col-lg-1">
                            <div>
                                <select>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                </select>
                            </div>
                        </div>
                        <div className="tournament-select col-lg-11">
                            <div>
                                <select>
                                    <option value="0000">Sweepstake - Medal Play - 01/03/2020</option>
                                    <option value="12345">Torneo las Gaviotas - Medal Play - 20/02/2020</option>
                                    <option value="6789">Torneo los Tiburones - Fourball Americana - 06/02/2020</option>
                                    <option value="1011">Torneo las Piedras - Laguneada - 08/01/2020</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="player-scorecards-container">
            <div className="table-item-head">
                <span className="table-heading">
                    Club Nautico San Isidro
                </span>
            </div>
            <div className="table-item">
                <div>
                    <Scorecard />
                </div>
            </div>
        </div>
    </div>
    )
}

export default ScorecardsModule;
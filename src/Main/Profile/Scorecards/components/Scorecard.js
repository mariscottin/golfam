import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Table from 'react-bootstrap/Table'

import './Scorecard.css';

const Scorecard = () => {
    return (
        <div className="scorecard">
            <div className="scorecard-title">
                <Table striped bordered>
                    <thead>
                        <tr><th>Hoyo</th></tr>
                        <tr><th>Par</th></tr>
                        <tr><th>Score</th></tr>
                        <tr><th>Status</th></tr>
                    </thead>
                </Table>
            </div>
            {window.screen.width < 980 ?
                <div className="scorecard-content">
                    <Carousel interval={null} wrap={true}>
                        <Carousel.Item>
                            <Table striped bordered responsive>
                                <thead>
                                    <tr>
                                        <th><div>1</div></th>
                                        <th><div>2</div></th>
                                        <th><div>3</div></th>
                                        <th><div>4</div></th>
                                        <th><div>5</div></th>
                                        <th><div>6</div></th>
                                        <th><div>7</div></th>
                                        <th><div>8</div></th>
                                        <th><div>9</div></th>
                                        <th><div>IDA</div></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><div>4</div></td>
                                        <td><div>3</div></td>
                                        <td><div>4</div></td>
                                        <td><div>4</div></td>
                                        <td><div>4</div></td>
                                        <td><div>5</div></td>
                                        <td><div>4</div></td>
                                        <td><div>3</div></td>
                                        <td><div>4</div></td>
                                        <td><div>35</div></td>
                                    </tr>
                                    <tr>
                                        <td className="birdie"><div>3</div></td>
                                        <td className="d-bogey"><div>5</div></td>
                                        <td className="birdie"><div>3</div></td>
                                        <td className="par"><div>4</div></td>
                                        <td className="par"><div>4</div></td>
                                        <td className="birdie"><div>4</div></td>
                                        <td className="bogey"><div>5</div></td>
                                        <td className="bogey"><div>4</div></td>
                                        <td className="par"><div>4</div></td>
                                        <td><div>36</div></td>
                                    </tr>
                                    <tr>
                                        <td><div>-1</div></td>
                                        <td><div>+1</div></td>
                                        <td><div>0</div></td>
                                        <td><div>0</div></td>
                                        <td><div>0</div></td>
                                        <td><div>-1</div></td>
                                        <td><div>0</div></td>
                                        <td><div>+1</div></td>
                                        <td><div>+1</div></td>
                                        <td><div>+1</div></td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Table striped bordered responsive>
                                <thead>
                                    <tr>
                                        <th><div>10</div></th>
                                        <th><div>11</div></th>
                                        <th><div>12</div></th>
                                        <th><div>13</div></th>
                                        <th><div>14</div></th>
                                        <th><div>15</div></th>
                                        <th><div>16</div></th>
                                        <th><div>17</div></th>
                                        <th><div>18</div></th>
                                        <th><div>VTA</div></th>
                                        <th><div>TOT</div></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><div>4</div></td>
                                        <td><div>4</div></td>
                                        <td><div>5</div></td>
                                        <td><div>4</div></td>
                                        <td><div>3</div></td>
                                        <td><div>5</div></td>
                                        <td><div>4</div></td>
                                        <td><div>3</div></td>
                                        <td><div>4</div></td>
                                        <td><div>36</div></td>
                                        <td><div>71</div></td>
                                    </tr>
                                    <tr>
                                        <td className="par"><div>4</div></td>
                                        <td className="par"><div>4</div></td>
                                        <td className="eagle"><div>3</div></td>
                                        <td className="par"><div>4</div></td>
                                        <td className="par"><div>3</div></td>
                                        <td className="par"><div>5</div></td>
                                        <td className="par"><div>4</div></td>
                                        <td className="bogey"><div>4</div></td>
                                        <td className="birdie"><div>3</div></td>
                                        <td><div>34</div></td>
                                        <td><div>70</div></td>
                                    </tr>
                                    <tr>
                                        <td><div>+1</div></td>
                                        <td><div>+1</div></td>
                                        <td><div>-1</div></td>
                                        <td><div>-1</div></td>
                                        <td><div>-1</div></td>
                                        <td><div>-1</div></td>
                                        <td><div>-1</div></td>
                                        <td><div>0</div></td>
                                        <td><div>-1</div></td>
                                        <td><div>-2</div></td>
                                        <td><div>-1</div></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Carousel.Item>
                    </Carousel>
                </div>
                :
                <div className="scorecard-content">
                    <Table striped bordered responsive>
                        <thead>
                            <tr>
                                <th><div>1</div></th>
                                <th><div>2</div></th>
                                <th><div>3</div></th>
                                <th><div>4</div></th>
                                <th><div>5</div></th>
                                <th><div>6</div></th>
                                <th><div>7</div></th>
                                <th><div>8</div></th>
                                <th><div>9</div></th>
                                <th><div>IDA</div></th>
                                <th><div>10</div></th>
                                <th><div>11</div></th>
                                <th><div>12</div></th>
                                <th><div>13</div></th>
                                <th><div>14</div></th>
                                <th><div>15</div></th>
                                <th><div>16</div></th>
                                <th><div>17</div></th>
                                <th><div>18</div></th>
                                <th><div>VTA</div></th>
                                <th><div>TOT</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><div>4</div></td>
                                <td><div>3</div></td>
                                <td><div>4</div></td>
                                <td><div>4</div></td>
                                <td><div>4</div></td>
                                <td><div>5</div></td>
                                <td><div>4</div></td>
                                <td><div>3</div></td>
                                <td><div>4</div></td>
                                <td><div>35</div></td>
                                <td><div>4</div></td>
                                <td><div>4</div></td>
                                <td><div>5</div></td>
                                <td><div>4</div></td>
                                <td><div>3</div></td>
                                <td><div>5</div></td>
                                <td><div>4</div></td>
                                <td><div>3</div></td>
                                <td><div>4</div></td>
                                <td><div>36</div></td>
                                <td><div>71</div></td>
                            </tr>
                            <tr>
                                <td className="birdie"><div>3</div></td>
                                <td className="d-bogey"><div>5</div></td>
                                <td className="birdie"><div>3</div></td>
                                <td className="par"><div>4</div></td>
                                <td className="par"><div>4</div></td>
                                <td className="birdie"><div>4</div></td>
                                <td className="bogey"><div>5</div></td>
                                <td className="bogey"><div>4</div></td>
                                <td className="par"><div>4</div></td>
                                <td><div>36</div></td>
                                <td className="par"><div>4</div></td>
                                <td className="par"><div>4</div></td>
                                <td className="eagle"><div>3</div></td>
                                <td className="par"><div>4</div></td>
                                <td className="par"><div>3</div></td>
                                <td className="par"><div>5</div></td>
                                <td className="par"><div>4</div></td>
                                <td className="bogey"><div>4</div></td>
                                <td className="birdie"><div>3</div></td>
                                <td><div>34</div></td>
                                <td><div>70</div></td>
                            </tr>
                            <tr>
                                <td><div>-1</div></td>
                                <td><div>+1</div></td>
                                <td><div>0</div></td>
                                <td><div>0</div></td>
                                <td><div>0</div></td>
                                <td><div>-1</div></td>
                                <td><div>0</div></td>
                                <td><div>+1</div></td>
                                <td><div>+1</div></td>
                                <td><div>+1</div></td>
                                <td><div>+1</div></td>
                                <td><div>+1</div></td>
                                <td><div>-1</div></td>
                                <td><div>-1</div></td>
                                <td><div>-1</div></td>
                                <td><div>-1</div></td>
                                <td><div>-1</div></td>
                                <td><div>0</div></td>
                                <td><div>-1</div></td>
                                <td><div>-2</div></td>
                                <td><div>-1</div></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            }




        </div>
    )
}

export default Scorecard;
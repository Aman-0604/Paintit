import React from 'react';
import Board from './Board';

import "../styles/home.css";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5"
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    render() {

        return (
            <>
                <div className="container board-field">
                    <div className="board-holder">
                        <Board color={this.state.color} size={this.state.size}></Board>
                    </div>
                </div>
                <div className="tools-field">
                    <div className="tools-section d-flex justify-content-center align-items-center">
                        <div className="color-picker-feature d-flex justify-content-center align-items-center">
                            Select Brush Color : &nbsp;
                            <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)} />
                        </div>
                        <div className="brushsize-feature">
                            Select Brush Size : &nbsp;
                            <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                                <option> 5 </option>
                                <option> 10 </option>
                                <option> 15 </option>
                                <option> 20 </option>
                                <option> 25 </option>
                                <option> 30 </option>
                            </select>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home



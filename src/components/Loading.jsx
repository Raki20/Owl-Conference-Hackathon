import React, { Component } from "react";
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animations/loading-spinner.json';


class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };
    }

    render () {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return (
            <Lottie
                options={defaultOptions}
                height={100}
                width={100}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
            />
        );
    }
}

export default Loading;

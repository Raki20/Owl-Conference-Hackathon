import React from "react";
import Lottie from 'react-lottie';
import animationData from '../../assets/animations/loading-spinner.json';


const Loading = () => {
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
            height={300}
            width={300}
        />
    );
};

export default Loading;

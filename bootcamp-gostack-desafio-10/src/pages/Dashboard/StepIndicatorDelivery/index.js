import React from 'react';
import StepIndicator from 'react-native-step-indicator';
import PropTypes from 'prop-types';

const labels = ['Aguardando\nRetirada', 'Retirada', 'Entregue'];
const customStyles = {
    stepIndicatorSize: 20,
    currentStepIndicatorSize: 22,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#7d40e7',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#7d40e7',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#7d40e7',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#7d40e7',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#7d40e7',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#7d40e7',
};

export default function StepIndicatorDelivery({ position }) {
    return (
        <StepIndicator
            customStyles={customStyles}
            stepCount={3}
            currentPosition={position}
            labels={labels}
        />
    );
}

StepIndicatorDelivery.propTypes = {
    position: PropTypes.number.isRequired,
};

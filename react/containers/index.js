import React from 'react';
import { Navigator } from 'react-native';
import Caculator from './Caculator';

const Container = ({ navigator }) => <Caculator navigator={navigator} />;

Container.propTypes = {
  navigator: React.PropTypes.instanceOf(Navigator).isRequired,
};

export default Container;

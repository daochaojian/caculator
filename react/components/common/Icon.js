import React from 'react';
import { Path } from 'react-native-svg';
import SvgIcon from 'react-native-svg-icon';

/* eslint-disable max-len */
const svgs = {
  angleLeft: {
    svg: <Path d="M.324 7.208l6.79-6.88c.43-.437 1.13-.437 1.562 0 .432.438.432 1.147 0 1.585L2.67 8l6.006 6.087c.43.438.43 1.147 0 1.585-.432.437-1.132.437-1.564 0l-6.79-6.88C.11 8.572 0 8.287 0 8c0-.287.108-.573.324-.792z" />,
    viewBox: '0 0 9 16',
  },
  angleRight: {
    svg: <Path d="M8.676 7.208L1.886.328C1.456-.11.756-.11.326.328c-.433.438-.433 1.147 0 1.585L6.33 8 .325 14.087c-.43.438-.43 1.147 0 1.585.432.437 1.132.437 1.564 0l6.79-6.88C8.89 8.572 9 8.287 9 8c0-.287-.108-.573-.324-.792z" />,
    viewBox: '0 0 9 16',
  },
};
/* eslint-enable max-len */

const Icon = props => <SvgIcon {...props} svgs={svgs} />;

Icon.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Icon;

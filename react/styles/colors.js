const colors = {
  /**
   * css named colors
   */
  transparent: 'transparent',
  white: 'white',
  black: 'black',

  /**
   * opacity
   */
  alphaWhite: alpha => `rgba(255, 255, 255, ${alpha})`,
  alphaBlack: alpha => `rgba(0, 0, 0, ${alpha})`,

  /**
   * theme colors
   */
  themeBlack: '#414141',
  themeLightBlack: '#8e8e8e',
  themeDarkGray: '#bababa',
  themeDarkerGray: '#7b7b7b',
  themeGray: '#e8e8e8',
  themeLightGray: '#f8f8f8',
  themeLighterGray: '#9b9b9b',
  themeGreen: '#7eb982',
  themeDarkGreen: '#00c9a1',
  themeDarkerGreen: '#D1E9D4',
  themeLightGreen: '#50c14e',
  themeLighterGreen: '#e0efe2',
  themeAquaGreen: '#48d2a0',
  themeLightAquaGreen: '#6ddbb3',
  themeBottleGreen: '#417505',
  themeBlue: '#17b7e7',
  themeLightBlue: '#5093e1',
  themeLighterBlue: '#82DDFF',
  themeDarkBlue: '#323544',
  themeDarkerBlue: '#0085c7',
  themeRed: '#ff5062',
  themeRedPink: '#FC7671',
  themeOrange: '#f6a623',
  themeLightOrange: '#8bc34a',
  themePink: '#f65177',
  themeOrchid: '#dcafea',
};

export default colors;

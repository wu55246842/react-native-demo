import * as React from 'react';
import { Rect, Svg, Text } from 'react-native-svg';
import type { ISvgProps } from '../../global';

const LogoDark = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={137} height={25.489} {...props}>
    <Text x="10" y="10" font-family="Arial" font-size="48" fill="white">YOUR LOGO</Text>
    
    <Rect x="60" y="10" width="30" height="15" fill="black" />
  </Svg>
);

export default LogoDark;

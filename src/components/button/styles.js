/* eslint-disable no-nested-ternary */
import styled from 'styled-components/native';

import { colors, fonts, type, sizes } from '../../theme';

export const Container = styled.View`
  height: ${sizes.buttonHeight}px;
  background: transparent;
  position: relative;
  margin: 5px 0;
  opacity: 1;
`;

export const Touchable = styled.TouchableOpacity`
  height: 50px;
  background: ${(props) => props.color || colors.blue};
  opacity: ${(props) => (props.isDisabled ? '0.2' : '1')};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 20px;
`;

export const Text = styled.Text`
  color: ${(props) => (props.isDisabled ? colors.white : colors.white)};
  font-family: '${fonts.title}';
  font-size: ${type.body}px;
`;

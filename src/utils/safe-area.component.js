import {StatusBar, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
  ${StatusBar.currentHeight && 'margintop:{StatusBar.currentHeight}px'}
`;

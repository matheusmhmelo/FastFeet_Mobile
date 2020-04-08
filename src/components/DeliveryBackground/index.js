import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Platform } from 'react-native';

const BackgroundIos = styled.View`
  background: #7d40e7;
  height: 190px;
`;

const BackgrounAndroid = styled(LinearGradient).attrs({
  colors: ['#7d40e7', '#fff'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.4 },
})`
  height: 190px;
  flex: 1;
`;

export default Platform.OS === 'ios' ? BackgroundIos : BackgrounAndroid;

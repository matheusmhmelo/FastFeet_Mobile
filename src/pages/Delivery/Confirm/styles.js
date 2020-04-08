import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';

import Button from '~/components/Button';

const fullHeight = Dimensions.get('window').height - 300;

export const Container = styled.SafeAreaView`
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${fullHeight}px;
`;

export const Camera = styled(RNCamera)`
  border-radius: 4px;
  height: 100%;
`;

export const CameraView = styled.View`
  display: flex;
  margin: 80px 15px 0 15px;
  border-radius: 4px;
  height: 100%;
`;

export const CameraButton = styled(Button)`
  margin: 15px 15px;
  background-color: #7d40e7;
`;

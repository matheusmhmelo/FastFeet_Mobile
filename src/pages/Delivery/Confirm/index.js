import React, { useRef } from 'react';
import { TouchableOpacity, Alert, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { RNCamera } from 'react-native-camera';

import Icon from 'react-native-vector-icons/MaterialIcons';

import DeliveryBackground from '~/components/DeliveryBackground';

import api from '~/services/api';

import { Container, CameraView, Camera, CameraButton } from './styles';

export default function Confirm({ navigation }) {
  const delivery_id = navigation.getParam('delivery_id');
  const profile = useSelector((state) => state.user.profile);

  const imageRef = useRef();

  async function takePicture() {
    const camera = imageRef.current;
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);

      if (data.uri) {
        const file = new FormData();
        file.append('file', {
          name: data.uri,
          type: 'image/jpeg',
          uri: data.uri,
        });

        try {
          const response = await api.post('signature', file);

          if (response.data) {
            await api.put(`delivery/${delivery_id}/end`, {
              deliveryman_id: profile.id,
              signature_id: response.data.id,
            });

            Alert.alert('Entrega finalizada com sucesso!');
            navigation.navigate('Dashboard');
          }
        } catch (err) {
          Alert.alert('Erro ao finalizar a entrega!');
        }
      }
    }
  }

  return (
    <DeliveryBackground>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Container>
        <CameraView>
          <Camera
            ref={imageRef}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.auto}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            captureAudio={false}
          />
        </CameraView>

        <CameraButton onPress={takePicture}>Enviar</CameraButton>
      </Container>
    </DeliveryBackground>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar Entrega',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

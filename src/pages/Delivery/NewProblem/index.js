import React, { useState } from 'react';
import { TouchableOpacity, Alert, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import DeliveryBackground from '~/components/DeliveryBackground';

import api from '~/services/api';

import { Container, Description, SendButton } from './styles';

export default function NewProblem({ navigation }) {
  const delivery_id = navigation.getParam('delivery_id');
  const [description, setDescription] = useState('');

  async function handleSendProblem() {
    try {
      await api.post(`delivery/${delivery_id}/problems`, {
        description,
      });

      Alert.alert('Problema registrado com sucesso!');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Erro no registro do problema! Verifique os dados.');
    }
  }

  return (
    <DeliveryBackground>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Container>
        <Description
          multiline
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          placeholderTextColor="#999999"
          returnKeyType="send"
          maxLength={255}
          value={description}
          onChangeText={setDescription}
          onSubmitEditing={handleSendProblem}
        />
        <SendButton onPress={handleSendProblem}>Enviar</SendButton>
      </Container>
    </DeliveryBackground>
  );
}

NewProblem.navigationOptions = ({ navigation }) => ({
  title: 'Informar Problema',
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

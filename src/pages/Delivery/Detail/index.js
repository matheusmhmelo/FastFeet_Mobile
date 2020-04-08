import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Alert, StatusBar } from 'react-native';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import DeliveryBackground from '~/components/DeliveryBackground';

import {
  Container,
  DeliveryInfo,
  DeliveryTitle,
  DeliveryTitleText,
  Info,
  InfoTitle,
  InfoText,
  InfoRow,
  DetailActions,
  Action,
  ActionText,
} from './styles';

export default function Detail({ navigation }) {
  const delivery = navigation.getParam('data');
  const profile = useSelector((state) => state.user.profile);

  let deliveryStatus = 'Pendente';
  if (delivery.end_date) {
    deliveryStatus = 'Entregue';
  } else if (delivery.start_date) {
    deliveryStatus = 'Retirada';
  }

  const startDateFormatted = delivery.start_date
    ? useMemo(
        () =>
          format(parseISO(delivery.start_date), "dd' / 'MM' / 'yyyy", {
            locale: pt,
          }),
        [delivery]
      )
    : '-- / -- / --';

  const endDateFormatted = delivery.end_date
    ? useMemo(
        () =>
          format(parseISO(delivery.end_date), "dd' / 'MM' / 'yyyy", {
            locale: pt,
          }),
        [delivery]
      )
    : '-- / -- / --';

  async function handleStartDelivery() {
    try {
      await api.put(`delivery/${delivery.id}/start`, {
        deliveryman_id: profile.id,
      });

      Alert.alert('Entrega iniciada com sucesso!');
      navigation.navigate('Dashboard');
    } catch (err) {
      Alert.alert(
        'Você só pode fazer 5 retiradas por dia, no horário das 8:00 às 18:00!'
      );
    }
  }

  return (
    <DeliveryBackground>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Container>
        <DeliveryInfo>
          <DeliveryTitle>
            <Icon name="local-shipping" size={24} color="#7D40E7" />
            <DeliveryTitleText>Informações da entrega</DeliveryTitleText>
          </DeliveryTitle>

          <Info>
            <InfoTitle>DESTINATÁRIO</InfoTitle>
            <InfoText>{delivery.recipient.name}</InfoText>
          </Info>
          <Info>
            <InfoTitle>ENDEREÇO DE ENTREGA</InfoTitle>
            <InfoText>
              {delivery.recipient.address}, {delivery.recipient.number},{' '}
              {delivery.recipient.city} - {delivery.recipient.state},{' '}
              {delivery.recipient.zipcode}
            </InfoText>
          </Info>
          <Info>
            <InfoTitle>PRODUTO</InfoTitle>
            <InfoText>{delivery.product}</InfoText>
          </Info>
        </DeliveryInfo>

        <DeliveryInfo>
          <DeliveryTitle>
            <Icon name="event" size={24} color="#7D40E7" />
            <DeliveryTitleText>Situação da entrega</DeliveryTitleText>
          </DeliveryTitle>

          <Info>
            <InfoTitle>STATUS</InfoTitle>
            <InfoText>{deliveryStatus}</InfoText>
          </Info>
          <InfoRow>
            <Info>
              <InfoTitle>DATA DE RETIRADA</InfoTitle>
              <InfoText>{startDateFormatted}</InfoText>
            </Info>
            <Info>
              <InfoTitle>DATA DE ENTREGA</InfoTitle>
              <InfoText>{endDateFormatted}</InfoText>
            </Info>
          </InfoRow>
        </DeliveryInfo>

        <DetailActions>
          <Action
            onPress={() =>
              navigation.navigate('NewProblem', { delivery_id: delivery.id })
            }
          >
            <Icon name="highlight-off" size={24} color="#E74040" />
            <ActionText>Informar Problema</ActionText>
          </Action>
          <Action
            onPress={() => navigation.navigate('ViewProblem', { delivery })}
          >
            <Icon name="error-outline" size={24} color="#E7BA40" />
            <ActionText>Visualizar Problemas</ActionText>
          </Action>
          {deliveryStatus === 'Pendente' && (
            <Action onPress={handleStartDelivery}>
              <Icon name="play-circle-outline" size={24} color="#7D40E7" />
              <ActionText>Retirar Entrega</ActionText>
            </Action>
          )}
          {deliveryStatus === 'Retirada' && (
            <Action
              onPress={() =>
                navigation.navigate('Confirm', { delivery_id: delivery.id })
              }
            >
              <Icon name="check" size={24} color="#7D40E7" />
              <ActionText>Confirmar Entrega</ActionText>
            </Action>
          )}
        </DetailActions>
      </Container>
    </DeliveryBackground>
  );
}

Detail.navigationOptions = ({ navigation }) => ({
  title: 'Detalhes da encomenda',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

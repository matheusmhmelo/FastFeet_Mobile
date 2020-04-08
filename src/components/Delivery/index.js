import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  DeliveryTitle,
  DeliveryTitleText,
  LineStatus,
  BaseLine,
  Status,
  StatusText,
  DetailsContent,
  Detail,
  DetailTitle,
  DetailText,
  DetailButton,
  DetailButtonText,
} from './styles';

export default function Delivery({ navigation, data }) {
  const date = data.end_date || data.start_date || data.createdAt;
  const dateFormatted = useMemo(
    () =>
      format(parseISO(date), "dd'/'MM'/'yyyy", {
        locale: pt,
      }),
    [data]
  );

  return (
    <Container>
      <DeliveryTitle>
        <Icon name="local-shipping" size={24} color="#7D40E7" />
        <DeliveryTitleText>{data.product}</DeliveryTitleText>
      </DeliveryTitle>

      <LineStatus>
        <BaseLine />
        <Status active={data.createdAt}>
          <StatusText>Aguardando retirada</StatusText>
        </Status>
        <Status active={data.start_date}>
          <StatusText>Retirada</StatusText>
        </Status>
        <Status active={data.end_date}>
          <StatusText>Entregue</StatusText>
        </Status>
      </LineStatus>

      <DetailsContent>
        <Detail>
          <DetailTitle>Data</DetailTitle>
          <DetailText>{dateFormatted}</DetailText>
        </Detail>
        <Detail>
          <DetailTitle>Cidade</DetailTitle>
          <DetailText>{data.recipient.city}</DetailText>
        </Detail>
        <DetailButton onPress={() => navigation.navigate('Detail', { data })}>
          <DetailButtonText>Ver detalhes</DetailButtonText>
        </DetailButton>
      </DetailsContent>
    </Container>
  );
}

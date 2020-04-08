import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { signOut } from '~/store/modules/auth/actions';

import AvatarIcon from '~/components/AvatarIcon';

import '~/global';

import {
  Container,
  Info,
  InfoTitle,
  InfoText,
  LogoutButton,
  AvatarView,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const profile_image = profile.avatar
    ? profile.avatar.url.replace('localhost', global.host)
    : '';

  const dateFormatted = useMemo(
    () =>
      format(parseISO(profile.createdAt), "dd'/'MM'/'yyyy", {
        locale: pt,
      }),
    [profile.created_at]
  );

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <AvatarView>
        {profile.avatar ? (
          <AvatarIcon size={180} source={{ uri: profile_image }} />
        ) : (
          <AvatarIcon size={180} icon={{ name: 'person', color: '#A28FD0' }} />
        )}
      </AvatarView>

      <Info>
        <InfoTitle>Nome Completo</InfoTitle>
        <InfoText>{profile.name}</InfoText>
      </Info>

      <Info>
        <InfoTitle>Email</InfoTitle>
        <InfoText>{profile.email}</InfoText>
      </Info>

      <Info>
        <InfoTitle>Data de Cadastro</InfoTitle>
        <InfoText>{dateFormatted}</InfoText>
      </Info>

      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" size={20} color={tintColor} />
  ),
};

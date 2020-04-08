import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';

import api from '~/services/api';

import AvatarIcon from '~/components/AvatarIcon';
import Delivery from '~/components/Delivery';

import {
  Container,
  HeaderContent,
  Welcome,
  WelcomeText,
  WelcomeName,
  Logout,
  HeaderItems,
  ListTitle,
  ListFilter,
  FilterOption,
  FilterText,
  DeliveryList,
} from './styles';

function Dashboard({ navigation, isFocused }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const [selected, setSelected] = useState('pendentes');
  const [delivery, setDelivery] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      let url = `deliveryman/${profile.id}/deliveries`;
      if (selected === 'pendentes') {
        url = `delivery/${profile.id}`;
      }

      const response = await api.get(url);

      setDelivery(response.data);
    }

    loadDeliveries();
  }, [selected, isFocused]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <HeaderContent>
        {profile.avatar ? (
          <AvatarIcon size={70} source={{ uri: profile.avatar.url }} />
        ) : (
          <AvatarIcon size={70} icon={{ name: 'person', color: '#A28FD0' }} />
        )}

        <Welcome>
          <WelcomeText>Bem vindo de volta,</WelcomeText>
          <WelcomeName>{profile.name}</WelcomeName>
        </Welcome>

        <Logout>
          <Icon
            size={30}
            name="exit-to-app"
            color="#E74040"
            onPress={handleLogout}
          />
        </Logout>
      </HeaderContent>

      <HeaderItems>
        <ListTitle>Entregas</ListTitle>
        <ListFilter>
          <FilterOption
            selected={selected === 'pendentes'}
            onPress={() => setSelected('pendentes')}
          >
            <FilterText selected={selected === 'pendentes'}>
              Pendentes
            </FilterText>
          </FilterOption>
          <FilterOption
            selected={selected === 'entregues'}
            onPress={() => setSelected('entregues')}
          >
            <FilterText selected={selected === 'entregues'}>
              Entregues
            </FilterText>
          </FilterOption>
        </ListFilter>
      </HeaderItems>

      <DeliveryList
        data={delivery}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Delivery data={item} navigation={navigation} />
        )}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);

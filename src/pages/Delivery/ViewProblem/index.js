import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import DeliveryBackground from '~/components/DeliveryBackground';

import api from '~/services/api';

import {
  Container,
  ProblemsText,
  ProlemsView,
  ProblemsList,
  ProblemDescription,
  Problem,
  Description,
  Date,
  EmptyContent,
  EmptyText,
} from './styles';

export default function ViewProblem({ navigation }) {
  const delivery = navigation.getParam('delivery');
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`delivery/${delivery.id}/problems`);
      setProblems(
        response.data.map((problem) => {
          return {
            ...problem,
            dateFormatted: format(
              parseISO(problem.createdAt),
              "dd'/'MM'/'yyyy",
              {
                locale: pt,
              }
            ),
          };
        })
      );
    }

    loadProblems();
  }, []);

  return (
    <DeliveryBackground>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Container>
        <ProblemsText>{delivery.product}</ProblemsText>

        {problems.length > 0 ? (
          <ProlemsView>
            <ProblemsList
              data={problems}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <Problem>
                  <ProblemDescription>
                    <Description>{item.description}</Description>
                  </ProblemDescription>
                  <Date>{item.dateFormatted}</Date>
                </Problem>
              )}
            />
          </ProlemsView>
        ) : (
          <EmptyContent>
            <EmptyText>Nenhum problema registrado</EmptyText>
          </EmptyContent>
        )}
      </Container>
    </DeliveryBackground>
  );
}

ViewProblem.navigationOptions = ({ navigation }) => ({
  title: 'Visualizar Problemas',
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

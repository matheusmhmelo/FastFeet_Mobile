import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const fullHeight = Dimensions.get('window').height - 240;

export const Container = styled.SafeAreaView`
  margin-top: 100px;
  position: absolute;
  width: 100%;
`;

export const ProblemsText = styled.Text`
  align-self: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

export const ProlemsView = styled.View`
  margin: 0 15px;
`;

export const ProblemsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 5 },
})`
  flex: 1;
  margin-top: 15px;
  max-height: ${fullHeight}px;
`;

export const Problem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px 10px 20px 20px;
  margin-bottom: 15px;
`;

export const ProblemDescription = styled.View`
  max-width: 70%;
`;

export const Description = styled.Text`
  color: #999999;
  font-size: 16px;
`;

export const Date = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
`;

export const EmptyContent = styled.View`
  display: flex;
  align-items: center;
  margin-top: 60px;
`;

export const EmptyText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

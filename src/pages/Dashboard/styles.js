import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 60px 25px 0 25px;
`;

export const HeaderContent = styled.View`
  display: flex;
  flex-direction: row;
`;
export const Welcome = styled.View`
  display: flex;
  margin-top: 18px;
  margin-left: 12px;
`;

export const WelcomeText = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const WelcomeName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const Logout = styled.View`
  flex: 1;
  align-items: flex-end;
  padding-top: 20px;
`;

export const HeaderItems = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

export const ListTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #444444;
`;

export const ListFilter = styled.View`
  display: flex;
  flex-direction: row;
`;

export const FilterOption = styled.TouchableOpacity`
  margin-left: 15px;
  margin-top: 10px;
  ${(props) =>
    props.selected &&
    css`
      border-bottom-color: #7d40e7;
      border-bottom-width: 1px;
    `};
`;

export const FilterText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 3px;
  color: ${(props) => (props.selected ? '#7D40E7' : '#999999')};
`;

export const DeliveryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 5 },
})`
  margin-top: 15px;
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

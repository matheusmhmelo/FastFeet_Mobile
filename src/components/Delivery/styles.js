import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 15px 0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 4px;
`;

export const DeliveryTitle = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 15px;
  margin-top: 10px;
`;

export const DeliveryTitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 10px;
  margin-top: 3px;
`;

export const LineStatus = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 50px 60px 50px;
`;

export const BaseLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: #7d40e7;
  position: absolute;
`;

export const Status = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? '#7d40e7' : '#fff')};
  border: 1px;
  border-color: #7d40e7;
`;

export const StatusText = styled.Text`
  position: absolute;
  align-self: center;
  text-align: center;
  width: 80px;
  margin-top: 15px;
  font-size: 12px;
  color: #999999;
`;

export const DetailsContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f8f9fd;
  padding: 20px;
`;

export const Detail = styled.View`
  margin: 10px 0;
`;

export const DetailTitle = styled.Text`
  font-size: 10px;
  color: #999999;
  font-weight: bold;
`;

export const DetailText = styled.Text`
  font-size: 14px;
  color: #444444;
  font-weight: bold;
`;

export const DetailButton = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const DetailButtonText = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
`;

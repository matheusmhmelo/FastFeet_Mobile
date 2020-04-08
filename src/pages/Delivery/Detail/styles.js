import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 100px 25px 0 25px;
`;

export const DeliveryInfo = styled.View`
  margin-top: 15px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  background: #fff;
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

export const Info = styled.View`
  margin: 10px 15px;
`;

export const InfoTitle = styled.Text`
  font-size: 14px;
  color: #999999;
  font-weight: bold;
`;

export const InfoText = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  color: #666666;
`;

export const InfoRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailActions = styled.View`
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  background: #f8f9fd;
  border-radius: 4px;
  margin-top: 15px;
  height: 90px;
`;

export const Action = styled.TouchableOpacity`
  flex: 1;
  padding: 10px 20px;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  justify-content: center;
  height: 100%;
`;

export const ActionText = styled.Text`
  text-align: center;
  color: #999999;
  font-size: 12px;
  margin-top: 5px;
`;

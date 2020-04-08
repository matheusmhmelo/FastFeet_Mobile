import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  margin: 0 40px;
`;

export const AvatarView = styled.View`
  display: flex;
  align-items: center;
  margin: 50px 0;
`;

export const Info = styled.View`
  margin-bottom: 15px;
`;

export const InfoTitle = styled.Text`
  font-size: 14px;
  color: #666666;
  margin-bottom: 5px;
`;

export const InfoText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #444444;
`;

export const LogoutButton = styled(Button)`
  margin-top: 20px;
  background: #e74040;
`;

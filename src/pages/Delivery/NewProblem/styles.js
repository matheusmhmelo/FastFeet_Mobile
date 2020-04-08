import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 100px 25px 0 25px;
`;

export const Description = styled.TextInput`
  background-color: #fff;
  color: #333;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 300px;
  margin: 20px 0;
  padding: 15px;
`;

export const SendButton = styled(Button)`
  background-color: #7d40e7;
`;

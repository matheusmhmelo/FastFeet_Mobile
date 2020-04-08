import React from 'react';
import { Avatar } from 'react-native-elements';

export default function AvatarIcon({ source, icon, size }) {
  return (
    <Avatar
      size={size}
      rounded
      overlayContainerStyle={{ backgroundColor: '#F4EFFC' }}
      source={source}
      icon={icon}
      onPress={() => {}}
      activeOpacity={1}
    />
  );
}

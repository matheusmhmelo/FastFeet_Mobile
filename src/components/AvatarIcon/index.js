import React from 'react';
import { Platform } from 'react-native';
import { Avatar, Image } from 'react-native-elements';

export default function AvatarIcon({ source, icon, size }) {
  return (
    <>
      {source && Platform.OS === 'android' ? (
        <Image
          style={{ height: size, width: size, borderRadius: size / 2 }}
          source={{
            uri:
              'http://localhost:3333/files/eeb24549fa4ad2da6f8b78a73c5e1e08.jpg',
          }}
        />
      ) : (
        <Avatar
          size={size}
          rounded
          overlayContainerStyle={{ backgroundColor: '#F4EFFC' }}
          source={source}
          icon={icon}
          onPress={() => {}}
          activeOpacity={1}
        />
      )}
    </>
  );
}

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

var UserProfile = ({ username, name, location, avatarUrl }) => {
  return(
    <View>
      <View>
        <Image
          source={ { uri: avatarUrl } }
        />
      </View>
      <View>
        <View>
          <Text>{ `@${username}` }</Text>
          <Text>{ location ? '| ' + location : '' }</Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

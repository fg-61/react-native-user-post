import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import baseManager from '../../api/baseManager';
import UserDetail from '../../components/UserDetail';

const UserDetailScreen = ( {navigation, route} ) => {

  const [user, setUser] = useState([]);
  const { userId } = route.params;

  useEffect(() => {
    getUserById(userId);
  }, []);

  const getUserById = (userId) => {
    baseManager.getEntityById('/users', userId)
      .then((data) => {
        setUser(data);
      })
  };

  return (
    <View style={ { flex: 1 } }>
      <UserDetail  user={user} navigation={navigation} ></UserDetail>
    </View>
  )
}

export default UserDetailScreen
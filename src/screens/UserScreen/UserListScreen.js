import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserList from '../../components/UserList';
import baseManager from '../../api/baseManager';

const UserListScreen = ( {navigation} ) => {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    getUsers();
  }, []);
  
  const getUsers = () => {
    baseManager.getAll('/users')
      .then((data) => {
        setUsers(data);
      })
  };

  return (
    <View style={ { flex: 1 } }>
      <UserList users={users} navigation={navigation}></UserList>
    </View>
  )
}

export default UserListScreen
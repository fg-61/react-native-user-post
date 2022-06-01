import React from 'react'
import UserListScreen from '../screens/UserScreen/UserListScreen';
import UserDetailScreen from '../screens/UserScreen/UserDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const UserPageStack = createNativeStackNavigator();

const UserStackScreen = () => {

    return (

        <UserPageStack.Navigator screenOptions={{ headerShown: false }}>

            <UserPageStack.Screen name="User" component={UserListScreen} />
            <UserPageStack.Screen name="UserDetail" component={UserDetailScreen} />

        </UserPageStack.Navigator>
    )
}

export default UserStackScreen
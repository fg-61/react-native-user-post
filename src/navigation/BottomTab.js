import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UserListScreen from '../screens/UserScreen/UserListScreen';
import PostListScreen from '../screens/PostScreen/PostListScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'users':
                iconName = 'users';
                return <FontAwesome name={iconName} size={size} color={color} />;
              case 'posts':
                iconName = 'list-alt';
                return <FontAwesome name={iconName} size={size} color={color} />;
              default:
                break;
            }
          },
          tabBarActiveTintColor: '#3a35dd',
          tabBarInactiveTintColor: '#183153',
          tabBarShowLabel: false,
          headerShown: false
        })} >
      <Tab.Screen name="users" component={UserListScreen} />
      <Tab.Screen name="posts" component={PostListScreen} />
    </Tab.Navigator>
    </>
  )
}

export default BottomTab
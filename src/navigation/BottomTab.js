import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import PostStackScreen from '../stacks/PostStackScreen';
import UserStackScreen from '../stacks/UserStackScreen';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Users':
                iconName = 'users';
                return <FontAwesome name={iconName} size={size} color={color} />;
              case 'Posts':
                iconName = 'list-alt';
                return <FontAwesome name={iconName} size={size} color={color} />;
              default:
                break;
            }
          },
          tabBarActiveTintColor: '#3498db',
          tabBarActiveBackgroundColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarShowLabel: false,
          headerShown: false
        })} >
        <Tab.Screen name="Users" component={UserStackScreen} />
        <Tab.Screen name="Posts" component={PostStackScreen} />
      </Tab.Navigator>
    </>
  )
}

export default BottomTab
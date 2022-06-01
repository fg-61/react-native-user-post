import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTab from './BottomTab';
import UserDetailScreen from '../screens/UserScreen/UserDetailScreen';
import PostDetailScreen from '../screens/PostScreen/PostDetailScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <SafeAreaView style={{ flex:1 }}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="HomeTabs"
                        component={BottomTab}
                    />
                    <Stack.Screen
                        name="UserDetail"
                        component={UserDetailScreen}
                    />
                    <Stack.Screen
                        name="PostDetail"
                        component={PostDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Router
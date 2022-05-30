import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <SafeAreaView style={{ flex:1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="HomeTabs"
                        component={BottomTab}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Router
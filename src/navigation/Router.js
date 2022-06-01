import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTab from './BottomTab';

const Router = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <BottomTab></BottomTab>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Router
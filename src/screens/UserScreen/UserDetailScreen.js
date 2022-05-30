import { View, Text } from 'react-native'
import React from 'react'

const UserDetailScreen = ( {route} ) => {

    const { userDetails } = route.params;

    return (
    <View>
      <Text>{userDetails.name}</Text>
    </View>
  )
}

export default UserDetailScreen
import { View } from 'react-native'
import React from 'react'
import Router from './src/navigation/Router'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Router></Router>
    </View>
  )
}

export default App
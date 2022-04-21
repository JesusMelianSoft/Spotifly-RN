import { View, Text } from 'react-native'
import React from 'react'

const HomeScreen = ({route, navigation}) => {
  const {user} = route.params;
  console.log("MI USUARIO: ",user);
  return (
    <View>
      <Text>{"Hola!, "+user.email}</Text>
    </View>
  )
}

export default HomeScreen
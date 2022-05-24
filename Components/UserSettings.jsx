import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import React from 'react';
import Navbar from './Navbar';

const UserSettings = ({ route }) => {

  const {user} = route.params;

  return (
    <View style={styles.MainContainer}>

        <View>

        </View>
        <View style={styles.slider}>
            <Slider minimumValue={0} 
            maxValue={1} 
            step={1} 
            thumbTintColor={'#9775CD'} 
            maximumTrackTintColor={'#CE14BC'} 
            minimumTrackTintColor={'#CE14BC'}
            onValueChange={() => setDark(!dark)}/>
        </View>

      <View style={styles.container}>
        
        <View style={styles.TextContainerFirst}>
          <Text>Nombre: {route.given_nane}</Text>
        </View>

        <View style={styles.TextContainer}>
          <Text>Apellidos: {route.family_name}</Text>
        </View>

        <View style={styles.TextContainer}>
          <Text>Email: {route.email}</Text>
        </View>

        <View style={styles.TextContainer}>
          <Text>Numero de PlayList: {route.}</Text>
        </View>

        <View style={styles.TextContainer}>
          <Text>Canciones que me gustan: {route.}</Text>
        </View>

        <View style={styles.TextContainerLast}>
          <Text>Versión: 1.2.123 </Text>
        </View>

      </View>

      <Navbar/>

    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: "#FEEFFE",
    fontSize: 32,
    width: "90%",
    height: "65%",
    borderWidth: 1,
    borderColor: "#AF16C8",
    borderRadius: 10,
    marginBottom: "10%",
  },
  TextContainerFirst: { 
    marginTop: "7%",
    marginLeft: "7%",
  },
  TextContainer: {
    marginTop: "17%",
    marginLeft: "7%",
  },
  TextContainerLast: {
    marginTop: "13%",
    marginLeft: "60%",
    width: "30%",
  },
  slider: {
    position: "relative",
    width: '20%',
    height: 20,
    right: -100,
    borderColor: '#9775CD', 
    borderWidth: 1,
    borderRadius: 10,
    marginTop: "10%",
    marginBottom: "10%",

  },
  
})
export default UserSettings
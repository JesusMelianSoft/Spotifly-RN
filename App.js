import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '244439246283-kla7jccifhs8iekmg0nusd5h2iqqh1dd.apps.googleusercontent.com',
});

export default function App() {

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
    } catch (error) {
      console.log("MY ERROR",error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("El usuario ha cancelado");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("SIGUE CARGANDO")
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("HAY QUE ACTUALIZAR EL GOOGLE PLAy")
      } else {
        console.log(" Ha ocurrido un error inesperado")
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button
      title="Google Sign-In"
      onPress={() => signIn()}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

const ButtonGoogle = ({signIn}) => {
  return (
        <TouchableOpacity onPress={() => {signIn()}}>
          <View style={styles.buttonGoogle}>
            <Image
            source={require('../assets/images/ico-google.png')} //Change your icon image here
            style={styles.ImageStyle} />

            <Text style={styles.textGoogle}>Entrar con Google</Text>
          </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonGoogle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center'
  },
  textGoogle: {
    fontWeight: 'bold',
    fontSize: 12
  },
  ImageStyle: {
    width: 30,
    height: 30,
  }
})
export default ButtonGoogle
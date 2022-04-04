import { Button, View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import InputText from './InputText'
import ButtonGoogle from './ButtonGoogle';
import Slider from '@react-native-community/slider';

const Login = ({setLogin, signInGoogle}) => {
    const [dark, setDark] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeEmail = (email) => {
        setEmail(email);
    }

    const changePass = (pass) => {
      setPassword(pass);
  }
  return (
    
    <View style={styles.input}>
      <View style={styles.slider}>
        <Slider minimumValue={0} 
        maxValue={1} 
        step={1} 
        thumbTintColor={'#9775CD'} 
        maximumTrackTintColor={'#CE14BC'} 
        minimumTrackTintColor={'#CE14BC'}
        onValueChange={() => setDark(!dark)}/>
      </View>
      <View>
          <InputText placeholder={"Inserte un Email"} dark={dark} onChangeText={changeEmail} />
      </View>
      <View>
        <InputText placeholder={"Inserte una Contraseña"} secureTextEntry={true} dark={dark} onChangeText={changePass} typePassword={true}/>
      </View>
      <View style={styles.btnLogin}>
        <TouchableOpacity onPress={() => {signIn(email, password)}}>
          <Text style={styles.text}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      {/* LINEA */}
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 30, textAlign: 'center'}}>o</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
      
      <ButtonGoogle signIn={signInGoogle} />
      
      <View style={{width: '100%', textAlign: 'center', backgroundColor: '#000', height: 1, top: '70%'}}></View>
      <View style={{width: '100%', textAlign: 'center', backgroundColor: '#000', height: 1, top: '70%'}}>
        <Text>¿No tienes cuenta?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    margin: 10
  },
  btnLogin: {
    backgroundColor: '#9775CD',
    borderWidth: 1,
    padding: 8,
    borderRadius: 7,
    alignItems: 'center',
    width: '88%',
    margin: 10
  },
  text: {
    fontWeight: 'bold',
  },
  slider: {
    position: 'absolute',
    // backgroundColor: '#000',
    width: '20%',
    height: 20,
    top: -40,
    right: 40,
    borderColor: '#9775CD', 
    borderWidth: 1,
    borderRadius: 10
  }
})
export default Login
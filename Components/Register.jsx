import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import ButtonGoogle from './ButtonGoogle'
import InputText from './InputText'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({route, navigation}) => {
  const {dark, signInGoogle, setLoged} = route.params;

  // const signInGoogle = navigation.state.params.signInGoogle;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [msg, setMsg] = useState();

  const register = (email, password) => {
    auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("USER REGISTERED CORRECTLY")
        const userEmailAndPass = userCredential.user;
        console.log(userEmailAndPass);
          // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
          // ..
      });
    }

  return (
    <View>
        <InputText placeholder={"introduzca su email"} dark={dark} onChangeText={setEmail} />
        <InputText placeholder={"introduzca su contraseña"} dark={dark} onChangeText={setPassword} typePassword={true}/>
        <InputText placeholder={"introduzca de nuevo la contraseña"} dark={dark} onChangeText={setConfirmPassword} typePassword={true}/>

        <View style={styles.btnLogin}>
            <TouchableOpacity onPress={() => {register(email, password)}}>
            <Text style={styles.text}>REGISTRAR</Text>
            </TouchableOpacity>
        </View>

        <ButtonGoogle signIn={signInGoogle} />
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
  }
})
export default Register
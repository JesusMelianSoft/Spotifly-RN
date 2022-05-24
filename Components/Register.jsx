import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import ButtonGoogle from './ButtonGoogle'
import InputText from './InputText'
const {signInGoogle, createUser} = require('../Config/accessFunctions')
const {comprobePassword, comprobeMail} = require('../Config/comprobaFunctions')


const Register = ({route, navigation}) => {
  const {dark} = route.params;

  // const signInGoogle = navigation.state.params.signInGoogle;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState();

  const register = (email, password) => {
        if(comprobeMail(email) && comprobePassword(password, confirmPassword)) {
            console.log("COMPROBACIÓN CORRECTA")
            createUser(email, password);
            setMsg("Su usuario se ha registrado correctamente!");
            
        }else{
            setMsg("")
            setMsg("La contraseña debe tener como mínimo 8 caracteres, letras mayúsculas minúsculas. \n O el formato del email es incorrecto")
        }
    }

  return (
    <View>
        <InputText placeholder={"introduzca su email"} dark={dark} onChangeText={setEmail} />
        <InputText placeholder={"introduzca su contraseña"} secureTextEntry={true} dark={dark} onChangeText={setPassword} typePassword={true}/>
        <InputText placeholder={"introduzca de nuevo la contraseña"} secureTextEntry={true} dark={dark} onChangeText={setConfirmPassword} typePassword={true}/>
        <Text>{msg}</Text>
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
import { Button, View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import InputText from './InputText'
import ButtonGoogle from './ButtonGoogle';

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
      <View>
        <Text>_________________  _______________</Text>
      </View>
      <ButtonGoogle signIn={signInGoogle} />
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
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
export default Login
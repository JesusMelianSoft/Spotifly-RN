import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import Login from './Components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen';
import Register from './Components/Register'



const Stack = createNativeStackNavigator();

export default function App() {
  const initialUser = {
    email: "",
    password: "",
    type: null
  }
  const [user, setUser] = useState(initialUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dark, setDark] = useState(false);
  

  //const auth = getAuth();
  

  const signInEmailAndPassword = (email, password) => {
    console.log("CLICK SIGN IN")
    auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const signOut = async() => {
    try{
      console.log("SIGN OUT");
      await GoogleSignin.signOut();
      setUser(null);
    }catch(error){
      console.log("NO SE PUEDE CERRAR LA SESIÓN")
    }
  }

  return (
    
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
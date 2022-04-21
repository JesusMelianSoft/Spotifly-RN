import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Components/Login'
import Register from './Components/Register'
import HomeScreen from './Components/HomeScreen'


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
  const signInGoogle = async () => {
      // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const res = await auth().signInWithCredential(googleCredential);
    const accessToken = await (await GoogleSignin.getTokens()).accessToken;

    const currentUser = await GoogleSignin.getCurrentUser();
    setUser(currentUser.user);
    console.log(currentUser.user);
  };

  //const auth = getAuth();
  const createUser = (email, password) => {
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
    // <View>
    //   <Button title="SignIn" onPress={() => signInEmailAndPassword("luis222222@mail.com", "12345678")} />
    // </View>
  <NavigationContainer>
    <Stack.Navigator initialRoute={Login}>
      <Stack.Screen name="Login" component={Login} />
      {/* EN LAS OPCIONES DESHABILITO DARLE HACIA ATRAS */}
      <Stack.Screen name="Home" component={HomeScreen} options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: () => <></>,
          }}/>
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
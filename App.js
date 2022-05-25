import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import Login from './Components/Login'
import Register from './Components/Register'
import HomeScreen from './Components/HomeScreen'
import MusicList from './Components/MusicList'

GoogleSignin.configure({
  webClientId: '244439246283-kla7jccifhs8iekmg0nusd5h2iqqh1dd.apps.googleusercontent.com',
});

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
      dark ? 
        <View style={styles.containerDark} signInGoogle={signInGoogle}>
          <Login dark={dark}/>
        </View>
      :
        <View style={styles.containerLight}>
          <Login signInGoogle={signInGoogle}/>
        </View>
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
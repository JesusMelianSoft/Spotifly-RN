import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import { Button, StyleSheet, Text, View } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '244439246283-kla7jccifhs8iekmg0nusd5h2iqqh1dd.apps.googleusercontent.com',
});

export default function App() {
  const [user, setUser] = useState(null);

  const signIn = async () => {
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
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
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
    <View style={styles.container}>
      <Button
      title="Google Sign-In"
      onPress={() => signIn()}
    />

<Button
      title="Google Sign-Out"
      onPress={() => signOut()}
    />

<Button
      title="register Email/Password"
      onPress={() => createUser("pepe@gmail.com", "12345678")}
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
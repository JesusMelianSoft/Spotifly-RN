import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import {useState} from 'react';
var RNFS = require('react-native-fs');
 // create a path you want to write to
const PATH = RNFS.DocumentDirectoryPath + '/user.json';

//CONFIGURAR GOOGLE
GoogleSignin.configure({
    webClientId: '244439246283-kla7jccifhs8iekmg0nusd5h2iqqh1dd.apps.googleusercontent.com',
  });

//ENTRAR CON EMAIL Y PASS
const signInEmailAndPassword = (email, password) => {
    console.log("CLICK SIGN IN")
    auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        
      // Signed in
      const user = userCredential.user;
      console.log("User: ",user)
      if(user){
        console.log("USUARIO:" , user);
        return user
      }
    })
    .catch((error) => {
      return false
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

// //CREO EL ARCHIVO.json con el usuario
// const writeFile = (content, unicode = 'utf8') => {
//   console.log(PATH)
//   RNFS.writeFile(PATH, content, unicode)
//       .then(result => {
//           console.log(result, 'Escritura exitosa en archivo local !!');
//       }).catch((error) => {
//         console.log(error);
//       });
// };


// const readFile = () => {
//   RNFS.readFileAssets(PATH, 'utf8')
//   .then(result => {
//     console.log(result, "lectura correcta")
//   }).catch((error) => {
//     console.log(error)
//   })
// }

  //ENTRAR CON GOOGLE 
  const signInGoogle = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const res = await auth().signInWithCredential(googleCredential);
    const accessToken = await (await GoogleSignin.getTokens()).accessToken;

    const currentUser = await GoogleSignin.getCurrentUser();
    //setUser(currentUser.user);
    console.log(res);
  };

  //CREAR USUARIO
  const createUser = (email, password) => {
    auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("USER REGISTERED CORRECTLY")
      const userEmailAndPass = userCredential.user;
      console.log(userEmailAndPass);
      console.log("DEVUELVO TRUE");
      return true;
      // ...
    })
    .catch((error) => {
        console.log("DEVUELVO FALSE");
        return false;
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

module.exports = {signInGoogle, signInEmailAndPassword, createUser, signOut}
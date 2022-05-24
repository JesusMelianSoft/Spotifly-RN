import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import bd from '../PlayList/API/db';


const nabvar = ({route, navigation}) => {
  const [music, setMusic] = useState();
  const [reload, setReload] = useState(true);

  const getPlayList = async() => {
    console.log("OBTENGO LAS PLAYLIST")
    bd.aGetPlayList().then((res) => {
      //console.log("CANCIONES DENTRO DE PLAYLIST");
      //console.log(res);
      setMusic(res)
    })
  }


  //NAVEGAR A LA PESTAÑA QUE CONTIENE LA LISTA DE CANCIONES
  const handleNavigateToListMusic = (title) => {
    console.log("NAVEGAMOS CON TITULO: ", title)
    
    if(music){
      console.log("HAY MUSICA")
      navigation.navigate('MusicList', {
        title: title,
        music: music
      });
    }
    
  }

  const user = {
    inicio: '',
  }
  const navigationToHome = () => {
    navigation.navigate('Home', {
      user,
    });
  }

  const navigationToPlayList = () => {
    console.log("CLICKEN");
    navigation.navigate('PlayList')
  }

  useEffect(() => {
    console.log("HELLO");
    getPlayList();
    //console.log(playList.defaultPlayList)
    setReload(false)
    //console.log(music)
  },  [reload])
 return (
   <View style={styles.container}>
     <TouchableOpacity style={styles.buttom} onPress={() => navigationToHome()}>
       <FontAwesome5 style={styles.test}
           name={'home'}
       />
     </TouchableOpacity>
 
     <TouchableOpacity style={styles.buttom} onPress={() => navigationToPlayList()}>
       <FontAwesome5 style={styles.test}
           name={'list'}
           
       />
     </TouchableOpacity>
 
     <TouchableOpacity style={styles.buttom} onPress={() => handleNavigateToListMusic()}>
       <FontAwesome5
           name={'music'}
           
       />
     </TouchableOpacity>
 
     <TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('Details')}>
       <FontAwesome5 style={styles.test}
           name={'cog'}
           
       />
     </TouchableOpacity>
   </View>
 )
}
 
const styles = StyleSheet.create({
   container: {
       width:'100%',
       flexDirection: 'row',
       height:'25%'
   },
   buttom: {
       backgroundColor: 'white',
       width:"25%",
       alignItems: 'center',
   },
   test : {
     color: '#000000',
    height: "25%",
    width:"25%",
   }, 
});
 
export default nabvar
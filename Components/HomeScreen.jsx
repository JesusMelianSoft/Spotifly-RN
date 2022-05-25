import { View, Text, FlatList, StyleSheet} from 'react-native'
import React, {useState, useEffect} from 'react'
import bd from '../PlayList/API/db';
import playList from '../PlayList/defaultPlaylist';
import ViewPlayList from './ViewPlayList';
import Navbar from './Navbar';

const HomeScreen = ({route, navigation}) => {
  const [music, setMusic] = useState();
  const [reload, setReload] = useState(true);

  const getPlayList = async() => {
    bd.aGetPlayList().then((res) => {
      //console.log("CANCIONES DENTRO DE PLAYLIST");
      //console.log(res);
      setMusic(res)
    })
  }
  const {user} = route.params;

  //NAVEGAR A LA PESTAÑA QUE CONTIENE LA LISTA DE CANCIONES
  const handleNavigateToListMusic = (title) => {
    console.log("NAVEGAMOS CON TITULO: ", title)
    if(music){
      navigation.navigate('MusicList', {
        title: title,
        music: music
      });
    }
    
  }

  useEffect(() => {
    getPlayList();
    //console.log(playList.defaultPlayList)
    setReload(false)
    //console.log(music)
  },  [reload])
  //console.log("MI USUARIO: ",user);
  return (
    <View>
      <Text style={styles.hi}>{"Hola "+user.email}</Text>
      <Text style={styles.text}>{"Recomendaciones: "}</Text>
        <FlatList data={playList.defaultPlayList} numColumns={2} renderItem={ itemData => {
            const { id, title, image } = itemData.item;
            console.log("MI TITLE",itemData.item);
            return(
              <ViewPlayList 
              title={title} 
              id={id}
              image={image}
                // value={value} 
              onNavigate={handleNavigateToListMusic} 
              />
            )
          }
          }/>
          <Navbar navigation={navigation}/>
        {/* <Text>{music}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  hi: {
    color: "#AF16C8",
    fontSize: 32
  },
  text: {
    color: "#AF16C8",
   },
   separator: {
    flex: 1, 
    borderWidth: 1, 
    borderColor: 'red'
   },
})
export default HomeScreen
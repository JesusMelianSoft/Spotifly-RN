import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import bd from '../PlayList/API/db';

const HomeScreen = ({route, navigation}) => {
  const [music, setMusic] = useState();
  const [reload, setReload] = useState(true);

  const getPlayList = async() => {
    bd.aGetPlayList().then((res) => {
      console.log("CANCIONES DENTRO DE PLAYLIST");
      console.log(res);
      setMusic(res)
    })
  }
  const {user} = route.params;

  useEffect(() => {
    getPlayList();
    setReload(false)
    //console.log(music)
  },  [reload])
  console.log("MI USUARIO: ",user);
  return (
    <View>
      <Text>{"Hola!, "+user.email}</Text>
      <Text>{"Recomendaciones: "}</Text>
      <View>
        {/* <Text>{music}</Text> */}
      </View>
    </View>
  )
}

export default HomeScreen
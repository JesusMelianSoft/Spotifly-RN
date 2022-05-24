import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
import React,  {useState} from 'react'
import ViewMusic from './ViewMusic';
import Navbar from './Navbar';

const MusicList = ({route, navigation}) => {
    const {title, music} = route.params;
    const [myMusic, setMyMusic] = useState(music);
    const [text, setText] = useState();

    const principalMusic = music;
    const searchMusic = (text) => {
        console.log("MY TEXTO", text)
        //ME BUSCA LAS CANCIONES QUE CONTENGAN LO QUE HE ESCRITO
        const myFilter = music.filter(function (str) {return str.title.toLowerCase().includes(text); })
        //console.log("MI FILTRO", myFilter);
        if(myFilter.length > 0) {
            setMyMusic(myFilter)
        }else{
            setMyMusic(principalMusic)
        }
    }    
    //console.log(music.title)
  return (
    <View>
        <View style={styles.input}>
            <TextInput
            onChangeText={(newText) => searchMusic(newText)}
            value={text}
            />
        </View>
        {title ?
        <Text style={styles.text}>{title}</Text>
        : null
        }
        <Text style={styles.smallText}>{"Total: "+music.length+ " canciones"}</Text>
        <FlatList data={myMusic} renderItem={ itemData => {
            const { title, key} = itemData.item;
            //console.log("MI TITLE",title);
            return(
                //HAY QUE CREAR UN COMPONENTE
                <ViewMusic title={title} id={key} />
            )
          }
          }/>
          {/* <Navbar /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    
    text: {
        color: "#AF16C8",
        fontSize: 30
    },smallText: {
        color: "#AF16C8",
        fontSize: 12
    },
})
export default MusicList
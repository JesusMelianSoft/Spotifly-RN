import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
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
        for (let i = 0; i < myFilter.length; i++) {
            const element = myFilter[i].title;
            console.log("MI FILTRO", element);
            
        }
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
            style={styles.textSearch}
            onChangeText={(newText) => searchMusic(newText)}
            value={text}
            />
            <Image
            style={{ width: 24, height: 24, alignSelf: 'flex-end'}}
            source={require('../assets/images/search.png')}
            />
<<<<<<< HEAD
<<<<<<< HEAD

=======
            
>>>>>>> parent of 640801d (Revert "Features: adding styles from searchbar")
=======
            
>>>>>>> parent of 640801d (Revert "Features: adding styles from searchbar")
        </View>
        <Text style={styles.text}>{title}</Text>
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
    </View>
  )
}

const styles = StyleSheet.create({
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> parent of 640801d (Revert "Features: adding styles from searchbar")
=======
>>>>>>> parent of 640801d (Revert "Features: adding styles from searchbar")
    textSearch: {
        width: '80%'
    },
    input: {
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 15,
        marginLeft: 15
    },
    text: {
        color: "#AF16C8",
        fontSize: 30
    },smallText: {
        color: "#AF16C8",
        fontSize: 12
    },
    
})
export default MusicList
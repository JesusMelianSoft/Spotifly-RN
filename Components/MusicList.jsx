import { View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
import React from 'react'

const MusicList = ({route, navigation}) => {
    const {title, music} = route.params;

    const playOrStop = (id) => {
        console.log("ID DE CANCION: ", id)
    }
    //console.log(music.title)
  return (
    <View>
        <Text>{title}</Text>
        <Text>MusicList</Text>
        <FlatList data={music} renderItem={ itemData => {
            const { title, key} = itemData.item;
            console.log("MI TITLE",title);
            return(
                //HAY QUE CREAR UN COMPONENTE
                <View style={styles.card}>
                    <TouchableOpacity onPress={() => playOrStop(key)}>
                        <View>
                            <Text>{title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
          }
          }/>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        padding: 7,
        margin: 4
    }
})
export default MusicList
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ViewPlayList = ({title, key, id, image, onNavigate}) => {
    console.log(image);
    //const miImagen = require('../assets/image/topspain.png';
    // const miImagen = require(require('../assets/images/topspain.png');
    //console.log("CARGO PLAYLIST: ", playList);

    // const handleClickPlayList = (id) => {
    //     console.log("HAS PULSADO: ",id)
    //     navigation.navigate('musicList', {
    //         dark: dark,
    //         title: title,
    //       });
    // }
  return (
    <TouchableOpacity style={styles.card} onPress={() => {onNavigate(title)}}>
        <View key={key}>
            <Image
            style={{ width: 100, height: 100, marginBottom: 15 }}
            source={image}
            />
            <Text>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card:{
        width: "48%",
        justifyContent: 'center',
        maxWidth: "50%",
        backgroundColor: "rgba(99,97,97,0.7)",
        borderRadius: 10,
        alignItems: "center",
        padding: 20,
        height: 150,
        margin: 4,
        //ANDROID Y IOS
        elevation: 5,
        shadowColor: "rgb(99,97,97)",

        //IOS 
        shadowRadius: 3,
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2}
    },
})

export default ViewPlayList
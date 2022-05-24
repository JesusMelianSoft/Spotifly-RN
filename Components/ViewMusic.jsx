import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ViewMusic = ({title, id}) => {
    //console.log(title);
    const playOrStop = (id) => {
        console.log("ID DE CANCION: ", id)
    }
  return (
    <View style={styles.card}>
        <TouchableOpacity onPress={() => playOrStop(id)}>
            <View>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        padding: 7,
        margin: 4
    },
})
export default ViewMusic
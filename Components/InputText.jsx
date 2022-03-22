import { Image, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const InputText = ({placeholder, secureTextEntry, dark, onChangeText, typePassword}) => {
    const [text, setText] = useState("");
    const [view, setView] = useState(secureTextEntry);
    const changeText = (text) => {
        setText(text);
        onChangeText(text);
    }

  return (
    <View>
        {dark ?
            <View style={styles.darkMode}>
                <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry} onChangeText={changeText}>{text}</TextInput>
                {typePassword ?
                    <Image
                    source={require('../assets/images/ico-pass.png')} //Change your icon image here
                    style={styles.ImageStyle} />
                : null}
            </View>
        :
            <View style={styles.lightMode}>
                <TextInput placeholder={placeholder} secureTextEntry={view} onChangeText={changeText}>{text}</TextInput>
                {typePassword ?
                    <TouchableOpacity onPress={() => setView(!view)}>
                        <Image
                        source={require('../assets/images/ico-pass.png')} //Change your icon image here
                        style={styles.ImageStyle} />
                    </TouchableOpacity>
                : null}
            </View>
        }
    </View>
    
  )
}

const styles = StyleSheet.create({
    darkMode: {
        backgroundColor: "#716E6E",
        borderWidth: 1,
        borderColor: "#9775CD",
        borderRadius: 10,
        width: '90%',
        padding: 10,
        margin: 7
    },
    lightMode: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#F3F3F3",
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        width: '90%',
        padding: 10,
        margin: 7
    },
    ImageStyle: {
        margin: 5,
        height: 20,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
})

export default InputText
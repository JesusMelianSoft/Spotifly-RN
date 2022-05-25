import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Sound from 'react-native-sound';
import advertising from '../data/music/advertising.mp3'
Sound.setCategory('Playback');

const ViewMusic = ({title, id}) => {
    //console.log(title);
    const playMusic = () => {
        //console.log("CREANDO VARIABLE...")
        
        
        whoosh.play((success) => {
          console.log("DANDOLE A PLAY");
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
        // Reduce the volume by half
        whoosh.setVolume(2);
        
        // Position the sound to the full right in a stereo field
        whoosh.setPan(1);
        
        // Loop indefinitely until stop() is called
        whoosh.setNumberOfLoops(-1);
        
        // Get properties of the player instance
        console.log('volume: ' + whoosh.getVolume());
        console.log('pan: ' + whoosh.getPan());
        console.log('loops: ' + whoosh.getNumberOfLoops());
        
        // Seek to a specific point in seconds
        whoosh.setCurrentTime(2.5);
        
        // Get the current playback point in seconds
        whoosh.getCurrentTime((seconds) => console.log('at ' + seconds));
        
      }
    const pauseMusic = () => {
        whoosh.pause();
        whoosh.release();
    }
  return (
    <View style={styles.card}>
        <TouchableOpacity onPress={() => playMusic(id)}>
            <View>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pauseMusic(id)}>
        <Image
            style={{ width: 24, height: 24, alignSelf: 'flex-end'}}
            source={require('../assets/images/pause.png')}
            />
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
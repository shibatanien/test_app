import React, { useState } from "react";
import { View, StyleSheet, Button, Switch, Text } from "react-native";
import SoundPlayer from 'react-native-sound-player'
import NotificationSounds, { playSampleSound } from  'react-native-notification-sounds';

const App = () => {
  const onHue = () => {
    fetch('http://192.168.1.113/api/caObZ3a4yQHlUfuvcg11FPXwKEfRyeIK0t8zl5So/groups/1/action', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({on: true})
    });
  }

  const playSound = () => {
    NotificationSounds.getNotifications('notification').then(soundList => {
      // soundList.map((sound, index) => {
      //   console.log(index, sound.title)
      //   playSampleSound()
      // })
      playSampleSound(soundList[84])
    })
  }

  return (
    <View style={styles.container}>
      <Button title={"play sound"} onPress={playSound()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default App;
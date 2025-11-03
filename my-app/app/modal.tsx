import { Link } from 'expo-router';
import React from 'react';
import { Button, Image, StyleSheet, Text } from 'react-native';

import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  const[say,setSay] = React.useState(0);
  function arttırFonksiyonu(){
  setSay(say+1);
  }
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.baseText}>Merhaba Dünya!</Text>
      <Image 
      style={{width:50, height:50, marginTop:12}}
      source={require('@/assets/images/react-logo.png')} />
      <Link style={styles.link} href="/">
      <Text>Anasayfaya Dön</Text>
      </Link>
    <Text>Sayı: {say}</Text>
    <Button title='Attır' onPress={arttırFonksiyonu}></Button>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  baseText:{

  },
  container: {
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 16,
    paddingVertical: 15,
    color:'blue',
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#bdf8f6ff',
    width: '100%',
    borderRadius:8,
  },
});
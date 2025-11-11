import { Link } from 'expo-router';
import { Platform, StyleSheet,View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>

      <Link href={'/(tabs)'}>
      
      Anasayfaya git
      </Link>
    </View>

  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
  
})
import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen(){
return(
    <View style={styles.container}>
        <View style = {styles.redbox} ></View>
        <View style = {styles.bluebox} ></View>
        <View style = {styles.blackbox} ></View>
        <Text>
            Selam
        </Text>
   </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent: "space-between",
        // alignItems:"flex-end", // satır düzeyinde ortalama
        // justifyContent:"flex-start", // yükseklik düzeyinde ortalama
        paddingTop:74, // yukarıdan boşluk
        padding:12, // dört taraftan boşluk
    },
    yazi:{
        fontSize: 23,
    },
    redbox: {
     borderRadius:12,
      width: 100,
      height: 100,
      backgroundColor: '#6B4429'
   },
   bluebox: {
    borderRadius:12,
      width: 100,
      height: 100,
      backgroundColor: '#D0854F'
   },
   blackbox: {
    borderRadius:12,
      width: 100,
      height: 100,
      backgroundColor: '#D98A52'
   },
})
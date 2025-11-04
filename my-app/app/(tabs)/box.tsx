import React from 'react';
import { StyleSheet, View } from 'react-native';
export default function BoxPage(){
    return(
<View style={styles.container}>
<View style={styles.box} />
<View style={styles.box} />
<View style={styles.box} />
</View>
    )

}


const styles = StyleSheet.create({
container: {
flex: 1, // Tüm ekranı kapla
backgroundColor: '#4ab6f5ff',
flexDirection:'center',
alignItems:'center',
},
box: {
flex: 1,
width:60,
height:60,
backgroundColor: '#FF6B6B',
borderRadius:5,
},

});

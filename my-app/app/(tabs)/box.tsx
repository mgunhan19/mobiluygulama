import React from 'react';
import { View, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
containerNoWrap: {
flex: 1,
flexDirection: 'row',
flexWrap: 'nowrap', // Öğeler sıkıştırılır
},
containerWrap: {
flex: 1,
flexDirection: 'row',
flexWrap: 'wrap', // Yeni satıra geçer
},
box: {
width: 100,
height: 100,
backgroundColor: '#FF6B6B',
margin: 5,
},
});
export default function FlexWrapExample() {
return (
<View style={styles.containerWrap}>
<View style={styles.box} />
<View style={styles.box} />
<View style={styles.box} />
<View style={styles.box} />
<View style={styles.box} />
</View>
);
}
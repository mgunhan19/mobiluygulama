import { Link } from 'expo-router';
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen(){
    const [isActive , setIsActive] = useState(false);
    return(
        <View style={style.container}>
            <View style={[style.box,
                {
                    backgroundColor: isActive ? '#e3e63cff' : '#ff0000ff',
                }
            ]}>
                <Text>{isActive ?"Aktif":"Pasif"}</Text>
            </View>
            <TouchableOpacity style={style.button} onPress={() =>setIsActive(!isActive)}>
                <Text style={style.button}>
                    Durum Değiştir
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button2} onPress={() =>setIsActive(!isActive)}>
                <Link style={style.button} href={'/(tabs)'}>
                 Anasayfaya Git
                 </Link>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',

    },
    box:{
        width:150,
        height:150,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginBottom:20,
    },
    button:{
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:5,
        backgroundColor:'#b20c0cff',
    },
        button2:{
        marginTop:10,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:5,
        backgroundColor:'#b20c0cff',
    }
    
})
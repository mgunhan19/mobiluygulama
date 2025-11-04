import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
    const [isActive, setIsActive] = useState(false);
    return(
        <View style ={styles.container}>
            <View style={[styles.box, 
                {backgroundColor: isActive ? '#a0ff78ff' : '#780e08ff',}
                ]}>
                <Text>
                    {isActive ? 'Aktif' : 'Pasif'}
                </Text>
            </View>
            <TouchableOpacity style={styles.button}
            onPress={() => setIsActive(!isActive)}
            >
                <Text style={styles.buttonText}>
                    Durumu değiştir
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    box:{
        width:100,
        height:100,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        marginBottom:20,
    },
    button:{
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:"#007AFF",
        borderRadius:5,
    },
    buttonText:{
        color:"#fff",
        fontWeight:"bold",
    }

})
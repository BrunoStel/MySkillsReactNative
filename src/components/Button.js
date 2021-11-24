import React, {useState} from "react"
import { 
    TouchableOpacity,
    Text,
    StyleSheet
        } from 'react-native'


export function Button({ onClick }){
    return (<TouchableOpacity 
        activeOpacity={.2}
        style={styles.button}
        onPress={onClick}
        > 

        <Text style={styles.buttonText}>Add</Text>

    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#A370F7",
        padding: 15,
        borderRadius:7,
        alignItems:"center",
        marginTop:20
    },
    buttonText:{
        color:"#FFF",
        fontSize:17,
        fontWeight:"bold"
    }
})
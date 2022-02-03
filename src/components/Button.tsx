import React, {useState} from "react"
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
    } from 'react-native'

interface IButtonProps extends TouchableOpacityProps{//Definindo que a interface IButtonProps extende
//a interface do TouchableOpacityProps que possui todas as propriedades do TouchableOpacity 
//mais o que será definido dentro dela mesma, que no caso é title
    title:string
}

export function Button({ title, ...rest } : IButtonProps ){
    //...rest define que irei receber todas as propriedades definidas no meu componente <Button /> la no home e um title,
    //que vai ser do tipo IButtonProps (olhar acima)
    return (<TouchableOpacity 
        style={styles.button}
        {...rest} //Despejo todas as propriedades passadas <Button /> para dentro do meu <TouchableOpacity />
        > 

        <Text style={styles.buttonText}>
            {title}
        </Text>

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
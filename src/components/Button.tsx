import React, {useState} from "react"
import { 
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
        } from 'react-native'

    type ButtonProps = TouchableOpacityProps; //Definindo que o tipo criado ButtonProps é a interface
    //do TouchableOpacityProps que possui todas as propriedades do TouchableOpacity

export function Button({ ...rest } : ButtonProps ){
    //...rest define que irei receber todas as propriedades definidas no meu componente <Button /> la no home,
    //que vai ser do tipo ButtonProps (olhar acima)
    return (<TouchableOpacity 
        activeOpacity={.2}
        style={styles.button}
        {...rest} //Despejo todas as propriedades passadas <Button /> para dentro do meu <TouchableOpacity />
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
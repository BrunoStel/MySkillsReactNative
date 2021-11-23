import React, {useState} from "react"
import {
    View, 
    Text, 
    StyleSheet,
    SafeAreaView, 
    TextInput, 
    Platform,
    TouchableOpacity
    } from 'react-native'


export function Home(){

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);



  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>React native</Text>

        <TextInput
            style={styles.input}
            placeholder="New Skill"
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
        />

        <TouchableOpacity 
            activeOpacity={.2}
            style={styles.button}
        > 
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text     style={[styles.title, {marginVertical:50}]}>
            My Skills
        </Text>

        <TouchableOpacity  style={styles.buttonSkill}>
            <Text     style={styles.textSkill}>
                
            </Text>
        </TouchableOpacity>

      </SafeAreaView>

    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:"#121015",
        paddingHorizontal:20,
        paddingVertical:70
    },
    title:{
        color:"#fff",
        fontSize:24,
        fontWeight:"bold"
    },
    input:{
        backgroundColor:'#1f1e25',
        color:"#FFF",
        fontSize:18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop:20,
        borderRadius:7
    },
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
    },
    buttonSkill:{
        backgroundColor:"#1f1e25",
        padding:15,
        borderRadius:50,
        alignItems:"center"
    },
    textSkill:{
        color:"#FFF",
        fontSize:22,
        fontWeight:"bold",
    }
})
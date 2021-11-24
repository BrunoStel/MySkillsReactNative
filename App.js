import React from "react"
import { StatusBar } from "react-native"
import { Home } from "./src/pages/home"



export default function App(){
  return (
    <>
    <StatusBar barStyle="light-content"
        //O status bar serve para modificar a barra superior do status do celular, ficando mais visivel de acordo
        //com o tema escolhido, entao se o app for escuro, é recomendavel q o tema seja light
        />
    <Home/>
  </>
  )
}
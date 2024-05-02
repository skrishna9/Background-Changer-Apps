import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [bgcolor,setBgColor] = useState("#ffffff")
  const generateColor = ()=>{
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for (let i=0;i<6; i++){
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setBgColor(color)
  }
  return (
    <>
      <Text style = {styles.colorTxt}>Background Changer</Text>

      <StatusBar backgroundColor={"bgcolor"}/>
    <View style={[styles.container, {backgroundColor: bgcolor}]}>
       <TouchableOpacity onPress={generateColor}>
       <View style={styles.actionBTN}>
        <Text style={styles.actionBtext}>Prss Me</Text>
      </View>
     </TouchableOpacity>
    </View>
     
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBTN:{
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingHorizontal: 40,

  },
  actionBtext:{
    fontSize: 24,
    color: "#ffffff",
    textTransform: "uppercase"
  },
  colorTxt:{
    fontSize: 20,
    paddingLeft:"25%",
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    alignContent: 'center',
    backgroundColor: 'yellow'
  }
})
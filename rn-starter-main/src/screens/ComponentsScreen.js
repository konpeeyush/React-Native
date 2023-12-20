import React from 'react'

import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const name = "Peeyush" ;

    return (
        <View>
            <Text style={styles.heading}>Getting Started with React Native!</Text>
            <Text style={styles.subHeading}> My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 45
    },
    subHeading:{
        fontSize:20,
    }
});

export default ComponentsScreen
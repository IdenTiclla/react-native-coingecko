import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

const CoinItem = ({coin}) => {
    return (
      <View style={styles.containerItem}>
        <View style={styles.coinName}>
          <Image source={{ uri: coin.image }} style={styles.image} />
          <Text style={styles.text}>{coin.name}</Text>
        </View>
        <Text style={styles.text}>1000000</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#121212',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coinName: {
        flexDirection: 'row'
    },  
    image: {
        width: 30,
        height: 30
    },
    text: {
        color: '#ffffff'
    }
})

export default CoinItem
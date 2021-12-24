import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ListItem = () => {
  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/* Left side */}
        <View>
          <Image
            source={{
              uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEthereum&psig=AOvVaw0vAu8jlYFIZdp18kAOAfsA&ust=1640468035174000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiBreax_fQCFQAAAAAdAAAAABAD',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Ethereum</Text>
          <Text style={styles.subtitle}>ETH</Text>
        </View>

        {/* Right Side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>Ethereum</Text>
          <Text style={[styles.subtitle, {color: 'red'}]}>ETH</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemWrapper: {},
  image: {},
  titleWrapper: {},
  title: {},
  subtitle: {},
  rightWrapper: {},
  title: {},
  subtitle: {},
});

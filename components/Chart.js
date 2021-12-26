import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
} from '@rainbow-me/animated-charts';

export const {width: SIZE} = Dimensions.get('window');

const Chart = ({
  currentPrice,
  logoUrl,
  name,
  symbol,
  priceChangePercentage7d,
  sparkline,
}) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? '#34C579' : '#FF3B30';
  return (
    <ChartPathProvider data={{points: sparkline, smoothingStrategy: 'bezier'}}>
      <View style={styles.chartWrapper}>
        {/* Titles*/}
        <View style={styles.titleWrapper}>
          <View style={styles.upperTitles}>
            <View style={styles.upperLeftTitle}>
              <Image source={{uri: logoUrl}} style={styles.image} />
              <Text style={styles.subTitle}>
                {name} ({symbol.toUpperCase()})
              </Text>
            </View>
            <Text style={styles.subTitle}>7d</Text>
          </View>
          <View style={styles.lowerTitles}>
            <Text style={styles.boldTitle}>
              $ {currentPrice.toLocaleString('en-US', {currency: 'USD'})}
            </Text>
            <Text style={[styles.title, {color: priceChangeColor}]}>
              {priceChangePercentage7d.toFixed(2)}%
            </Text>
          </View>
        </View>
      </View>
    </ChartPathProvider>
  );
};

export default Chart;

const styles = StyleSheet.create({
  chartWrapper: {
    margin: 16,
  },
  titleWrapper: {},
  upperTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperLeftTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  subTitle: {
    fontSize: 14,
    color: '#A9ABB1',
  },
  lowerTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
});

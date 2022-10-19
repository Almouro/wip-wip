import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {flexDirection: 'row', flexWrap: 'wrap'},
  view: {
    height: 5,
    width: 5,
    backgroundColor: 'purple',
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
  },
});

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {Array(10000)
            .fill(null)
            .map((_, index) => (
              <View key={index} style={styles.view} testID={`VIEW_${index}`} />
            ))}
        </View>
      </ScrollView>
      <View style={styles.textContainer}>
        <Text style={styles.text}>LOADED</Text>
      </View>
    </>
  );
};

export default App;
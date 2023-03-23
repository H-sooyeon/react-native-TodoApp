import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Empty() {
  return (
    <View style={styles.block}>
      <Text style={styles.description}>오늘의 할 일은 무엇인가요?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 20,
    color: '#9e9e9e',
  },
});

export default Empty;

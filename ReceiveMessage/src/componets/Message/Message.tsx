import React from 'react';
import {MessageType} from '../../screens/MessageScreen/MessageScreen';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {convert_date} from '../../utils';
import RenderHtml from 'react-native-render-html';

export default function Message(props: MessageType) {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.date]}>
        {convert_date(props.createdAt)}
      </Text>
      <RenderHtml
        contentWidth={width}
        source={{
          html: props.description,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
  date: {
    fontSize: 18,
    color: '#ccc',
  },
  description: {
    fontSize: 20,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
});

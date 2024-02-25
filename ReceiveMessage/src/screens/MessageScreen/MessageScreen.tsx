import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import Message from '../../componets/Message/Message';
import {socket} from '../../utils';
import {getMessages} from '../../services/messages.services';

export interface MessageType {
  _id: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export default function MessageScreen() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages();
        setMessages(data.data);
      } catch (error: any) {
        Alert.alert(error.message);
      }
    };
    fetchMessages();
  }, []);
  useEffect(() => {
    socket.on('receive-message', (data: any) => {
      // console.log(data);
      setMessages(data);
    });
  }, []);

  const dataMessage =
    messages.length > 0
      ? messages.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
      : [];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages Center</Text>
      <FlatList
        inverted
        data={dataMessage}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Message
            key={item._id}
            _id={item._id}
            description={item.description}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 50 : 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});

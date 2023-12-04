import React, {useState, useCallback} from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';
const image = require('../assests/bg_android.png');
import {SampleData} from '../Utils/Store';
import Card from './Card';

const UsersList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    Alert.alert('Alert', 'Are You Want to Reload  the Page', [
      {
        text: 'No',
        // onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          setRefreshing(true);
          setTimeout(() => {
            setRefreshing(false);
          }, 2000);
        },
      },
    ]);
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <FlatList
            data={SampleData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Card
                email={item?.email}
                username={item?.username}
                id={item?.id}
                // onPress={() => navigation.navigate('Order', {foodItem: item})}
              />
            )}
          />
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default UsersList;

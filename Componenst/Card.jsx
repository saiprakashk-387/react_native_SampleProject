import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const Card = ({email, username, id}) => {
  return (
    // <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={styles.mainCardView}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 2,
        }}>
        <View style={{marginLeft: 12, marginBottom: 12}}>
          {/* <Image
              source={{
                uri: 'https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg',
              }}
              style={styles.image}
            /> */}
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 16,
                color: 'green',
                fontWeight: 'bold',
                lineHeight: 24,
                margin: 6,
                marginLeft: 'auto',
              }}>
              {username}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: 'bold',
                textTransform: 'capitalize',
                lineHeight: 24,

                margin: 6,
              }}>
              {email}
            </Text>
          </View>
        </View>
      </View>
    </View>
    // </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainCardView: {
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'shadow',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    paddingLeft: 1,
    paddingRight: 1,
    marginTop: 12,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 20,
    marginTop: 8,
  },
});

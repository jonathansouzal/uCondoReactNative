import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

import {FlatListStyled, ButtonItem, TextItem, DeleteItem} from './style.home';
import Icon from 'react-native-vector-icons/Feather';


import {planosDeConta} from '../../db/planosDeConta';

export default function HomeScreen() {
  const myIcon = <Icon name="trash" size={30} color="#900" />;

  const renderItem = ({item}: any) => (
    <ButtonItem>
      <TextItem>
        {item.codigo} - {item.nomeDaConta}
      </TextItem>
      <DeleteItem>{myIcon}</DeleteItem>
    </ButtonItem>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <FlatListStyled
          data={planosDeConta}
          renderItem={renderItem}
          keyExtractor={(item: any, index: number) =>
            item.codigo.concat(String(index))
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

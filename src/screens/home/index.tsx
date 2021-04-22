import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

import {
  ContainerHome, Top, Bottom
} from './style.home';

import FlatListRegister from '../../components/flatListRegister/flatListRegister';
import Search from '../../components/search/Search'

export default function HomeScreen() {

  return (
    <>
    <Top/>
    <ContainerHome>
     <Search />
     <FlatListRegister />
    </ContainerHome>
    <Bottom/>
    </>
  );
}

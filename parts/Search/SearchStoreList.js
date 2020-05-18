import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import StoreCard from '../StoreCard';
import * as RootNavigation from '../../RootNavigation.js';
import { useNavigation } from '@react-navigation/native';

import { SHOPS } from '../../data/dummy-data'; 

export default class SearchStoreList extends Component {
  constructor(props) {
    super(props);
      this.state = {
    };
  }

  render() {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList 
                style={{paddingHorizontal: 17}}
                data={SHOPS}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({ item: row, index }) =>
                    <StoreCard
                        navigation={this.props.navigation}
                        store={row}
                        fw={true}
                    />
                }
            />
        </View>
    );
  }
}

import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import StoreCard from '../StoreCard';
import * as RootNavigation from '../../RootNavigation.js';
import { useNavigation } from '@react-navigation/native';

export default class SearchStoreList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        stores: [
                {
                    counter: '8 invendus',
                    rating: '4,5 (50+)',
                    distance: '1,2km',
                    name: 'Yapan Sushi - Nuée bleue',
                    category: 'Sushis - soupes - salades',
                    logo: require('../../assets/img/burgers.png'),
                    status: 'Ferme dans 1h',
                    discount: 'Plus que 1h pour profiter des -20%',
                    img: require('../../assets/img/store_image.png'),
                    fw: 'true'
                },
                {
                    counter: '8 invendus',
                    rating: '4,5 (50+)',
                    distance: '1,2km',
                    name: 'Yapan Sushi - Nuée bleue',
                    category: 'Sushis - soupes - salades',
                    logo: require('../../assets/img/burgers.png'),
                    status: 'Ferme dans 1h',
                    discount: 'Plus que 1h pour profiter des -20%',
                    img: require('../../assets/img/store_image.png'),
                    fw: 'true'
                },
                {
                    counter: '8 invendus',
                    rating: '4,5 (50+)',
                    distance: '1,2km',
                    name: 'Yapan Sushi - Nuée bleue',
                    category: 'Sushis - soupes - salades',
                    logo: require('../../assets/img/burgers.png'),
                    status: 'Ferme dans 1h',
                    discount: 'Plus que 1h pour profiter des -20%',
                    img: require('../../assets/img/store_image.png'),
                    fw: 'true'
                },
                {
                    counter: '8 invendus',
                    rating: '4,5 (50+)',
                    distance: '1,2km',
                    name: 'Yapan Sushi - Nuée bleue',
                    category: 'Sushis - soupes - salades',
                    logo: require('../../assets/img/burgers.png'),
                    status: 'Ferme dans 1h',
                    discount: 'Plus que 1h pour profiter des -20%',
                    img: require('../../assets/img/store_image.png'),
                    fw: 'true'
                },
            ]
    };
  }

  render() {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList 
                style={{paddingHorizontal: 17}}
                data={this.state.stores}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({ item: row, index }) =>
                    <StoreCard
                        navigation={this.props.navigation}
                        store={row}
                    />
                }
            />
        </View>
    );
  }
}

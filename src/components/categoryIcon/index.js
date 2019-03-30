import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';

import images from '../images';
import styles from './styles';

export default class CategoryIcon extends Component {
  getCategoryIcon = (categoryName) => {
    let icon;
    switch (categoryName) {
      case 'カクテル':
        icon = images.cooktailWhite;
        break;
      case 'ワイン':
        icon = images.wineWhite;
        break;
      case 'ビール':
        icon = images.beerWhite;
        break;
      case '日本酒':
        icon = images.sakeWhite;
        break;
      case '焼酎':
        icon = images.syotyuWhite;
        break;
      case 'ウイスキー':
        icon = images.whiskyWhite;
        break;
      default:
        icon = images.cooktailWhite;
        break;
    }
    return icon;
  }

  getCategoryIconColor = (categoryName) => {
    let color;
    switch (categoryName) {
      case 'カクテル':
        color = '#E8829F';
        break;
      case 'ワイン':
        color = '#C2185B';
        break;
      case 'ビール':
        color = '#FF9800';
        break;
      case '日本酒':
        color = '#43A8E8';
        break;
      case '焼酎':
        color = '#009688';
        break;
      case 'ウイスキー':
        color = '#846EEF';
        break;
      default:
        color = '#FFF';
        break;
    }
    return color;
  }

  render() {
    const {
      size,
      categoryName,
      style,
    } = this.props;

    const iconSize = size || 40;
    return (
      <View style={[styles.iconContainer, style, {
        width: iconSize, height: iconSize, borderRadius: iconSize / 2, backgroundColor: this.getCategoryIconColor(categoryName),
      }]}
      >
        <Image
          style={[{ width: iconSize * 0.6, height: iconSize * 0.6 }]}
          source={this.getCategoryIcon(categoryName)}
        />
      </View>
    );
  }
}

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, StyleSheet } from "react-native";

export default class Todo extends Component {
  static defaultProps = {
    titulo: "Titulo padrão",
  };
  static propTypes = {
    titulo: PropTypes.string,
  };

  render() {
    return (
      <View>
        <Text>{this.props.titulo}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({});

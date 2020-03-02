import {StyleSheet} from 'react-native';

import {bold} from 'ansi-colors';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  error: {
    textAlign: 'center',
    color: colors.danger,
    marginTop: 10,
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },

  text: {
    textAlign: 'center',
    color: colors.ligth,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: metrics.baseMargin,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;

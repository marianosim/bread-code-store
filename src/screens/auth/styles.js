import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    minHeight: 340,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  link: {
    paddingVertical: 5,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
  },
  linkText: {
    borderBottomColor: '#0582CA',
    borderBottomWidth: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#0582CA',
    textAlign: 'center',
  },
  submitContainer: {
    paddingVertical: 5,
  },
});

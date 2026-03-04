import { StyleSheet } from 'react-native-unistyles';

import { Colors } from './colors';

export const globalStyles = StyleSheet.create({
  flex: { flex: 1 },
  ph10: { paddingHorizontal: 10 },
  ph16: { paddingHorizontal: 16 },
  ph24: { paddingHorizontal: 24 },
  pb40: { paddingBottom: 40 },
  pb24: { paddingBottom: 24 },
  mt12: { marginTop: 12 },
  mt15: { marginTop: 15 },
  ml10: { marginLeft: 10 },
  mh12: { marginHorizontal: 12 },
  mt10: { marginTop: 10 },
  mb10: { marginBottom: 10 },
  mb12: { marginBottom: 12 },
  mt16: { marginTop: 16 },
  mt36: { marginTop: 36 },
  mt20: { marginTop: 20 },
  mt25: { marginTop: 25 },
  mt24: { marginTop: 24 },
  mt40: { marginTop: 40 },
  mt45: { marginTop: 45 },
  mt50: { marginTop: 50 },
  mt30: { marginTop: 30 },
  mb16: { marginBottom: 16 },
  mb20: { marginBottom: 20 },
  mb24: { marginBottom: 24 },
  mb30: { marginBottom: 30 },
  mb40: { marginBottom: 40 },
  mv16: { marginVertical: 16 },
  mv20: { marginVertical: 20 },
  mr10: { marginRight: 10 },
});

export const utilsStyles = StyleSheet.create({
  separator: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.separator,
  },
  list: {
    marginTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
});

export const hitSlop = {
  top: 14,
  bottom: 14,
  left: 14,
  right: 14,
};

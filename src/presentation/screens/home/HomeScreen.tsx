/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Pressable, View, Text} from 'react-native';
import {
  type NavigationProp,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared';
import {type RootStackParams} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Products"
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

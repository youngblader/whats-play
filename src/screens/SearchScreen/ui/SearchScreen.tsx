import { FC } from 'react';
import { TextInput, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';

import { Game, GameItem } from '@entities/games';
import { SearchIcon } from '@shared/icons';
import { AppLayout } from '@shared/layout';
import { Colors, utilsStyles } from '@shared/theme';
import { LoadingIndicator } from '@shared/ui';

import { useSearch } from '../hooks/useSearch';

export const SearchScreen: FC = () => {
  const { games, searchQuery, isFetching, setSearchQuery, presentGame } = useSearch();

  const renderItem = ({ item }: ListRenderItemInfo<Game>) => (
    <Animated.View entering={FadeIn.duration(400)} exiting={FadeOut.duration(400)}>
      <GameItem {...item} onPress={() => presentGame(item)} />
    </Animated.View>
  );

  return (
    <AppLayout title={'Search'}>
      <View style={styles.inputContainer}>
        <SearchIcon size={16} />
        <TextInput
          style={styles.input}
          value={searchQuery}
          placeholderTextColor={Colors.gray}
          placeholder={'Grand Theft Auto V'}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlashList
        data={games?.results ?? []}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={isFetching ? <LoadingIndicator /> : null}
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyboardDismissMode={'on-drag'}
      />
    </AppLayout>
  );
};

const ItemSeparatorComponent: FC = () => <View style={utilsStyles.separator} />;

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    marginTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 14,
    paddingLeft: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#393F4B',
    backgroundColor: '#24282F',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 12,
    color: Colors.white,
    fontWeight: '500',
  },
});

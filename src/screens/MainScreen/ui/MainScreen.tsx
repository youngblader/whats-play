import { FC } from 'react';
import { ListRenderItemInfo, SectionList, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Developers } from '@widgets/developers';
import { GamesPreviews } from '@widgets/games-preview';
import { Genres } from '@widgets/genres';
import { Game, GameItem } from '@entities/games';
import { globalStyles, utilsStyles } from '@shared/theme';
import { LoadingIndicator, SectionDivider } from '@shared/ui';

import { useMain } from '../hooks/useMain';

export const MainScreen: FC = () => {
  const { data, developers, genres, perfectGames, isLoading, presentGame } = useMain();

  const renderItem = ({ item }: ListRenderItemInfo<Game>) => (
    <View style={globalStyles.ph16}>
      <GameItem {...item} onPress={() => presentGame(item)} />
    </View>
  );

  const ListHeaderComponent = (
    <View>
      {genres?.length > 0 && <Genres genres={genres} />}
      {developers?.length > 0 && <Developers developers={developers} />}
      {perfectGames?.length > 0 && <GamesPreviews data={perfectGames} />}
    </View>
  );

  return (
    <View style={globalStyles.flex}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Animated.View style={globalStyles.flex} entering={FadeInDown.duration(450).damping(20)}>
          <SectionList
            sections={data}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            ListHeaderComponent={ListHeaderComponent}
            contentContainerStyle={globalStyles.pb40}
            ItemSeparatorComponent={ItemSeparatorComponent}
            stickySectionHeadersEnabled={false}
          />
        </Animated.View>
      )}
    </View>
  );
};

const renderSectionHeader = ({ section }: { section: { title: string; data: Game[] } }) => (
  <SectionDivider title={section?.title} />
);

const ItemSeparatorComponent: FC = () => <View style={utilsStyles.separator} />;

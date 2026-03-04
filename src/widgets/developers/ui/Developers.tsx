import { FC } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import { Developer, DeveloperItem } from '@entities/developer';
import { useAppNavigation } from '@shared/lib';
import { globalStyles } from '@shared/theme';
import { SectionDivider } from '@shared/ui';

type Props = {
  developers: Developer[];
};

export const Developers: FC<Props> = ({ developers }) => {
  const navigation = useAppNavigation();

  const presentDevelopers = () => {
    navigation.navigate('Developers');
  };

  const presentDeveloperGames = (developer: string) => {
    navigation.navigate('DeveloperGames', { developer });
  };

  const renderItem = ({ item }: ListRenderItemInfo<Developer>) => (
    <DeveloperItem {...item} onPress={() => presentDeveloperGames(item.slug)} />
  );

  return (
    <View>
      <SectionDivider title={'Developers'} onPress={presentDevelopers} />
      <FlatList
        horizontal
        data={developers}
        renderItem={renderItem}
        contentContainerStyle={globalStyles.ph16}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

const ItemSeparatorComponent: FC = () => <View style={globalStyles.ml10} />;

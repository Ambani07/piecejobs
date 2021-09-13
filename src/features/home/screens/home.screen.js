import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { JobsBar } from "../../../components/home/home-info.component";

import { jobCategories } from "./home.data";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[1]};
  margin-bottom: 64px;
`;

export const HomeScreen = ({ navigation }) => {
  const [isToggled, setIsToggle] = useState(true);

  return (
    <SafeArea>
      {/* {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )} */}
      <SearchContainer>
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() => setIsToggle(!isToggled)}
          placeholder="search for a location"
        />

        <FlatList
          data={jobCategories}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <JobsBar categories={item} onNavigate={navigation.navigate} />
            </Spacer>
          )}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ padding: 8 }}
        />
      </SearchContainer>
    </SafeArea>
  );
};

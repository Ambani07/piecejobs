import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { JobsBar } from "../../../components/home/home-info.component";

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
`;

export const HomeScreen = ({ navigation }) => {
  const jobs = [
    {
      id: 1,
      name: "job 1",
      icon: "plug",
    },
    {
      id: 2,
      name: "job 2",
      icon: "user",
    },
  ];
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
        {isToggled && <JobsBar jobs={jobs} onNavigate={navigation.navigate} />}
      </SearchContainer>
    </SafeArea>
  );
};

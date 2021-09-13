import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";

import { List } from "react-native-paper";

const JobsWrapper = styled.View`
  padding: 10px;
`;

export const JobsList = ({ jobs }) => {
  const { title, list } = jobs;

  return (
    <JobsWrapper>
      <Spacer variant="left.large"></Spacer>
      {list.map((job) => (
        <Spacer key={job.title} position="left" size="medium">
          <List.Item
            title={job.name}
            description={job.description}
            left={(props) => <List.Icon {...props} icon="beer" />}
          />
        </Spacer>
      ))}
    </JobsWrapper>
  );
};

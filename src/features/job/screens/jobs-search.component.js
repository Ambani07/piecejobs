import React from "react";
import { Text } from "../../../components/typography/text.components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { SearchJobs } from "../components/search.component";
import { List } from "react-native-paper";
import styled from "styled-components";
import { plumbingJobs } from "../../home/screens/job.data";
import { TouchableOpacity } from "react-native-gesture-handler";

const JobSearchContainer = styled.View`
  padding: 15px;
`;

export const JobsSearchScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <JobSearchContainer>
        <SearchJobs />
        <Text>Search results</Text>
        {plumbingJobs.map((job) => (
          <TouchableOpacity
            key={job.name}
            onPress={() =>
              navigation.navigate("JobDetails", {
                job,
              })
            }
          >
            <List.Item
              title={job.name}
              description={job.description}
              left={(props) => <List.Icon {...props} icon="folder" />}
            />
          </TouchableOpacity>
        ))}
      </JobSearchContainer>
    </SafeArea>
  );
};

import React, { useState } from "react";
import { ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";

import {
  JobCard,
  JobCardCover,
  Info,
} from "../components/home-job-list-card.styles";
import { Text } from "../../../components/typography/text.components";
import { plumbingJobs } from "./job.data";
import { List } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export const JobListScreen = ({ route, navigation }) => {
  const { category } = route.params;
  return (
    <SafeArea>
      <ScrollView>
        <JobCard elevation={5}>
          <JobCardCover source={category.icon} />
          <Info>
            <Text variant="label">{category.name}</Text>
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
          </Info>
        </JobCard>
      </ScrollView>
    </SafeArea>
  );
};

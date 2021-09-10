import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";

import WebView from "react-native-webview";
import { Platform } from "react-native";

import { Text } from "../typography/text.components";

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const JobsWrapper = styled.View`
  padding: 10px;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndroid = Platform.OS === "android";
export const JobsBar = ({ jobs, onNavigate }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;
  if (!jobs.length) {
    return null;
  }
  return (
    <JobsWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Jobs</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {jobs.map((job) => {
          const key = job.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetails", {
                    job,
                  })
                }
              >
                <Item>
                  <Image
                    source={require("../../../assets/maintenance/electrician.png")}
                  />
                  <Text center variant="caption" numberOfLines={3}>
                    {job.name}
                  </Text>
                </Item>
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </JobsWrapper>
  );
};

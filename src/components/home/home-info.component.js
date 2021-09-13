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
  width: 60px;
  height: 60px;
  /* background-color: red; */
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndroid = Platform.OS === "android";
export const JobsBar = ({ categories, onNavigate }) => {
  const Image = CompactImage;
  const { title, list } = categories;

  return (
    <JobsWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">{title}</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {list.map((category) => (
          <Spacer key={category.name} position="left" size="medium">
            <TouchableOpacity
              onPress={() =>
                onNavigate("JobCategoryList", {
                  category: category,
                })
              }
            >
              <Item>
                <Image source={category.icon} />
                <Text variant="caption">{category.name}</Text>
              </Item>
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </JobsWrapper>
  );
};

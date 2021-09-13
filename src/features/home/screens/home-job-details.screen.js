import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  JobDetailsCard,
  JobDetailsCardCover,
  JobCardDescription,
  JobDetailRate,
} from "../components/home-job-details.styles";

const LeftContent = (props) => <Avatar.Icon {...props} icon="face" />;
export const JobDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const { job } = route.params;

  return (
    <SafeArea>
      <ScrollView>
        {/* <DetailsContainer> */}
        <JobDetailsCard elevation={5}>
          <Card.Title title="Ambani" subtitle="Matsedu" left={LeftContent} />
          <Card.Content>
            <Title>{job.name}</Title>
            <Paragraph>3 hours ago</Paragraph>
          </Card.Content>
          <JobDetailsCardCover source={{ uri: "https://picsum.photos/700" }} />
          <JobDetailRate>R25 / hour</JobDetailRate>
          <JobCardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            fuga autem iusto reiciendis impedit tempore assumenda. Inventore
            perferendis ut, obcaecati cum unde odio perspiciatis delectus saepe
            doloribus corporis dicta voluptatem?
          </JobCardDescription>
          <Card.Actions>
            <Button>Apply Now</Button>
            <Button>Share</Button>
            <Button>Save</Button>
            <Button>Report</Button>
          </Card.Actions>
        </JobDetailsCard>
        <List.Accordion
          title="Contact"
          left={(props) => <List.Icon {...props} icon="phone" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="0123456789" />
        </List.Accordion>

        <List.Accordion
          title="Address"
          left={(props) => <List.Icon {...props} icon="home" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="4198 Costa Rico Street" />
          <List.Item title="Cosmo City" />
          <List.Item title="Johannesburg" />
          <List.Item title="2191" />
        </List.Accordion>
        {/* </DetailsContainer> */}
      </ScrollView>
    </SafeArea>
  );
};

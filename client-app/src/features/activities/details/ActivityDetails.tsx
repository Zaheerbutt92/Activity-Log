import { observer } from "mobx-react-lite";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/loadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";


function ActivityDetails() {
  const {activityStore} = useStore();
  const {selectedActivity:activity,loadActivity,loadingInitial} = activityStore;
  const {id} = useParams<{id:string}>();

  useEffect(()=>{
    if(id) loadActivity(id);
  },[id,loadActivity]);

  if(loadingInitial || !activity) return <LoadingComponent content='Activity loading...' />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailedSidebar activity={activity} />
      </Grid.Column>
    </Grid>
  );
}

export default observer(ActivityDetails);
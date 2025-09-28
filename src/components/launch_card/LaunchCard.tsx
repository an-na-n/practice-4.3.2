import React from "react";
import { Card, Button, Image, Text } from "@mantine/core";
import type { Launch } from "../../types/types";
import classes from "./LaunchCard.module.css";

type Props = {
  launch: Launch;
  onSelect: (launch: Launch) => void;
};

export const LaunchCard: React.FC<Props> = ({ launch, onSelect }) => (
  <Card data-testid="card" withBorder shadow="sm" padding="md" radius="md" className={classes.card}>
    {launch.links?.mission_patch_small && (
      <Image data-testid="card-img" className={classes.img} src={launch.links?.mission_patch_small} alt={launch.mission_name} />
    )}
    <Text data-testid="card-mission" className={classes.mission}>{launch.mission_name}</Text>
    <Text data-testid="card-rocket" className={classes.rocket}>{launch.rocket?.rocket_name}</Text>
    <Button data-testid="card-btn" className={classes.btn} onClick={() => onSelect(launch)}>
      See more
    </Button>
  </Card>
);
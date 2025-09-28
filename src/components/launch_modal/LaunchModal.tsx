import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import type { Launch } from "../../types/types";
import classes from "./LaunchModal.module.css";
import { Group, Title, Button, Image, Text } from "@mantine/core";

type Props = {
  launch: Launch | null;
  onClose: () => void;
};

export const LaunchModal: React.FC<Props> = ({ launch, onClose }) => {
  useEffect(() => {
    if (launch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [launch]);

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  if (!launch) return null;

  return ReactDOM.createPortal(
    <div className={classes.overlay} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <Group className={classes.group}>
          <Title data-testid="modal-title" className={classes.title} order={2}>{launch.mission_name}</Title>
          <Button data-testid="modal-btn" className={classes.close} onClick={onClose}>×</Button>
        </Group>
        {launch.links?.mission_patch && <Image className={classes.img} src={launch.links?.mission_patch} alt={launch.mission_name} />}
        <Text data-testid="modal-subtitle" className={classes.subtitle}>Mission name:</Text>
        <Text data-testid="modal-descr" className={classes.descr}>{launch.mission_name}</Text>
        <Text data-testid="modal-subtitle" className={classes.subtitle}>Rocket name:</Text>
        <Text data-testid="modal-descr" className={classes.descr}>{launch.rocket?.rocket_name}</Text>
        <Text data-testid="modal-subtitle" className={classes.subtitle}>Details:</Text>
        <Text data-testid="modal-descr" className={classes.descr}>{launch.details}</Text>
      </div>
    </div>,
    document.body
  );
};
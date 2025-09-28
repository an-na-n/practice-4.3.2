import { useEffect, useReducer } from "react";
import { fetchLaunches2020 } from "../api/api";
import { reducer, initialState } from "../store/reducer";
import { LaunchCard } from "../components/launch_card/LaunchCard";
import { LaunchModal } from "../components/launch_modal/LaunchModal";
import { Container, Grid, Title } from "@mantine/core";
import classes from "./App.module.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "fetch_start" });
    fetchLaunches2020()
      .then((data) => dispatch({ type: "fetch_success", payload: data }))
      .catch((err) => dispatch({ type: "fetch_error", payload: err.message }));
  }, []);

  return (
    <Container className={classes.container}>
      <Title data-testid="title" className={classes.title}>SpaceX Launches 2020</Title>
      <Grid className={classes.grid}>
        {state.launches.map((launch) => (
          <Grid.Col className={classes["grid__col"]} span={4}>
            <LaunchCard key={launch.mission_name} launch={launch} onSelect={(l) => dispatch({ type: "select_launch", payload: l })} />
          </Grid.Col>
        ))}
      </Grid>
      <LaunchModal launch={state.selected} onClose={() => dispatch({ type: "select_launch", payload: null })} />
    </Container>
  );
}

export default App;

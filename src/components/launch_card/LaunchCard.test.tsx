import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { LaunchCard } from "./LaunchCard";
import type { Launch } from "../../types/types";
import { renderWithMantine } from "../../test/utils";

const launch: Launch = {
  mission_name: "Starlink 2",
  links: {
    mission_patch_small: "mission-small.png",
  },
  rocket: {
    rocket_name: "Falcon 9",
  },
};

describe("LaunchCard component tests", () => {
  it("should render the launch card correctly", () => {
    renderWithMantine(
        <LaunchCard launch={launch} onSelect={() => {}}/>
    );

    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("card-img")).toBeInTheDocument();
    expect(screen.getByTestId("card-mission")).toBeInTheDocument();
    expect(screen.getByTestId("card-rocket")).toBeInTheDocument();
    expect(screen.getByTestId("card-btn")).toBeInTheDocument();
    
  });

  it("should call onSelect when the card button clicked", async () => {
    const onSelect = vi.fn();
    renderWithMantine(
      <LaunchCard launch={launch} onSelect={onSelect} />
    );

    await userEvent.click(screen.getByTestId("card-btn"));
    expect(onSelect).toHaveBeenCalledWith(launch);
  })
});
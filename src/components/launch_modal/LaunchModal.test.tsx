import { screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { LaunchModal } from "./LaunchModal";
import type { Launch } from "../../types/types";
import { renderWithMantine } from "../../test/utils";

const launch: Launch = {
  mission_name: "Starlink 2",
  details: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  links: {
    mission_patch: "/mission.png",
  },
  rocket: {
    rocket_name: "Falcon 9",
  },
};

describe("LaunchModal component tests", () => {
    beforeEach(() => {
    let modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.setAttribute("id", "modal-root");
      document.body.appendChild(modalRoot);
    }
  });

  it("shouldn't render anything if launch=null", () => {
    renderWithMantine(
        <LaunchModal launch={null} onClose={() => {}}/>
    );

    expect(screen.queryByTestId("modal-title")).not.toBeInTheDocument();
    
  });

  it("should render the modal window correctly", () => {
    renderWithMantine(
        <LaunchModal launch={launch} onClose={() => { } } />
    );
    
    expect(screen.getByTestId("modal-title")).toHaveTextContent("Starlink 2");
    expect(screen.getAllByTestId("modal-subtitle")[0]).toHaveTextContent("Mission name:");
    expect(screen.getAllByTestId("modal-descr")[0]).toHaveTextContent("Starlink 2");

    expect(screen.getAllByTestId("modal-subtitle")[1]).toHaveTextContent("Rocket name:");
    expect(screen.getAllByTestId("modal-descr")[1]).toHaveTextContent("Falcon 9");

    expect(screen.getAllByTestId("modal-subtitle")[2]).toHaveTextContent("Details:");
    expect(screen.getAllByTestId("modal-descr")[2]).toHaveTextContent("Lorem ipsum dolor sit amet consectetur adipisicing elit");
  })

  it("should call onClose when the close button clicked", async () => {
    const onClose = vi.fn();
    renderWithMantine(<LaunchModal launch={launch} onClose={onClose} />);

    await userEvent.click(screen.getByTestId("modal-btn"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should call onClose when overlay clicked", async () => {
    const onClose = vi.fn();
    renderWithMantine(<LaunchModal launch={launch} onClose={onClose} />);

    await userEvent.click(screen.getByText(/Details:/).closest("div")!.parentElement!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
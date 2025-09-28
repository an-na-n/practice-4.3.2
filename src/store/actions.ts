import type { Launch } from "../types/types";

export type State = {
  launches: Launch[];
  loading: boolean;
  error: string | null;
  selected: Launch | null;
};

export type Action =
  | { type: "fetch_start" }
  | { type: "fetch_success"; payload: Launch[] }
  | { type: "fetch_error"; payload: string }
  | { type: "select_launch"; payload: Launch | null };
import type { Launch } from "../types/types";

export async function fetchLaunches2020(): Promise<Launch[]> {
  const res = await fetch("https://api.spacexdata.com/v3/launches?launch_year=2020");
  if (!res.ok) throw new Error("Failed to fetch launches");
  const data = await res.json();
  return data as Launch[];
}
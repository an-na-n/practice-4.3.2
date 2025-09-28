export type Launch = {
  mission_name: string;
  details?: string;
  links?: {
    mission_patch?: string;
    mission_patch_small?: string;
  };
  rocket?: {
    rocket_name?: string;
  };
};
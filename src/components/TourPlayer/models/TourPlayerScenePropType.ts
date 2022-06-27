export interface TourPlayerScenePropType {
  sceneId: string;
  panorama: string;
  hfov: number;
  pitch: number;
  yaw: number;
  lockPitch?: boolean;
  lockYaw?: boolean;
  draggable?: boolean;
  sceneName: string;
  children?: JSX.Element | JSX.Element[];
}

export interface TourPlayerHotspotPropType {
  id: string;
  type: "info" | "location";
  pitch: number;
  yaw: number;
  sceneId?: string;
  tooltip: string;
  minPitch?: number;
  maxPitch?: number;
  minYaw?: number;
  maxYaw?: number;
  draggable?: boolean;
}

// export type VitualSceneType = {
//   _id: string;
//   room: string;
//   hfov: number;
//   pitch: number;
//   yaw: number;
//   type: "equirectangular";
//   panorama: string;
//   [x: string]: any;
//   hotSpots: {
//     pitch: number;
//     yaw: number;
//     type: string;
//     text: string;
//     sceneId?: string;
//     [x: string]: any;
//   }[];
// };

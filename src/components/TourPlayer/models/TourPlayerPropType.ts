import Tour from "../libraries";
import Pannellum from "../libraries";
import { TourPlayerHotspotPropType } from "./TourPlayerScenePropType";
export interface DefaultPropType {
  audioSrc?: string;
  firstScene?: string;
  sceneFadeDuration?: number;
}

export interface RoomInfoPropType {
  roomName: string;
  roomGalleries?: string[];
  roomDescription?: string;
}

export interface TourPlayerPropType extends DefaultPropType, RoomInfoPropType {
  draggable?: boolean;
  onDraggable?: (hotspot: TourPlayerHotspotPropType) => void;
  children: JSX.Element | JSX.Element[];
}

export type ViewerPropsType = ReturnType<typeof Tour.viewer>;

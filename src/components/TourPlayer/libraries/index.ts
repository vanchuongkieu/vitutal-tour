import Pannellum from "./pannellum/Pannellum";
import { DefaultPropType, RoomInfoPropType } from "../models/TourPlayerPropType";
import { TourPlayerScenePropType } from "../models/TourPlayerScenePropType";

type Container = HTMLElement | string | null;
type Config = {
  default: DefaultPropType;
  roomInfo: RoomInfoPropType;
  scenes: TourPlayerScenePropType;
};

export type ViewerPropsType = ReturnType<typeof Pannellum.viewer>;

const Tour = {
  viewer: (container: Container, config: Config) => {
    return Pannellum.viewer(container, config);
  },
};

export default Tour;

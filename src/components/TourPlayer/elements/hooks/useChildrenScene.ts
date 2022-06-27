import { useMemo, Children } from "react";
import { TourPlayerScenePropType } from "../../models/TourPlayerScenePropType";
import { TourPlayerHotspotPropType } from "./../../models/TourPlayerScenePropType";

interface HotspotPropType {
  props: TourPlayerHotspotPropType;
}

const useChildrenScene = (children: JSX.Element | JSX.Element[], draggable?: boolean) => {
  const mappingHotspot = ({ props }: HotspotPropType) => {
    let hotspotObj = {
      ...props,
      text: props.tooltip,
    };
    if (draggable == true) {
      hotspotObj.draggable = true;
      delete hotspotObj.sceneId;
    } else {
      hotspotObj.sceneId = props.sceneId;
      delete hotspotObj.draggable;
    }

    return hotspotObj;
  };

  const scenes = useMemo(() => {
    const childrenScenes = Children.map(children, (child) => child.props);

    return childrenScenes.reduce((object: any, current: TourPlayerScenePropType) => {
      const hotspots = current.children ? Children.map(current.children, mappingHotspot) : [];

      let lockScene = {};
      if (current.lockPitch) {
        lockScene = {
          ...lockScene,
          minPitch: current.pitch,
          maxPitch: current.pitch,
        };
      }

      if (current.lockYaw) {
        lockScene = {
          ...lockScene,
          minYaw: current.yaw,
          maxYaw: current.yaw,
        };
      }

      const sceneObj = {
        ...lockScene,
        yaw: current.yaw,
        hfov: current.hfov,
        pitch: current.pitch,
        type: "equirectangular",
        hotSpots: [...hotspots],
        cssMaker: "custom-maker",
        panorama: current.panorama,
        sceneName: current.sceneName,
      };

      return {
        ...object,
        [current.sceneId]: sceneObj,
      };
    }, {});
  }, [children]);

  return scenes;
};

export default useChildrenScene;

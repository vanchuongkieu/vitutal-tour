import { useState, useEffect, createRef } from "react";

import TourPlayerScene from "./TourPlayerScene";
import TourPlayerHeader from "./TourPlayerHeader";
import Tour, { ViewerPropsType } from "../libraries";
import useChildrenScene from "./hooks/useChildrenScene";
import { RoomInfoPropType, TourPlayerPropType } from "../models/TourPlayerPropType";

import styles from "../styles/TourPlayer.module.css";

interface RoomPropType extends RoomInfoPropType {
  sceneName: string;
}

const initialRoomInfo: RoomPropType = {
  roomName: "",
  sceneName: "",
  roomGalleries: [],
  roomDescription: "",
};

const TourPlayer = ({ children, draggable, ...props }: TourPlayerPropType) => {
  const vitualTourRef = createRef<HTMLDivElement>();
  const scenes = useChildrenScene(children, draggable);
  const [viewer, setViewer] = useState<ViewerPropsType>();
  const [roomInfo, setRoomInfo] = useState<RoomPropType>(initialRoomInfo);

  useEffect(() => {
    const tourViewer = Tour.viewer(vitualTourRef.current, {
      default: {
        audioSrc: props.audioSrc || "",
        sceneFadeDuration: props.sceneFadeDuration || 1000,
        firstScene: props.firstScene || Object.keys(scenes)[0],
      },
      roomInfo: {
        roomName: props.roomName,
        roomGalleries: props.roomGalleries || [],
        roomDescription: props.roomDescription || "",
      },
      scenes: scenes,
    });

    setViewer(tourViewer);

    return () => tourViewer.destroy();
  }, [vitualTourRef.current]);

  useEffect(() => {
    if (viewer) {
      viewer.on("load", () => {
        setRoomInfo({
          ...viewer.getRoomInfo(),
          sceneName: viewer.sceneName as string,
        });
      });
      viewer.dragHandlerFunc(props.onDraggable);
    }
  }, [viewer, roomInfo]);

  return (
    <div className={styles.tourWrapper}>
      <TourPlayerHeader viewer={viewer} roomName={roomInfo.roomName} sceneName={roomInfo.sceneName} />
      <div ref={vitualTourRef} className={styles.tourPlayer}></div>
    </div>
  );
};

TourPlayer.TourScene = TourPlayerScene;

export default TourPlayer;

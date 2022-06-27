import { useEffect, useState } from "react";
import { FaCompress, FaExpand, FaSearchMinus, FaSearchPlus, FaVolumeUp } from "react-icons/fa";
import { ViewerPropsType } from "../libraries";
import { RoomInfoPropType } from "../models/TourPlayerPropType";

import styles from "../styles/TourPlayerHeader.module.css";

type Props = {
  roomName: string;
  sceneName: string;
  viewer?: ViewerPropsType;
};

const TourPlayerHeader = ({ viewer, roomName, sceneName }: Props) => {
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  const onFullScreen = () => {
    setFullscreen(!fullscreen);
    viewer?.toggleFullscreen();
  };

  const onZoomIn = () => {
    viewer?.setHfov(viewer.getHfov() - 10);
  };

  const onZoomOut = () => {
    viewer?.setHfov(viewer.getHfov() + 10);
  };

  return (
    <>
      <div className={styles["vitual-header"]}>
        <div className={styles["vitual-header-name"]}>{roomName}</div>
        <div className={styles["vitual-header-scene-name"]}>
          <span>{sceneName}</span>
        </div>
      </div>
      <div className={styles.controlsWrapper}>
        <div className={styles.controls}>
          <div className={styles.ctrl}>
            <FaVolumeUp />
          </div>
        </div>
        <div className={styles.controls}>
          <div className={styles.ctrl} onClick={onZoomIn} title="Phóng to">
            <FaSearchPlus />
          </div>
          <div className={styles.ctrl} onClick={onZoomOut} title="Thu nhỏ">
            <FaSearchMinus />
          </div>
          <div className={`${styles.ctrl} ${styles["order-1"]}`} onClick={onFullScreen} title="Toàn màn hình">
            {fullscreen ? <FaCompress /> : <FaExpand />}
          </div>
        </div>
      </div>
    </>
  );
};

export default TourPlayerHeader;

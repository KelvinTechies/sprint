import { useCallback } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onLaunchTextClick = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerChild} />
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/group-1124@2x.png" />
        <div className={styles.sprintIqWrapper}>
          <img className={styles.sprintIqIcon} alt="" src="/sprint-iq.svg" />
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} onClick={onRectangleClick} />
        <div className={styles.launch} onClick={onLaunchTextClick}>
          Launch
        </div>
      </div>
    </header>
  );
};

export default Header;

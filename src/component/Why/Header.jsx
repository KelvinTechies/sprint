import { useCallback } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const onButtonShapeClick = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onLaunchTextClick = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerChild} />
      <div className={styles.headerContent}>
        <img
          className={styles.headerContentChild}
          alt=""
          src="/group-1124@2x.png"
        />
        <div className={styles.brand}>
          <img className={styles.sprintIqIcon} alt="" src="/sprint-iq.svg" />
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.buttonShape} onClick={onButtonShapeClick} />
        <div className={styles.launch} onClick={onLaunchTextClick}>
          Launch
        </div>
      </div>
    </header>
  );
};

export default Header;

import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  return (
    <div className={styles.timPhotoParent}>
      <div className={styles.timPhoto}>
        <img className={styles.timPhotoChild} alt="" src="/group-1189@2x.png" />
        <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
      </div>
      <b className={styles.timAdigwe}>Tim Adigwe</b>
      <div className={styles.smartContractDeveloperWrapper}>
        <div className={styles.smartContractDeveloper}>
          Smart Contract Developer
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;

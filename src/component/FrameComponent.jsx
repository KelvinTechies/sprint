import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <footer className={styles.desktopInner}>
      <div className={styles.featureContentParent}>
        <div className={styles.featureContent}>
          <div className={styles.automatedIncentivizedFeature}>
            Automated incentivized feature
          </div>
        </div>
        <div className={styles.featureContent1}>
          <div className={styles.quizTemplatesDedicated}>
            Quiz templates dedicated for Web3 personal assesment
          </div>
        </div>
        <div className={styles.intuitiveDesignTailored}>
          Intuitive design, tailored to ensure game creators and players
          navigate easily on the platform.
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;

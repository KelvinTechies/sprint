import styles from "./Why/Why.module.css";

function Transform() {
  return (
    <div className="desktop">
      <div className={styles.transformingCommunityEngagemWrapper}>
        <b className={styles.transformingCommunityEngagem}>
          Transforming Community Engagement & Participation in the Web3 Through
          Cutting Edge Solutions
        </b>
      </div>
      <div className={styles.desktopItem} />
      <div className={styles.desktopInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.featuresListWrapper}>
        <div className={styles.featuresList}>
          <div className={styles.featureItems}>
            <div className={styles.automatedIncentivizedFeature}>
              Automated incentivized feature
            </div>
          </div>
          <div className={styles.featureItems}>
            <div className={styles.quizTemplatesDedicated}>
              Quiz templates dedicated for Web3 personal assessment
            </div>
          </div>
          <div className={styles.featureItems}>
            <div className={styles.intuitiveDesignTailored}>
              Intuitive design, tailored to ensure game creators and players
              navigate easily on the platform.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transform;

import styles from "./Engagement.module.css";

const Engagement = () => {
  return (
    <section className={styles.engagement}>
      <div className={styles.engagementChild} />
      <div className={styles.subshape} />
      <div className={styles.frameParent}>
        <div className={styles.touchWrapper}>
          <div className={styles.touch}>
            <h1 className={styles.getInTouch}>Get In Touch</h1>
            <h1 className={styles.getInTouch1}>Get In Touch</h1>
          </div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
        </div>
      </div>
      <div className={styles.collaboration}>
        <div className={styles.weAreOpenToCollaborationParent}>
          <div className={styles.weAreOpenContainer}>
            <p className={styles.weAreOpen}>
              We are open to collaboration, partnership, e.t.c. We are also
              eager to here your thoughts, questions and suggestions regarding
              our platform.
            </p>
            <p className={styles.weLookForward}>
              We look forward to feedbacks from you.
            </p>
          </div>
          <div className={styles.weAreOpenContainer1}>
            <p className={styles.weAreOpen1}>
              We are open to collaboration, partnership, e.t.c. We are also
              eager to here your thoughts, questions and suggestions regarding
              our platform.
            </p>
            <p className={styles.weLookForward1}>
              We look forward to feedbacks from you.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.iconContainer}>
          <div className={styles.iconContainerInner}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
            </div>
          </div>
          <div className={styles.iconContainerChild}>
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
              <img className={styles.vectorIcon3} alt="" src="/vector-3.svg" />
            </div>
          </div>
          <div className={styles.iconContainerInner1}>
            <div className={styles.frameWrapper}>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="/vector-4.svg"
                />
                <img
                  className={styles.vectorIcon5}
                  alt=""
                  src="/vector-5.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.iconContainerInner2}>
            <div className={styles.vectorParent1}>
              <img className={styles.vectorIcon6} alt="" src="/vector-6.svg" />
              <img className={styles.vectorIcon7} alt="" src="/vector-7.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagement;

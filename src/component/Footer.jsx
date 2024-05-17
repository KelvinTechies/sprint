import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1}>
        <div className={styles.footerChild} />
        <div className={styles.footerBackground} />
        <div className={styles.footerContent}>
          <div className={styles.getInTouchContainer}>
            <div className={styles.getInTouch}>
              <h1 className={styles.getInTouch1}>Get In Touch</h1>
              <h1 className={styles.getInTouch2}>Get In Touch</h1>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.footerInner}>
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
        <div className={styles.socialMediaContainer}>
          <div className={styles.socialMedia}>
            <div className={styles.socialMediaInner}>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} alt="" src="/vector-5.svg" />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
            </div>
            <div className={styles.socialMediaChild}>
              <div className={styles.groupParent}>
                <img className={styles.groupIcon} alt="" src="/group.svg" />
                <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-7.svg"
                />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
            </div>
            <div className={styles.socialMediaInner1}>
              <div className={styles.frameWrapper}>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector-9.svg"
                  />
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector-10.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.socialMediaInner2}>
              <div className={styles.vectorParent1}>
                <img
                  className={styles.vectorIcon6}
                  alt=""
                  src="/vector-11.svg"
                />
                <img
                  className={styles.vectorIcon7}
                  alt=""
                  src="/vector-12.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

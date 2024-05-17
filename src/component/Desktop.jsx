import Header from "./Header";
import FrameComponent from "./FrameComponent";
import GroupComponent from "./GroupComponent";
import Footer from "./Footer";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <img className={styles.icon} alt="" src="/98468292734497-4@2x.png" />
      <main className={styles.aboutParent}>
        <section className={styles.aboutContent}>
          <Header />
          <div className={styles.content}>
            <div className={styles.v617Bb02Technology1Parent}>
              <img
                className={styles.v617Bb02Technology1Icon}
                loading="lazy"
                alt=""
                src="/v617bb02technology-1@2x.png"
              />
              <div className={styles.frameChild} />
            </div>
            <h1 className={styles.connectEngageEarn}>Connect Engage, Earn</h1>
            <div className={styles.conquerQuizzesExpandKnowleWrapper}>
              <div className={styles.conquerQuizzesExpand}>
                Conquer Quizzes, Expand Knowledge, and Thrive in the Blockchain
                Revolution
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop;

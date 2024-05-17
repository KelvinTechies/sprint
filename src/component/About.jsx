import Header from "./Header";
import styles from "../component/Desktop.module.css";

const About = () => {
  return (
    <div className={styles.aboutcomponent}>
      <img className={styles.icon} alt="" src="/98468292734497-4@2x.png" />
      <img
        className={styles.v617Bb02Technology1Icon}
        alt=""
        src="/v617bb02technology-1@2x.png"
      />

      <h1 className={styles.about}>{`About `}</h1>
      <h1 className={styles.incentivisedQuizDapp}>
        Incentivised Quiz Dapp for Community, Events, e.t.c
      </h1>

      <div className={styles.aWeb3EducationalContainer}>
        <p className={styles.aWeb3Educational}>
          A web3 educational gaming platform with features that solidify
          knowledge in the blockchain through quiz test accompanied by rewards.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.rewardsAreEarned}>
          Rewards are earned in crypto and its value will be decided by the game
          creator.
        </p>
      </div>
    </div>
  );
};

export default About;

import Transform from "../Transform";
import Engagement from "./Engagement";
import styles from "./Why.module.css";

const Why = () => {
  return (
    <>
      <div className={styles.desktop}>
        <img className={styles.icon} alt="" src="/98468292734497-4@2x.png" />
        <img
          className={styles.v617Bb02Technology1Icon}
          alt=""
          src="/v617bb02technology-1@2x.png"
        />
        <section className={styles.shape} />
        {/* <Engagement /> */}
        <section className={styles.connectEngageEarn}>
          Connect Engage, Earn
        </section>
        <section className={styles.conquerQuizzesExpand}>
          Conquer Quizzes, Expand Knowledge, and Thrive in the Blockchain
          Revolution
        </section>
        <div className={styles.divider} />
        <div className={styles.content}>
          <div className={styles.contentChild} />
          <div className={styles.subtraction}>
            <b className={styles.empty}>1</b>
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.contentItem} />
          <b className={styles.b}>2</b>
        </div>
        <div className={styles.content2}>
          <div className={styles.contentInner} />
          <b className={styles.b1}>3</b>
        </div>
        <section className={styles.about}>{`About `}</section>
        <section className={styles.incentivisedQuizDapp}>
          Incentivised Quiz Dapp for Community, Events, e.t.c
        </section>
        <section
          className={styles.transformingCommunityEngagem}
        >{`Transforming Community Engagement & Participation in the Web3 Through Cutting Edge Solutions`}</section>
        <section className={styles.aWeb3EducationalContainer}>
          <p className={styles.aWeb3Educational}>
            A web3 educational gaming platform with features that solidify
            knowledge in the blockchain through quiz test accompanied by
            rewards.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.rewardsAreEarned}>
            Rewards are earned in crypto and its value will be decided by the
            game creator.
          </p>
        </section>
        <img
          className={styles.subtractIcon}
          loading="lazy"
          alt=""
          src="images/Subtract.png"
        />
        <img
          className={styles.subtractIcon1}
          loading="lazy"
          alt=""
          src="images/Subtract (1).png"
        />
        <h1 className={styles.whyNow}>Why Now?</h1>
        <h1 className={styles.whoAreWe}>Who are we for?</h1>
        <div className={styles.attentionIsFast}>
          Attention is fast shifting to community-first experience both within
          and outside of the web3 ecosystem.
        </div>
        <div className={styles.eventOrganizersWeb3Container}>
          <p className={styles.eventOrganizers}>Event organizers</p>
          <p className={styles.web3Enthusiast}>Web3 enthusiast</p>
          <p className={styles.communityManagers}>Community managers</p>
        </div>
        <div className={styles.automatedIncentivizedFeature}>
          Automated incentivized feature
        </div>
        <div className={styles.content3} />
        <div className={styles.content4} />
        <div className={styles.content5} />
        <div className={styles.quizTemplatesDedicated}>
          Quiz templates dedicated for Web3 personal assesment
        </div>
        <div className={styles.intuitiveDesignTailored}></div>
      </div>
      <Transform />
    </>
  );
};

export default Why;

import Banner from "@components/Banner"
import SplitContentTitleLeft from "@components/SplitContentTitleLeft"
import SplitContentTitleRight from "@components/SplitContentTitleRight"

export default function Home(props) {
  return (
    <>
    <Banner title="Mixed Combative Systems" subtitle="Martial Arts School in Northern California Filipino Escrima | Kickboxing | Submission Grappling | Self-defense" leftButton="Sign up" rightButton="Learn More"/>
  <SplitContentTitleLeft 
  h2="About the school" 
  p1="Mixed Combative Systems ia a hybrid martial art system developed by Master / Coach Brando Castillo through his years of practice in Hapkido, Kickboxing, Jujitsu and Filipino Escrima. Under Coach Brando, students of all ages have participated in competitions located in Sacramento, Bay Area, Los Angeles, Las Vegas, Wisconsin, Floria and the Philippines. " 
        p2="In 2006, MCS first opened its doors in American Canyon, California to the public. Sixteen years later, MCS continues to teach martial arts and promote self-defense, discipline, mental fortitude and a healthy lifestyle.   " />
      <SplitContentTitleRight
        h2="What You Will Learn"
        p1="As a student, you will learn a hybrid form of self-defense that is based on Filipino Martial Arts Methology. It is a non-static, fluid kickboxing based style that flows into the trapping range and works into the locks, throws, takedowns and ground submissions of Filipino Dumog, Korean Hapkido and Japanese Jujitsu."
        p2="Simulation and reactive drills are excellent tools in training. However, we believe the highest level is the ability to train and spar with a non-cooperative partner through real time and intention applied in a safe training environment."
      /></>
  )
}

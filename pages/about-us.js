import Banner from "@components/Banner"
import SplitContentLeft from "@components/SplitContentLeft";
import SplitContentRight from "@components/SplitContentRight";

export default function AboutUs() {
    return (
        <>
            <Banner title="About Us" subtitle="loren ipsum" leftButton="Sign up" rightButton="Learn More" />
            <SplitContentLeft title="2008" subtitle="Learn the basics of punches, kicks, knees and elbos while learning skills to defend yourself in real life situations." />
            <SplitContentRight title="Escrima / Filipino Stickfighting" subtitle="Learn FMA (Filipino Martial Arts) skills that emphasizs sticks, blads, knives and other bladed weaponry." />
            <SplitContentLeft title="Submission Grappling" subtitle="Learn locks, throws, takedowns and ground submissions blended from the styles of Hapkido, Dumog, Jiujitsu that allows one to be comfortable on the ground." />
        </>
    )
}

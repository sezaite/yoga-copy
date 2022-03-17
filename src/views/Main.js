import TopBanner from '../components/banners/TopBanner';
import Nav from '../components/nav/Nav';
import HeaderMain from '../components/headers/HeaderMain';
import ProgramsFeatureList from "../components/program/ProgramsFeatureList";

const Main = () => {
    return ( 
        <>
        <TopBanner />
         <Nav />
         <HeaderMain />
         <ProgramsFeatureList />
        </>
     );
}
 
export default Main;
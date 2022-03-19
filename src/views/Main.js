import TopBanner from '../components/banners/TopBanner';
import Nav from '../components/nav/Nav';
import HeaderMain from '../components/headers/HeaderMain';
import ProgramsFeatureList from "../components/program/ProgramsFeatureList";
import Plans from '../components/plans/Plans';
import Reviews from '../components/reviews/Reviews';
import DukAccordion from '../components/duk/DukAccordion';
import AppFeaturesList from '../components/appFeatures/AppFeaturesList';
import ImageBlock from "../components/appFeatures/ImageBlock";
import SectionHeader from '../components/headers/SectionHeader';
import OrangeBtn from '../components/buttons/OrangeBtn';

const Main = () => {
    return ( 
        <>
        <TopBanner />

         <Nav />
         <HeaderMain />
         <div className="container-md">
             <div className="row gap-4 flex-sm-wrap justify-content-between">
                <div className="col-sm-6">
                    <Plans name="top"/>
                 </div>
                 <div className="col-sm-6">
                    <ProgramsFeatureList />
                 </div>
             </div>
         </div>
         
         <div className="container-lg">
         <SectionHeader text="Hear success stories from our clients"/>
            <div className="row gap-2 flex-md-wrap justify-content-between">
                <Reviews />
                <OrangeBtn text="Get my plan" btnClass="orange-btn mobile-only full-elem mb-6"/>
            </div>
         </div>
         <div className="container-md accent-container">
             <div className="row flex-md-wrap gap-4 justify-content-between reverse-order-md">
                <div className="col-md-6">
                    <ImageBlock />
                 </div>
                 <div className="col-md-6">
                    <AppFeaturesList />
                 </div>
             </div>
         </div>

        <DukAccordion />
       
         <div className="container-md">
             <h2 className="title-lg desktop-only">Start your yoga program today!</h2>
             <div className="row flex-sm-wrap gap-4 justify-content-between">
                <div className="col-sm-6">
                    <Plans name="bottom"/>
                 </div>
                 <div className="col-sm-6">
                    <ProgramsFeatureList />
                 </div>
                 
             </div>
         </div>
        </>
     );
}
 
export default Main;
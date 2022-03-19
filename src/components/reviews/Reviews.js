import pic1 from "../../img/image1.png"
import pic2 from "../../img/image2.png"
import pic3 from "../../img/image3.png"
import Review from "./Review";
import SectionHeader from "../headers/SectionHeader";


const Reviews = () => {
    const reviews = [
        {img: pic1, stars: 5, name: "Emily", age: "28", location: "Delaware, NJ", review:"I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts."},
        {img: pic2, stars: 5, name: "Kylie", age: "40", location: "Los Angeles", review: "I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress."},
        {img: pic3, stars: 5, name: "Jesica", age: "51", location: "San Francisco, CA", review:"I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation."}
    ];
    return ( 
        <>
       
            {
            reviews.map((item, index) => (
                    <Review key={index} img={item.img} key={index} stars={item.stars} name={ item.name } age={item.age} location={item.location} review={item.review} />
        ))
        }
        </>
     );
}
 
export default Reviews;
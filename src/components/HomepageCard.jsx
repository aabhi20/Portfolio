import movie from "../assets/images/1st.jpeg";
import Portfolio from "../assets/images/2nd.jpeg";
import food from "../assets/images/3rd.jpeg";

function HomepageCard() {
  return (
    <div className="relative w-[30vw] pt-6 lg:pt-0 lg:w-[30vw] h-[33vh]">
      <img
        src={movie}
        alt="Movie"
        className="absolute w-[30vw] sm:w-[170px]  rounded-xl shadow-xl transform rotate-[-20deg] translate-x-[-80px] z-0"
      />
      <img
        src={Portfolio}
        alt="Portfolio"
        className="absolute w-[30vw] sm:w-[170px] border-2 border-white rounded-xl shadow-xl transform rotate-0 z-10"
      />
      <img
        src={food}
        alt="Food"
        className="absolute w-[30vw] sm:w-[170px] rounded-xl shadow-xl transform rotate-[20deg] translate-x-[80px] z-0"
      />
    </div>
  );
}

export default HomepageCard;

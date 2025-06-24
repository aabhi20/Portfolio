import movie from "../assets/images/1st.jpeg";
import todo from "../assets/images/todo.jpeg";
import todo2 from "../assets/images/todo2.png";
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
        src={food}
        alt="food"
        className="absolute w-[30vw] sm:w-[170px] rounded-xl shadow-xl transform rotate-0 z-10"
      />
      <img
        src={todo2}
        alt="todo"
        className="absolute object-cover w-[30vw] md:h-[35vh] sm:w-[170px] rounded-[8px] shadow-xl transform rotate-[19deg] translate-x-[78px] z-0"
      />
    </div>
  );
}

export default HomepageCard;

import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Swal from 'sweetalert2'

export default function App() {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluate";
      case 1:
        return "Dissatifation";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return "You can write a review here?";
      case 1:
        return "Why are you dissatifaction?";
      case 2:
        return "Why are you unssatifaction?";
      case 3:
        return "How can we improve?";
      case 4:
        return "What is your problem?";
      case 5:
        return "Why do you like the product?";
      default:
        return "You can write a review here?";
    }
  };

  const handleClick = () =>{
    Swal.fire(
        'Thankyou For your feedback'
    )
  }
  return (
    <div className="App">
      <div className="backg">
        <div className="formc">
          
          <h2>Rating and Review</h2>
          <div>
            <h1>{handleText()}</h1>
            {Array(5)
              .fill()
              .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                  <AiFillStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                ) : (
                  <AiOutlineStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                )
              )}
          </div>
          <div>
            <form>
          <input
           placeholder= 'productname'
           className="w-[100px] h-[100px] px-5 py-2"
           />
          <textarea placeholder={handlePlaceHolder()}></textarea>
          <button className={` ${!number && "disabled"} `}onClick={handleClick}>Submit
          </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

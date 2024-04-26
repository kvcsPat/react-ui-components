import Accordion from "./components/accordion/Accordion";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import "./styles-global/reset.css";
import "./styles-global/global.css";

function App() {
  return (
    <>
      <Accordion />
      <StarRating />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
}

export default App;

import Accordion from "./components/accordion/Accordion";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMore from "./components/load-more/LoadMore";
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
      <LoadMore />
    </>
  );
}

export default App;

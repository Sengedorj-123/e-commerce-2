import { Header } from "./components/Header";
import { Carousel } from "./components/pages/Carousel";

export default function Home() {
  return (
    <div className="container m-auto">
      <Header />
      <Carousel />
    </div>
  );
}

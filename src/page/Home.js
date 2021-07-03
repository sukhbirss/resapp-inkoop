import "./styles.css";
import Sidebar from "../components/sidebar/Sidebar";
import RightPortion from "../components/rightPortion/RightPortion";
import Mobile from "../components/mobile/Mobile";

export default function Home() {
  return (
    <div className="home">
        <Sidebar />
        <RightPortion />
      <Mobile />
    </div>
  );
}

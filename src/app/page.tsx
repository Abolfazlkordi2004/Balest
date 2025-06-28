import SideLeftContent from "./components/sideLeftContent";
import SideRightContent from "./components/sideRightContent";
import Main from "./main";

export default function Home() {
  return (
    <div>
      <SideLeftContent />
      <SideRightContent/>
      <Main />
    </div>
  );
}

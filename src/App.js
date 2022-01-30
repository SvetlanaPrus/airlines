import {Logo} from "./components/Logo";
import {MenuTop} from "./components/MenuTop";
import {Filter} from "./components/Filter";
import {Tickets} from "./components/Tickets";

export default function App() {
  return (
    <div>
      <Logo/>
      <MenuTop/>
      <Filter/>
      <Tickets/>
    </div>
  );
}

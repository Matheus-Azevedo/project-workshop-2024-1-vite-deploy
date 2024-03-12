import { Nav } from "react-bootstrap";
import Styles from "./Home.module.css";
import { NavWrapper } from "../../shared";

export function Home() {
  return (
    <>
      <NavWrapper>
        <Nav.Link href="/characters">Characters</Nav.Link>
        <Nav.Link href="/episodes">Episodes</Nav.Link>
        <Nav.Link href="/locations">Locations</Nav.Link>
      </NavWrapper>
      <div className={Styles.background_image} />
    </>
  );
}

import { Button, Card, Nav } from "react-bootstrap";
import { NavWrapper } from "../../shared";
import { useEffect, useState } from "react";
import Styles from "./Episodes.module.css";
import axios from "axios";

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export function Episodes() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    async function fetchEpisodes() {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/episode?page=${1}`
      );
      setEpisodes(data.results);
    }
    fetchEpisodes();
  }, []);

  return (
    <>
      <NavWrapper>
        <Nav.Link href="/">Back</Nav.Link>
      </NavWrapper>
      <div className={Styles.container_cards}>
        {episodes.map((episode) => (
          <Card style={{ width: "18rem" }}>
            <Card.Body className={Styles.container_body}>
              <Card.Title>{episode.name}</Card.Title>
              <Card.Text>Data de Estreia: {episode.air_date}</Card.Text>
              <Card.Text>Episodio: {episode.episode}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

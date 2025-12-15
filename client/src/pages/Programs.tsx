import { useEffect, useState } from "react";
import "./Program.css";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function Programs() {
  const [series, setSeries] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((programsData) => setSeries(programsData))
      .catch(() => console.error("Erreur lors du chargement"));
  }, []);

  return (
    <section className="programs">
      {series.map((serie) => (
        <article key={serie.id} className="program-card">
          <h2>{serie.title}</h2>
          <p>{serie.synopsis}</p>
          <p className="country">{serie.country}</p>
          <p>{serie.year}</p>
          <img src={serie.poster} alt={`Affiche de la série ${serie.title}`} />
        </article>
      ))}
    </section>
  );
}

export default Programs;

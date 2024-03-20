import { useState, useEffect } from "react";
import Card from "./Card";

const List = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const parsedData = (data) => {
    return {
      title: data.title,
      img: data.thumbnail,
      description: data.short_description,
    };
  };

  useEffect(() => {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4a3b6cc2cfmsh60de1a428253697p10f39fjsnca1043797710",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setGames(data);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {loading && (
        <p className="text-white text-6xl text-center">Cargando contenido...</p>
      )}
      {error && (
        <p className="text-orange-500 text-6xl text-center">{error.message}</p>
      )}
      {games?.map((game) => {
        const parsedGame = parsedData(game);
        return <Card key={game.id} data={parsedGame} />;
      })}
    </div>
  );
};

export default List;

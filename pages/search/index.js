import axios from "axios";
import InputSearch from "../../src/components/InputSearch";

export async function getServerSideProps(context) {
  let podcasts = [];
  try {
    const response = await axios.get(
      `https://itunes.apple.com/search?term=${context.query.param}&entity=podcast`
    );
    podcasts = response.data.results;
  } catch (error) {
    console.error(error);
  }
  return {
    props: { podcasts },
  };
}

export default function Search({ podcasts }) {
  /**/
  return (
    <div>
      <InputSearch />
      <h1>Resultado da busca:</h1>
      {podcasts.length ? (
        <table>
          <thead>
            <tr>
              <th>Podcast</th>
              <th>Capa</th>
            </tr>
          </thead>
          <tbody>
            {podcasts.map((podcast, key) => (
              <tr key={key}>
                <td>{podcast.collectionName}</td>
                <td>
                  <img src={podcast.artworkUrl30} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>Nenhum episódio encontrado</h4>
      )}
    </div>
  );
}

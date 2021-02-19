import IPodcast from '@core/interfaces/IPodcast';
import PodcastService from '@core/services/PodcastService';
import axios from 'axios';
import InputSearch from '../../src/components/InputSearch';

export async function getServerSideProps(context) {
  let podcasts: IPodcast[] = [];
  try {
    podcasts = await PodcastService.search(context.query.param);
  } catch (error) {
    console.error(error);
  }
  return {
    props: { podcasts }
  };
}

export default function Search({ podcasts }: {podcasts: IPodcast[]}) {
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
                <td>{podcast.name}</td>
                <td>
                  <img src={podcast.artwork.url100} />
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

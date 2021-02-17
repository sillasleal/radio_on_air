import InputSearch from "../../src/components/InputSearch";

export default function Search() {
  const podcasts = [];
  /**/
  return (
    <div>
      <InputSearch />
      <h1>Resultado da busca:</h1>
      <table>
        <thead>
          <tr>
            <th>Podcast</th>
          </tr>
        </thead>
        <tbody>
          {podcasts.map((podcast, key) => (
            <tr key={key}>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

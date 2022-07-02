export async function rateMovie({ id, rateNum }) {
  const data = await fetch("PUT", `/movies/${id}`, {});
  const movies = await data.json();
  return movies;
}

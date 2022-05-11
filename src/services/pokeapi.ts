export default async function getPokemons() {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=20&limit=200`
    );
    const data = await res.json();
    return data;
  } catch (error) {}
}

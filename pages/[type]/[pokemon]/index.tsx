export default function PokemonByName({ ...props }) {
  return <ul>{props.name}</ul>;
}

export async function getServerSideProps(context: any) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.params.pokemon}`
  );
  const data = await res.json();

  return {
    props: data,
  };
}

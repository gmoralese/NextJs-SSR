import Link from "next/link";

export default function PokemonByTypes({ ...props }) {
  return (
    <ul>
      {props.pokemon &&
        props.pokemon.map((pokemon: any, index: number) => {
          return (
            <div key={index}>
              <Link href={`/${props.type.type}/${pokemon.pokemon.name}`}>
                <li key={index}>{pokemon.pokemon.name}</li>
              </Link>
              <br />
            </div>
          );
        })}
    </ul>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/type/${context.params.type}`
  );
  console.log(res);
  const data = await res.json();

  return {
    props: {
      pokemon: data.pokemon,
      type: context.params,
    },
  };
}

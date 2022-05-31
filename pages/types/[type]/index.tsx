import Link from "next/link";

export default function PokemonByTypes({ ...props }) { 
  console.log(props)
  return (
    <ul>
    {props.pokemon && props.pokemon.map((pokemon: any, index: number) => {
      return <div key={index}><Link href={`/types/${props.type.type}/${pokemon.pokemon.name}`}><li key={index}>{pokemon.pokemon.name}</li></Link><br /></div>;
    })}
  </ul>
  )
}


export async function getStaticProps(context: any) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/type/${context.params.type}`
  );
  const data = await res.json();

  return {
    props: {
      pokemon: data.pokemon,
      type: context.params
      }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { "type": "string"} }
    ],
    fallback: true // false or 'blocking'
  };
}
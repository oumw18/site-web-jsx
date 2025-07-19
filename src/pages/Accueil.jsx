import Bg_Img from "../assets/colibri.jpg";
import CardList from "../components/CardList";

function Hero() {
  return (
    <section className="flex items-center justify-around">
      <div className="">
        <h1 className="mb-3 text-4xl font-bold">
          Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit.
        </h1>
        <p className="mb-3 text-2xl">
          Dolor sit amet consectetur adipisicing elit. Fuga earum necessitatibus
          <br /> sit fugit nesciunt libero itaque autem enim aspernatur
          repellendus.
        </p>
        <button className="btn btn-primary text-[1.15rem]">Start</button>
      </div>
      <img src={Bg_Img} alt="colibri" className="h-90 w-85 rounded-2xl" />
    </section>
  );
}

export default function Accueil() {
  return (
    <>
      <Hero />
      <CardList />
    </>
  );
}

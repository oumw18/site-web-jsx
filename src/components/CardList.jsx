import { Book, Code, Heart } from "lucide-react";

export default function CardList() {
  const cards = [
    {
      titre: "Apprendre",
      icon: <Book className="h-10 w-10 text-blue-600" />,
      description: "Découvre de nouvelles connaissance chaque jour.",
    },
    {
      titre: "Coder",
      icon: <Code className="h-10 w-10 text-green-600" />,
      description: "Créer des application utiles avec passion.",
    },
    {
      titre: "Partager",
      icon: <Heart className="h-10 w-10 text-red-600" />,
      description: "Aide les autres à progresser avec toi.",
    },
  ];
  return (
    <section className="my-15">
      <h2 className="text-center text-3xl">Cartes</h2>
      <article className="mt-4 grid grid-cols-1 place-items-center p-4 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex h-full w-80 flex-col items-center rounded-2xl border border-white/25 bg-white/50 p-4 text-center shadow-md backdrop-blur-lg transition-transform hover:scale-105"
          >
            <div className="mb-4">{card.icon}</div>
            <h2 className="mb-2 text-xl font-bold">{card.titre}</h2>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
}
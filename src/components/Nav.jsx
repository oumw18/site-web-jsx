import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const items = [
    { nom: "Accueil", lien: "/" },
    { nom: "A propos", lien: "/about" },
    { nom: "Service", lien: "/service" },
    { nom: "Contact", lien: "/contact" },
  ];

  return (
    <nav className="flex items-center space-x-9">
      {items.map((item, index) => (
        <NavLink
          key={index}
          to={item.lien}
          className={({ isActive }) =>
            `cursor-pointer pb-1 text-[1.2rem] transition-all duration-200 hover:text-blue-500 ${
              isActive
                ? "border-b-2 border-blue-500 font-bold text-blue-600"
                : ""
            }`
          }
        >
          {item.nom}
        </NavLink>
      ))}
    </nav>
  );
}

import Nav from "./Nav";

function Header() {
  return (
    <header className="bg-cyan-900 p-3.5 flex items-center justify-between">
      <h1 className="text-4xl font-bold">Logo</h1>
      <Nav />
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
      />
    </header>
  );
}

export default Header;

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-4 px-6 py-3 text-white max-w-7xl mx-auto h-14">
      <li className="text-md font-semibold list-none cursor-pointer">Home</li>
      <li className="text-md font-semibold list-none cursor-pointer">About</li>
      <li className="text-md font-semibold list-none cursor-pointer">Portfolio</li>
      <li className="text-md font-semibold list-none cursor-pointer">Contact</li>
    </nav>
  );
};

export default Navbar;

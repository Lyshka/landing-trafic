import Link from "next/link";

const Nav = ({ navData, header }) => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-24">
        {navData.map(({ name, href }, idx) => (
          <li key={idx}>
            <Link href={href}>
              <a className={`${header ? "text-primary" : "text-white"} cursor-pointer hover:text-accent-hover transition`}>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

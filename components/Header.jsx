import Link from "next/link";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Destination",
    route: "/destination",
  },
  {
    label: "Crew",
    route: "/crew",
  },
  {
    label: "Technology",
    route: "/technology",
  },
];

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

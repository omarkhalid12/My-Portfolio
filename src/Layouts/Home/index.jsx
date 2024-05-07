import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';
import { socialLinks } from '../../constants';
import SideMenu from '../../components/SideMenu';

export default function Home() {
  return (
    <main>
      <Navbar />
      <SideMenu />
      <aside className="aside">
        <ul className="aside-list">
          {socialLinks.map((link) => (
            <li className="aside-list-item" key={link.id}>
              <a
                data-name={link.name}
                className="aside-list-link"
                target="_blank"
                rel="noreferrer"
                href={link.href}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <div className="nav-right">
        <a className="nav-right-link" href="mailto:omarkhalid7999@gmail.com">
          omarkhalid7999@gmail.com
        </a>
      </div>
      <section className="container">
        <Outlet />
      </section>
    </main>
  );
}

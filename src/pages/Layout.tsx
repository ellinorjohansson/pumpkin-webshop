import { Outlet } from 'react-router';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

// Hur sidan ska formas, i detta fallet - header och footer på alla sidor och outlet (innehållet) mellan.

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

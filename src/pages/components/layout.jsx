import Navbar from './navbar';
import Footer from './Footer';
import Konten from './konten';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      {/* Konten Halaman */}
      <Konten/>
      <main className="flex-grow">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

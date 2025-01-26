import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl m-auto">{children}</main>
      <Footer />
    </div>
  );
}

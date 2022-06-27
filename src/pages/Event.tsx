import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Sidebar } from "../components/Sidebar";

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex flex-1">
        <Main />
        <Sidebar />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

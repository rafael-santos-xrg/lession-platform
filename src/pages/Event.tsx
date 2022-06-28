import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { RootMain } from "../components/RootMain";
import { Sidebar } from "../components/Sidebar";

export function Event() {
  const { slug } = useParams<{ slug : string }>(); 
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex flex-1">
        {slug ? <Main /> : <RootMain />}
        <Sidebar />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

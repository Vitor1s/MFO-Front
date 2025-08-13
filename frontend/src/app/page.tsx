"use client";

import ClientesPage from "./clientes/page";
import { useNavigation } from "@/contexts/NavigationContext";

export default function Home() {
  const { currentPage } = useNavigation();

  // Renderizar página baseada na navegação
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <ClientesPage />;
      case 'projecao':
        return (
          <div className="p-6 bg-black min-h-screen text-white">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-white mb-8">Projeção</h1>
              <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                <p className="text-gray-300">Conteúdo da página de Projeção será implementado aqui.</p>
              </div>
            </div>
          </div>
        );
      case 'historico':
        return (
          <div className="p-6 bg-black min-h-screen text-white">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-white mb-8">Histórico</h1>
              <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                <p className="text-gray-300">Conteúdo da página de Histórico será implementado aqui.</p>
              </div>
            </div>
          </div>
        );
      default:
        return <ClientesPage />;
    }
  };

  return renderPage();
}

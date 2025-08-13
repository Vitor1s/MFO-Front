export default function ClientesPage() {
  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

        {/* Primeira linha de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card de Alinhamento com Planejamento */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <h3 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-gray-700">
              Alinhamento com planejamento
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Superior a 90%</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-green-400">14%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">90% a 70%</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-yellow-400">20%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">70% a 50%</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-orange-400">45%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Inferior a 50%</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-red-400">21%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card de Clientes com Planejamento */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <h3 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-gray-700">
              Clientes com planejamento
            </h3>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <div className="w-full h-full rounded-full border-8 border-gray-800 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-8 border-green-500 border-r-transparent transform rotate-45"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-400">75%</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-lg font-semibold text-green-400">219 clientes</p>
            </div>
          </div>

          {/* Card de Perfis com Seguro */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <h3 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-gray-700">
              Perfis com seguro pelo total...
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <div className="w-full h-full rounded-full border-4 border-gray-800">
                    <div className="w-full h-full rounded-full border-4 border-blue-500 border-r-transparent transform rotate-36"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-400">60%</span>
                  </div>
                </div>
                <span className="text-xs text-gray-300">Com filho</span>
              </div>
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <div className="w-full h-full rounded-full border-4 border-gray-800">
                    <div className="w-full h-full rounded-full border-4 border-blue-500 border-r-transparent transform rotate-18"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-400">50%</span>
                  </div>
                </div>
                <span className="text-xs text-gray-300">Solteiro</span>
              </div>
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <div className="w-full h-full rounded-full border-4 border-gray-800">
                    <div className="w-full h-full rounded-full border-4 border-blue-500 border-r-transparent transform rotate-12"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-400">40%</span>
                  </div>
                </div>
                <span className="text-xs text-gray-300">Com dependentes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card de Atualização do Planejamento */}
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-gray-700">
            Atualização do planejamento
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-300 font-medium">Nome</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-medium">Patrimônio</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-medium">Última atualização</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                  <td className="py-3 px-4 text-white">Matheus Lima</td>
                  <td className="py-3 px-4 text-white">R$ 45.678.910</td>
                  <td className="py-3 px-4 text-red-400">+ 6 meses</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                  <td className="py-3 px-4 text-white">Emerson da Rocha</td>
                  <td className="py-3 px-4 text-white">R$ 12.345.678</td>
                  <td className="py-3 px-4 text-red-400">+ 6 meses</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                  <td className="py-3 px-4 text-white">Gisele Bulhões</td>
                  <td className="py-3 px-4 text-white">R$ 89.012.345</td>
                  <td className="py-3 px-4 text-orange-400">+ 3 meses</td>
                </tr>
                <tr className="hover:bg-gray-800 transition-colors">
                  <td className="py-3 px-4 text-white">Carmen Ferreira</td>
                  <td className="py-3 px-4 text-white">R$ 56.789.012</td>
                  <td className="py-3 px-4 text-green-400">- 3 meses</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-400">Página 1 de 10</span>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

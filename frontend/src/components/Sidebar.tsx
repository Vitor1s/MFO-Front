import { FaUser, FaUserPlus } from "react-icons/fa";
import { MdOutlineTableChart, MdEventNote } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaChartLine, FaHistory } from "react-icons/fa";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { useNavigation } from "@/contexts/NavigationContext";

export default function Sidebar() {
  const [isClientesExpanded, setIsClientesExpanded] = useState(true);
  const { currentPage, setCurrentPage } = useNavigation();

  const handleSubMenuClick = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <aside className="sidebar-container text-gray-300 min-h-screen">
      {/* Logo */}
      <div className="flex items-center justify-center mb-8">
        <div className="anka-logo-container">
          <Image
            src="/images/logo.png"
            alt="Anka Logo"
            width={95}
            height={42}
            className="anka-logo-image object-contain"
          />
        </div>
      </div>

      {/* Menu */}
      <nav className="menu-nav">
        {/* Menu Clientes com subopções */}
        <div className="menu-group">
          <div 
            className="menu-item cursor-pointer"
            onClick={() => setIsClientesExpanded(!isClientesExpanded)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaUser />
                <span>Clientes</span>
              </div>
              <span className="text-sm text-gray-400">
                {isClientesExpanded ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </div>
          </div>
          
          {/* Subopções expandidas */}
          {isClientesExpanded && (
            <div className="submenu ml-6 space-y-1">
              <SubMenuItem 
                icon={<FaChartLine />} 
                label="Dashboard" 
                isActive={currentPage === 'dashboard'}
                onClick={() => handleSubMenuClick('dashboard')}
              />
              <SubMenuItem 
                icon={<MdOutlineTableChart />} 
                label="Projeção" 
                isActive={currentPage === 'projecao'}
                onClick={() => handleSubMenuClick('projecao')}
              />
              <SubMenuItem 
                icon={<FaHistory />} 
                label="Histórico" 
                isActive={currentPage === 'historico'}
                onClick={() => handleSubMenuClick('historico')}
              />
            </div>
          )}
        </div>

        {/* Outras opções do menu */}
        <MenuItem icon={<FaUserPlus />} label="Prospects" />
        <MenuItem icon={<MdEventNote />} label="CRM" />
        <MenuItem icon={<GiMoneyStack />} label="Captação" />
        <MenuItem icon={<FaRegMoneyBillAlt />} label="Financeiro" />
      </nav>

      {/* Perfil do usuário */}
      <div className="mt-auto pt-8">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-900 cursor-pointer transition-colors">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
            PA
          </div>
          <div className="flex-1">
            <p className="text-white font-medium">Paulo Alberto</p>
            <p className="text-sm text-gray-400">p.alberto@gmail.com</p>
          </div>
          <div className="text-gray-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
}

function MenuItem({ 
  icon, 
  label
}: { 
  icon: JSX.Element; 
  label: string;
}) {
  return (
    <div className="menu-item">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon}
          <span>{label}</span>
        </div>
        <span className="text-sm text-gray-400">▼</span>
      </div>
    </div>
  );
}

function SubMenuItem({ 
  icon, 
  label, 
  isActive = false,
  onClick
}: { 
  icon: JSX.Element; 
  label: string; 
  isActive?: boolean;
  onClick: () => void;
}) {
  return (
    <div 
      className={`submenu-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
}

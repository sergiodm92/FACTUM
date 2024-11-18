import React from 'react';
import { BarChart2 } from 'lucide-react';
import FactumIcon from './FactumIcon'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <FactumIcon themeDefault={"dark"} />
            </div>
            <p className="text-gray-400 mb-4">
              Transformamos empresas a través de consultoría estratégica y soluciones tecnológicas innovadoras.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-300 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-300 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#software" className="text-gray-400 hover:text-orange-300 transition-colors">
                  Software
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-300 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-300 transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-300 transition-colors">
                  Términos de servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-300 transition-colors">
                  Aviso legal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} CR Enterprise. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
"use client";
import { useTranslation } from 'react-i18next';
import FactumIcon from '@components/common/FactumIcon';
import Link from 'next/link';
import { siteProps } from '@/config/site';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Slogan */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <FactumIcon textColor="white" />
            </div>
            <p className="text-gray-400 mb-4 max-w-64">
              {t('footer.slogan')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.fast_links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-orange-300 transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-300 transition-colors">
                  {t('footer.services')}
                </Link>
              </li>
              <li>
                <Link href="/software" className="text-gray-400 hover:text-orange-300 transition-colors">
                  {t('footer.software')}
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-gray-400 hover:text-orange-300 transition-colors">
                  {t('footer.consulting')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-300 transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.social_networks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={siteProps.linkedin} className="text-gray-400 hover:text-orange-300 transition-colors">
                  {t('footer.LinkedIn')}
                </Link>
              </li>
              <li>
                <Link href={siteProps.twitter} className="text-gray-400 hover:text-orange-300 transition-colors">
                  {t('footer.Twitter')}
                </Link>
              </li>
              <li>
                <Link href={siteProps.instagram} className="text-gray-400 hover:text-orange-300 transition-colors">
                  {t('footer.Instagram')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} FACTUM. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

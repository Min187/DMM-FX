import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp, ChevronRight } from 'lucide-react';
import { AppRoute, NavItem, DMM_AFFILIATE_LINK } from '../types';
import { RiskWarning } from './RiskWarning';

const NAV_ITEMS: NavItem[] = [
  { label: 'ホーム', path: AppRoute.HOME },
  { label: 'FX基礎講座', path: AppRoute.BASICS },
  { label: 'DMM FX特典', path: AppRoute.CAMPAIGN },
  { label: '口座開設ガイド', path: AppRoute.GUIDE },
  { label: '会社比較', path: AppRoute.COMPARISON },
  { label: 'ニュース', path: AppRoute.NEWS },
  { label: 'お問い合わせ', path: AppRoute.CONTACT },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to={AppRoute.HOME} className="flex items-center" onClick={closeMenu}>
                <div className="bg-blue-600 text-white p-1.5 rounded mr-2">
                  <TrendingUp size={24} />
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900">
                  Smart<span className="text-blue-600">FX</span> Guide
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1 items-center">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={DMM_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all"
              >
                公式サイトへ
                <ChevronRight size={16} className="ml-1" />
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={DMM_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-500 hover:bg-amber-600"
              >
                DMM FX 公式サイトへ
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="font-bold text-xl tracking-tight text-white flex items-center mb-4">
              <TrendingUp size={24} className="mr-2 text-blue-500" />
              SmartFX Guide
            </span>
            <p className="text-sm text-slate-400">
              初心者から上級者まで、FXトレードの成功をサポートする情報ポータルサイト。
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">コンテンツ</h3>
            <ul className="space-y-2">
              <li><Link to={AppRoute.BASICS} className="text-sm hover:text-white">FX基礎講座</Link></li>
              <li><Link to={AppRoute.CAMPAIGN} className="text-sm hover:text-white">最新キャンペーン</Link></li>
              <li><Link to={AppRoute.COMPARISON} className="text-sm hover:text-white">FX会社比較</Link></li>
              <li><Link to={AppRoute.NEWS} className="text-sm hover:text-white">ニュース・分析</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">サポート</h3>
            <ul className="space-y-2">
              <li><Link to={AppRoute.GUIDE} className="text-sm hover:text-white">口座開設ガイド</Link></li>
              <li><Link to={AppRoute.CONTACT} className="text-sm hover:text-white">お問い合わせ</Link></li>
              <li><Link to={AppRoute.HOME} className="text-sm hover:text-white">プライバシーポリシー</Link></li>
              <li><Link to={AppRoute.HOME} className="text-sm hover:text-white">運営者情報</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">DMM FXについて</h3>
             <p className="text-xs text-slate-400 mb-2">
               本サイトはDMM FXのプロモーションを含みます。取引条件やキャンペーン詳細は公式サイトをご確認ください。
             </p>
             <a href={DMM_AFFILIATE_LINK} target="_blank" rel="noreferrer" className="text-amber-500 text-sm hover:underline">公式ページを確認する &rarr;</a>
          </div>
        </div>
        
        <RiskWarning />
        
        <div className="bg-slate-950 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-600">
            &copy; {new Date().getFullYear()} SmartFX Guide. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
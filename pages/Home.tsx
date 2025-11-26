import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Smartphone, Zap, DollarSign, ShieldCheck, ArrowRight } from 'lucide-react';
import { AppRoute, DMM_AFFILIATE_LINK } from '../types';
import { RiskWarning } from '../components/RiskWarning';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://picsum.photos/id/1/1920/1080"
            alt="Financial charts background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3 lg:w-1/2">
            <span className="inline-block py-1 px-3 rounded bg-amber-500/20 text-amber-400 text-sm font-bold mb-4 border border-amber-500/30">
              2025年6月 最新キャンペーン実施中
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              FXを始めるなら、<br/>
              <span className="text-blue-500">DMM FX</span>で<br/>
              最大<span className="text-amber-400">50万円</span>還元。
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              初心者でも安心のサポート体制と、プロも納得の高性能ツール。
              スプレッド業界最狭水準で、あなたの資産形成を強力にバックアップします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={AppRoute.CAMPAIGN}
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-amber-500 hover:bg-amber-600 md:text-lg transition-transform hover:scale-105 shadow-lg shadow-amber-500/30"
              >
                特典の詳細を見る
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to={AppRoute.BASICS}
                className="inline-flex justify-center items-center px-8 py-4 border border-slate-600 text-base font-bold rounded-lg text-slate-200 bg-slate-800 hover:bg-slate-700 md:text-lg transition-colors"
              >
                まずはFXを学ぶ
              </Link>
            </div>
            <p className="mt-4 text-xs text-slate-500">※キャンペーンには適用条件があります。詳細は特典ページをご確認ください。</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">DMM FXが選ばれる理由</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              国内口座数トップクラスの実績。初めての方から熟練トレーダーまで、多くの投資家に支持されています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<DollarSign className="w-8 h-8 text-blue-600" />}
              title="各種手数料0円"
              description="出金手数料、口座維持費、クイック入金手数料、ロスカット手数料がすべて無料。コストを抑えて取引できます。"
            />
            <FeatureCard
              icon={<Smartphone className="w-8 h-8 text-blue-600" />}
              title="高性能ツール"
              description="直感的に操作できるスマホアプリと、プロ仕様のPCツール。LINEでの問い合わせにも対応しています。"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-blue-600" />}
              title="最短1時間で開始"
              description="『スマホでスピード本人確認』を利用すれば、申し込みから最短1時間で取引をスタート可能。"
            />
            <FeatureCard
              icon={<ShieldCheck className="w-8 h-8 text-blue-600" />}
              title="安心の信託保全"
              description="お客様の資金は、日証金信託銀行等へ区分して信託保全。万が一の場合でも資産は守られます。"
            />
          </div>
        </div>
      </section>

      {/* Categories / Navigation Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">目的から探す</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CategoryCard
              title="FX基礎講座"
              desc="初心者必見。用語解説からリスク管理まで。"
              link={AppRoute.BASICS}
              image="https://picsum.photos/id/180/800/600"
            />
            <CategoryCard
              title="口座開設ガイド"
              desc="図解付きで分かりやすい申し込み手順。"
              link={AppRoute.GUIDE}
              image="https://picsum.photos/id/454/800/600"
            />
            <CategoryCard
              title="他社比較"
              desc="スプレッドやスワップポイントを徹底比較。"
              link={AppRoute.COMPARISON}
              image="https://picsum.photos/id/60/800/600"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">投資の第一歩を踏み出そう</h2>
          <p className="text-blue-100 mb-8 text-lg">
            DMM FXなら、デモトレードで練習してから本番に移行することも可能です。<br />
            まずは無料の口座開設から始めませんか？
          </p>
          <a
             href={DMM_AFFILIATE_LINK}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-slate-100 transition-colors"
          >
            DMM FX 公式サイトへ移動
          </a>
          <p className="mt-6 text-xs text-blue-300 opacity-70">
            ※本サイトはDMM FXのプロモーションを含みます。
          </p>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
    <div className="bg-white p-3 rounded-xl w-fit shadow-sm mb-6 border border-slate-100">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </div>
);

const CategoryCard: React.FC<{ title: string; desc: string; link: string; image: string }> = ({ title, desc, link, image }) => (
  <Link to={link} className="group relative overflow-hidden rounded-2xl shadow-md h-64 block">
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6">
      <h3 className="text-xl font-bold text-white mb-1 flex items-center">
        {title} <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  </Link>
);
import React from 'react';
import { BookOpen, TrendingUp, AlertTriangle, Shield, MousePointer2 } from 'lucide-react';
import { RiskWarning } from '../components/RiskWarning';
import { Link } from 'react-router-dom';
import { AppRoute } from '../types';

export const Basics: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">FX基礎講座</h1>
          <p className="text-lg text-slate-600">
            外国為替証拠金取引（FX）の仕組みからリスク管理まで、
            初心者が知っておくべき重要ポイントを5分で解説します。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-8">
        {/* Article 1 */}
        <ArticleCard 
          icon={<BookOpen className="text-blue-500" />}
          title="1. FXとは？"
          content={
            <>
              <p className="mb-4">
                FX（Foreign Exchange）とは、異なる2つの通貨を交換（売買）し、
                その価格差（為替差益）や金利差（スワップポイント）によって利益を狙う金融商品です。
              </p>
              <h4 className="font-bold text-slate-800 mb-2">主な特徴</h4>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>24時間取引可能（平日）</li>
                <li>少額から始められる（レバレッジ効果）</li>
                <li>「買い」だけでなく「売り」からも入れる</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
                例：1ドル＝100円で買い、1ドル＝110円になったら売る。<br/>
                → 10円の利益（差益）となります。
              </div>
            </>
          }
        />

        {/* Article 2 */}
        <ArticleCard 
          icon={<TrendingUp className="text-green-500" />}
          title="2. レバレッジの仕組み"
          content={
            <>
              <p className="mb-4">
                レバレッジとは「てこの原理」のこと。手元の資金（証拠金）を担保に、
                その最大25倍の金額の取引が可能になる仕組みです。
              </p>
              <p className="mb-4">
                例えば、10万円の資金でレバレッジ25倍を使うと、250万円分の取引が可能です。
                これにより資金効率良く利益を狙えますが、逆に損失も拡大するリスクがあります。
              </p>
              <RiskWarning compact />
            </>
          }
        />

        {/* Article 3 */}
        <ArticleCard 
          icon={<AlertTriangle className="text-amber-500" />}
          title="3. ロスカットとリスク管理"
          content={
            <>
              <p className="mb-4">
                FXには「ロスカット」という安全装置があります。
                損失が一定レベルまで拡大し、証拠金維持率が規定値を下回ると、
                FX会社が強制的にポジションを決済し、それ以上の損失拡大を防ぎます。
              </p>
              <p className="mb-4">
                しかし、相場の急変動時にはロスカットが間に合わず、預託金以上の損失が出る場合もあります。
                必ず「余裕資金」で行い、損切り（ストップロス）注文を活用しましょう。
              </p>
            </>
          }
        />
        
        {/* Article 4 */}
        <ArticleCard 
          icon={<Shield className="text-indigo-500" />}
          title="4. 税金と確定申告"
          content={
            <>
              <p className="mb-4">
                国内FX業者での利益は「先物取引に係る雑所得」として申告分離課税の対象となります。
                税率は一律20.315%（所得税+住民税+復興特別所得税）です。
              </p>
              <p className="mb-4">
                損失が出た場合でも、確定申告を行うことで翌年以降3年間にわたり
                利益と相殺できる「繰越控除」の制度があります。
              </p>
            </>
          }
        />

        {/* Next Step CTA */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">基礎を学んだら、次は実践へ</h3>
          <p className="text-slate-600 mb-6">
            DMM FXならデモトレードで練習が可能。まずはノーリスクで体験してみましょう。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={AppRoute.CAMPAIGN} className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors">
              <MousePointer2 className="w-5 h-5 mr-2" />
              お得なキャンペーンを見る
            </Link>
            <Link to={AppRoute.GUIDE} className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-lg transition-colors">
              口座開設の手順を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArticleCard: React.FC<{ icon: React.ReactNode, title: string, content: React.ReactNode }> = ({ icon, title, content }) => (
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
    <div className="flex items-center mb-6">
      <div className="p-3 bg-slate-100 rounded-full mr-4">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
      </div>
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
    </div>
    <div className="text-slate-700 leading-7">
      {content}
    </div>
  </div>
);
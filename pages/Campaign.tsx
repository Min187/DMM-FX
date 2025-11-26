import React from 'react';
import { CheckCircle2, AlertCircle, Clock, Banknote, ArrowRight } from 'lucide-react';
import { CashbackTier, DMM_AFFILIATE_LINK } from '../types';

const CASHBACK_TIERS: CashbackTier[] = [
  { lots: '1,000 Lot ~', amount: '10,000円' },
  { lots: '2,000 Lot ~', amount: '20,000円' },
  { lots: '5,000 Lot ~', amount: '50,000円' },
  { lots: '10,000 Lot ~', amount: '100,000円' },
  { lots: '25,000 Lot ~', amount: '250,000円' },
  { lots: '50,000 Lot ~', amount: '500,000円' },
];

export const Campaign: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-16 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
          新規口座開設＋お取引で<br/>
          最大<span className="text-6xl md:text-7xl text-yellow-100 mx-2">50</span>万円キャッシュバック
        </h1>
        <p className="text-amber-100 font-bold text-lg md:text-xl">
          期間: 2025年6月1日以降に口座開設完了された方
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-10 mb-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-slate-100">
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Banknote className="w-6 h-6 mr-2 text-amber-500" />
              キャッシュバック達成条件
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">新規取引数量（Lot）</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">キャッシュバック金額</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {CASHBACK_TIERS.map((tier, idx) => (
                    <tr key={idx} className={idx === CASHBACK_TIERS.length - 1 ? "bg-amber-50" : ""}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{tier.lots}以上</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-amber-600">{tier.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              ※USD/JPYなどの主要通貨ペアを含む全通貨ペアが対象です。<br/>
              ※注文成立（新規）ベースでカウントされます。決済注文は含まれません。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-blue-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                対象期間
              </h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                口座開設完了日から3ヶ月以内に、条件となる新規取引数量を達成する必要があります。
                期間を過ぎてからの取引はカウントされませんのでご注意ください。
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                入金タイミング
              </h3>
              <p className="text-sm text-green-800 leading-relaxed">
                条件達成月の翌月中旬頃に、DMM FX口座へキャッシュバック金額が入金されます。
                そのまま取引証拠金として利用可能です。
              </p>
            </div>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl mb-10 border border-slate-200">
            <h3 className="font-bold text-slate-700 mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              注意事項
            </h3>
            <ul className="text-xs text-slate-600 space-y-2 list-disc pl-5">
              <li>ポイントサイト等、他のキャンペーンとの併用ができない場合があります。</li>
              <li>キャッシュバック付与時に口座を解約されている場合は対象外となります。</li>
              <li>DMM.com証券の判断により、本キャンペーンの対象外となる場合があります。詳細は公式サイトの規約をご確認ください。</li>
            </ul>
          </div>

          <div className="text-center">
            <a
               href={DMM_AFFILIATE_LINK}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white text-xl font-bold rounded-full shadow-lg transform transition hover:scale-105"
            >
              今すぐ無料口座開設を申し込む
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <p className="mt-4 text-xs text-slate-500">
              お申込みは最短5分で完了します（広告リンク）
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
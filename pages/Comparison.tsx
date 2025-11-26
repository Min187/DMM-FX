import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Check, X as XIcon } from 'lucide-react';
import { ComparisonRow } from '../types';

const COMPARISON_DATA: ComparisonRow[] = [
  { feature: 'USD/JPY スプレッド', dmm: '0.2銭', companyA: '0.2銭', companyB: '0.2銭', note: '原則固定(例外あり)' },
  { feature: '取引ツール', dmm: '◎ (高評価)', companyA: '○', companyB: '△' },
  { feature: 'LINEサポート', dmm: 'あり', companyA: 'なし', companyB: 'なし' },
  { feature: '口座数', dmm: '80万口座超', companyA: '50万口座', companyB: '40万口座' },
  { feature: 'デモトレード', dmm: 'あり', companyA: 'あり', companyB: 'なし' },
];

const MOCK_GRAPH_DATA = [
  { name: 'DMM FX', satisfaction: 92, speed: 88, support: 95 },
  { name: 'A社', satisfaction: 80, speed: 85, support: 70 },
  { name: 'B社', satisfaction: 75, speed: 70, support: 60 },
];

export const Comparison: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900">FX会社 徹底比較</h1>
          <p className="mt-4 text-slate-600">
            DMM FXと主要他社をスペックで比較。なぜDMMが選ばれるのか、その理由をデータで確認しましょう。
          </p>
        </div>

        {/* Feature Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 mb-16">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">比較項目</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-blue-600 uppercase tracking-wider w-1/4 bg-blue-50 border-t-4 border-blue-500">
                    DMM FX
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-slate-500 uppercase tracking-wider w-1/4">A社</th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-slate-500 uppercase tracking-wider w-1/4">B社</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                      {row.feature}
                      {row.note && <span className="block text-xs text-slate-400 font-normal">{row.note}</span>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-bold text-slate-900 bg-blue-50/30">
                      {row.dmm === 'あり' ? <Check className="inline text-green-500 w-5 h-5" /> : row.dmm}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">
                      {row.companyA === 'あり' ? <Check className="inline text-green-500 w-5 h-5" /> : (row.companyA === 'なし' ? <XIcon className="inline text-slate-300 w-5 h-5" /> : row.companyA)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">
                      {row.companyB === 'あり' ? <Check className="inline text-green-500 w-5 h-5" /> : (row.companyB === 'なし' ? <XIcon className="inline text-slate-300 w-5 h-5" /> : row.companyB)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-80">
            <h3 className="text-lg font-bold text-slate-800 mb-6 text-center">ユーザー評価比較（イメージ）</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={MOCK_GRAPH_DATA}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{fill: '#475569'}} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Legend iconType="circle" />
                <Bar dataKey="satisfaction" name="総合満足度" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="support" name="サポート体制" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-slate-900 mb-2">LINEサポートが便利</h3>
              <p className="text-slate-600">
                業界初のLINEお問い合わせに対応。
                「ログインできない」「操作方法がわからない」といった疑問も、普段使っているLINEですぐに解決できます。
              </p>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-slate-900 mb-2">ポイントが現金化できる</h3>
              <p className="text-slate-600">
                取引実績に応じて貯まる「取引応援ポイント」は、1ポイント＝1円として現金に交換可能。
                取引コストの実質的な削減につながります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
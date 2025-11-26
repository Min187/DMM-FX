import React from 'react';
import { Calendar, Tag } from 'lucide-react';

const NEWS_ITEMS = [
  {
    id: 1,
    date: '2025-06-15',
    title: '米FOMC、金利据え置きを決定。今後の利下げ時期に注目集まる',
    category: '米国経済',
    excerpt: '連邦公開市場委員会（FOMC）は政策金利の据え置きを決定しました。パウエル議長の会見では、インフレ率の低下を確認しつつも慎重な姿勢を崩しておらず...'
  },
  {
    id: 2,
    date: '2025-06-12',
    title: '円安進行、一時1ドル158円台へ。介入警戒感高まる',
    category: '為替相場',
    excerpt: '東京外国為替市場で円相場が下落し、一時158円台を記録しました。財務官による口先介入が行われましたが、市場の反応は限定的となっています。'
  },
  {
    id: 3,
    date: '2025-06-10',
    title: '【DMM FX】システムメンテナンスのお知らせ（6/20実施）',
    category: 'お知らせ',
    excerpt: '6月20日（土）12:00〜18:00の間、システムメンテナンスのため全てのサービスが一時停止となります。ご注意ください。'
  }
];

export const News: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">
        ニュース・マーケット分析
      </h1>
      
      <div className="space-y-8">
        {NEWS_ITEMS.map((item) => (
          <article key={item.id} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
            <div className="md:w-3/4">
              <div className="flex items-center space-x-4 text-xs text-slate-500 mb-2">
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {item.date}
                </span>
                <span className="flex items-center text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded">
                  <Tag className="w-3 h-3 mr-1" />
                  {item.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-3 hover:text-blue-600 cursor-pointer">
                {item.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {item.excerpt}
              </p>
              <button className="text-blue-600 font-bold text-sm hover:underline">
                続きを読む &rarr;
              </button>
            </div>
            <div className="md:w-1/4">
               <img 
                 src={`https://picsum.photos/seed/${item.id}/300/200`} 
                 alt="News thumbnail" 
                 className="w-full h-32 object-cover rounded-lg bg-slate-200"
               />
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">※本ニュースはデモデータであり、実際の市場動向とは異なる場合があります。</p>
      </div>
    </div>
  );
};
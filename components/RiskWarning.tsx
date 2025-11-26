import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const RiskWarning: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 text-xs text-amber-900 mt-4">
        <div className="flex items-center font-bold mb-1">
          <AlertTriangle className="w-4 h-4 mr-2" />
          <span>リスクに関するご注意</span>
        </div>
        <p>FX/CFD取引は元本や利益が保証されたものではありません。相場変動により損失が生じる場合があり、その額は証拠金を上回る可能性があります。</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-slate-400 py-8 px-4 text-xs leading-relaxed border-t border-slate-800">
      <div className="max-w-6xl mx-auto space-y-4">
        <h4 className="font-bold text-slate-200 flex items-center">
          <AlertTriangle className="w-4 h-4 mr-2 text-amber-500" />
          投資に係るリスクおよび手数料について
        </h4>
        <p>
          外国為替証拠金取引（FX）およびCFD取引は、元本および利益が保証された金融商品ではありません。
          取引通貨の価格変動やスワップポイントの変動により、損失が生じるおそれがあります。
          また、レバレッジ効果により、預託した証拠金を上回る損失が発生する可能性があります。
        </p>
        <p>
          当サイトは情報提供を目的としており、投資の勧誘を目的とするものではありません。
          最終的な投資判断は、お客様ご自身の判断と責任において行ってください。
          当サイトに掲載されているDMM FX等のキャンペーン情報は記事執筆時点のものであり、変更される可能性があります。
          最新の情報は必ず各公式サイトをご確認ください。
        </p>
        <p>
          当サイトで紹介している「キャッシュバック最大50万円」等の条件には、取引数量等の要件があります。
          詳細はDMM FX公式サイトの規約をご確認ください。
        </p>
      </div>
    </div>
  );
};
import React from 'react';
import { ClipboardCheck, CreditCard, Monitor, UserCheck } from 'lucide-react';
import { DMM_AFFILIATE_LINK } from '../types';

export const Guide: React.FC = () => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            DMM FX 口座開設ガイド
          </h1>
          <p className="mt-4 text-xl text-slate-500">
            『スマホでスピード本人確認』なら、郵送物の受け取り不要。<br/>
            最短1時間で取引をスタートできます。
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200" />

          {/* Step 1 */}
          <StepCard
            step={1}
            title="フォーム入力"
            desc="公式サイトの「口座開設」ボタンから、氏名・住所・メールアドレス等の必要事項を入力します。所要時間は約3分です。"
            icon={<ClipboardCheck className="w-8 h-8 text-white" />}
          />

          {/* Step 2 */}
          <StepCard
            step={2}
            title="本人確認書類の提出"
            desc="スマホで「マイナンバーカード（個人番号カード）」または「通知カード＋運転免許証」を撮影して送信します。"
            icon={<UserCheck className="w-8 h-8 text-white" />}
            right
          />

          {/* Step 3 */}
          <StepCard
            step={3}
            title="審査・開設完了"
            desc="DMM.com証券にて審査が行われます。『スマホでスピード本人確認』を利用した場合、審査完了メールが届いたらすぐにログイン可能です。"
            icon={<Monitor className="w-8 h-8 text-white" />}
          />

          {/* Step 4 */}
          <StepCard
            step={4}
            title="入金・取引開始"
            desc="約340の金融機関に対応した「クイック入金」なら手数料無料で即時反映。入金後、すぐに取引を開始できます。"
            icon={<CreditCard className="w-8 h-8 text-white" />}
            right
          />
        </div>

        <div className="mt-16 text-center">
            <h3 className="text-xl font-bold mb-6">準備ができたら、さっそく始めよう</h3>
             <a
               href={DMM_AFFILIATE_LINK}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-bold shadow-lg hover:bg-blue-700 transition-colors"
            >
              公式サイトで口座開設（無料）
            </a>
        </div>
      </div>
    </div>
  );
};

const StepCard: React.FC<{ step: number; title: string; desc: string; icon: React.ReactNode; right?: boolean }> = ({ step, title, desc, icon, right }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between mb-12 ${right ? 'md:flex-row-reverse' : ''}`}>
      <div className={`w-full md:w-5/12 ${right ? 'text-center md:text-left' : 'text-center md:text-right'}`}>
         {/* Mobile visible Step number */}
        <div className="md:hidden inline-block bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mb-2">
            {step}
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{desc}</p>
      </div>
      
      <div className="hidden md:flex relative z-10 w-16 h-16 rounded-full bg-blue-600 items-center justify-center shadow-lg border-4 border-white">
        {icon}
        <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
          {step}
        </div>
      </div>
      
      <div className="w-full md:w-5/12"></div>
    </div>
  );
};
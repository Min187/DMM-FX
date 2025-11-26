import React, { useState } from 'react';
import { Mail, Download } from 'lucide-react';
import { DMM_AFFILIATE_LINK } from '../types';

export const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 p-8 text-center text-white">
            <h1 className="text-2xl font-bold mb-2">お問い合わせ・資料請求</h1>
            <p className="text-blue-100 text-sm">
              「FX入門7日間講座」PDFを無料プレゼント中。<br/>
              メールアドレスを入力して今すぐゲット！
            </p>
          </div>
          
          <div className="p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">ご登録ありがとうございます</h3>
                <p className="text-slate-600 text-sm mb-6">
                  ご入力いただいたメールアドレス宛に、資料ダウンロード用URLをお送りしました。
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm underline"
                >
                  戻る
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    メールアドレス
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                      placeholder="example@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded text-xs text-slate-500">
                  <p>
                    ※ご登録いただいた情報は、プライバシーポリシーに基づき適切に管理いたします。
                    当サイトからのニュースレター配信（いつでも解除可能）に同意したものとみなされます。
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  無料で資料を受け取る
                </button>
              </form>
            )}
            
            <div className="mt-8 border-t border-slate-100 pt-6">
              <h4 className="text-sm font-bold text-slate-900 mb-3">DMM FXに関するお問い合わせ</h4>
              <p className="text-xs text-slate-500 mb-2">
                取引ツールの操作方法や口座開設状況などについては、公式サイトへ直接お問い合わせください。
              </p>
              <a 
                href={DMM_AFFILIATE_LINK} 
                target="_blank" 
                rel="noreferrer" 
                className="text-sm text-amber-600 font-bold hover:underline block"
              >
                DMM FX サポートセンター（LINE/電話/メール） &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
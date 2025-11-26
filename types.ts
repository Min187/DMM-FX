import React from 'react';

export const DMM_AFFILIATE_LINK = "https://fx.dmm.com/lp/nmktg/lp0907open/?utm_source=affiliate&utm_medium=a8&utm_campaign=a8_trade_general&advertiser=12&admage_dmm_fintech_xuid=12,6,326,xuidx9abe595706xb61";

export enum AppRoute {
  HOME = '/',
  BASICS = '/basics',
  CAMPAIGN = '/campaign',
  GUIDE = '/guide',
  COMPARISON = '/comparison',
  NEWS = '/news',
  CONTACT = '/contact'
}

export interface NavItem {
  label: string;
  path: AppRoute;
}

export interface FeaturePoint {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface ComparisonRow {
  feature: string;
  dmm: string;
  companyA: string;
  companyB: string;
  note?: string;
}

export interface CashbackTier {
  lots: string;
  amount: string;
}
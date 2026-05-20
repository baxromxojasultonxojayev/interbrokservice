export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

export interface WhyItem {
  num: string;
  title: string;
  sub: string;
}

export interface StepItem {
  n: string;
  t: string;
  d: string;
}

export interface LanguagePack {
  navSub: string;
  navSvc: string;
  navWhy: string;
  navHow: string;
  navCt: string;
  navBtn: string;
  badge: string;
  heroT1: string;
  heroT2: string;
  heroSub: string;
  heroBtn1: string;
  heroBtn2: string;
  stat1: string;
  stat2: string;
  stat3: string;
  stat4: string;
  svcLabel: string;
  svcTitle: string;
  svcDesc: string;
  services: ServiceItem[];
  whyLabel: string;
  whyTitle: string;
  features: string[];
  whyItems: WhyItem[];
  howLabel: string;
  howTitle: string;
  howDesc: string;
  steps: StepItem[];
  ctLabel: string;
  ctTitle: string;
  ctDesc: string;
  ctHours: string;
  flName: string;
  flPhone: string;
  flSvc: string;
  flMsg: string;
  fso: string[];
  formBtn: string;
  footer: string;
  placeholders: {
    name: string;
    phone: string;
    msg: string;
  };
}

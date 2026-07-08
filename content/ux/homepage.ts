export type UxBlockRole = 'default' | 'standout' | 'visual' | 'muted'

export type UxHomeSection = {
  id: string
  label: string
  hint: string
  role?: UxBlockRole
  variant: 'nav' | 'hero' | 'strip' | 'split' | 'cards' | 'wide' | 'form' | 'footer'
}

export const UX_HOMEPAGE_SECTIONS: UxHomeSection[] = [
  {
    id: 'nav',
    label: '01 · Navigace',
    hint: 'Klientská cesta oddělená od investorů. CTA „Nezávazná poptávka" trvale viditelné. Služby v dropdownu podle řešení, ne pod „Pro klienty".',
    variant: 'nav',
  },
  {
    id: 'hero',
    label: '02 · Hero',
    hint: 'Headline + CTA + widget kurzů vpravo (zadání: prvek s kurzy). Důvěra pod textem.',
    role: 'visual',
    variant: 'hero',
  },
  {
    id: 'trust',
    label: '03 · Důvěra',
    hint: 'Licence, roky, počet klientů — skenovatelné za 2 sekundy. CFO hledá licenci, majitel jistotu instituce.',
    variant: 'strip',
  },
  {
    id: 'problem',
    label: '04 · Problém klienta',
    hint: 'Nová sekce — dnes na sab.cz chybí. Importér a exportér se poznají ve scénáři dřív, než uslyší slovo forward.',
    variant: 'split',
  },
  {
    id: 'paths',
    label: '05 · Dvě rychlé cesty',
    hint: 'Dva vstupy podle situace: mám fakturu v cizí měně vs. potřebuji kurz teď. Nahrazuje abstraktní boxy „Vsaďte na jistotu / Směňte hned".',
    variant: 'split',
  },
  {
    id: 'forward',
    label: '06 · Forward — klíčový produkt',
    hint: 'Největší diferenciátor SAB. Konkrétní příklad v korunách, pak teprve termín forward. Sekce musí vyniknout.',
    role: 'standout',
    variant: 'wide',
  },
  {
    id: 'services',
    label: '07 · Služby',
    hint: 'Ze 7 položek na sab.cz → 4 vstupy. Každá karta: pro koho, kdy, vlastní CTA. Forward jako první a zvýrazněný.',
    variant: 'cards',
  },
  {
    id: 'why',
    label: '08 · Proč SAB',
    hint: 'Stávající výhody z sab.cz — konkrétnější formulace. Srovnání s bankou, licence, osobní dealer.',
    variant: 'cards',
  },
  {
    id: 'process',
    label: '09 · Jak to funguje',
    hint: 'Úvodní hovor jako první krok — snižuje bariéru. Rámcová smlouva až po domluvě, ne jako krok 1.',
    variant: 'cards',
  },
  {
    id: 'proof',
    label: '10 · Reference',
    hint: 'Citace zůstávají — Becherovka, LASSELSBERGER, APM. Přidat tag import/export u každé firmy.',
    variant: 'split',
  },
  {
    id: 'lead',
    label: '11 · Kontaktní formulář',
    hint: 'Před-kvalifikace: firma, měnový pár, objem, směr obchodu. Obchodník dostane kontext před hovorem. Telefon vedle formuláře.',
    role: 'standout',
    variant: 'form',
  },
  {
    id: 'newsletter',
    label: '12 · Newsletter',
    hint: 'Sekundární konverze pro CFO — kurzový přehled místo generických novinek.',
    role: 'muted',
    variant: 'wide',
  },
  {
    id: 'footer',
    label: '13 · Patička',
    hint: 'Investoři mimo hlavní cestu. Mapa celého webu: služby, segmenty, firma, kontakt, legal.',
    variant: 'footer',
  },
]

export const UX_HOMEPAGE_CONTENT = {
  nav: {
    logo: 'SAB Finance',
    links: ['Služby', 'Pro koho', 'Jak to funguje', 'O nás'],
    cta: 'Nezávazná poptávka',
    aside: 'Investoři',
  },
  hero: {
    headline: 'Víte dopředu, kolik zaplatíte — nebo dostanete — v cizí měně.',
    subheadline:
      'Devizové služby pro firmy, které importují, exportují nebo pravidelně platí do zahraničí. Směna, platby a fixní kurz na budoucí fakturu.',
    primaryCta: 'Nezávazná konzultace',
    secondaryCta: 'Zjistit aktuální kurz',
    supporting: 'Licencovaná platební instituce · 20 let · 20 000 firemních klientů',
    rates: [
      { pair: 'EUR/CZK', value: '25,18' },
      { pair: 'USD/CZK', value: '23,42' },
      { pair: 'GBP/CZK', value: '29,65' },
    ],
    ratesNote: 'Widget kurzů — okamžitá hodnota bez registrace',
    visualNote: 'Prostor pro vizuál — abstraktní gradient',
  },
  trust: [
    'Licence platební instituce (ČNB)',
    '20 000 firemních klientů',
    '1,74 mil. vypořádaných obchodů',
    'Obchod po telefonu do minut',
  ],
  problem: {
    headline: 'Platíte nebo inkasujete v cizí měně?',
    scenarios: [
      {
        tag: 'Importér',
        text: 'Za 60 dní platíte dodavateli 50 000 EUR. Kurz se mezitím může změnit — a s ním i vaše marže.',
        cta: 'Jak se zajistit fixním kurzem',
      },
      {
        tag: 'Exportér',
        text: 'Faktura v EUR, splatnost za 90 dní. Dnes nevíte, kolik korun na účet skutečně přijde.',
        cta: 'Spočítat dopad kurzu',
      },
    ],
  },
  paths: [
    {
      title: 'Máte fakturu v cizí měně?',
      body: 'Sjednejte fixní kurz dnes — ať víte, kolik za 30, 60 nebo 90 dní zaplatíte nebo inkasujete.',
      cta: 'Chci fixní kurz na fakturu',
    },
    {
      title: 'Potřebujete směnit teď?',
      body: 'Aktuální kurz bez skrytých poplatků. Obchod po telefonu, vypořádání během hodin.',
      cta: 'Zjistit kurz',
    },
  ],
  forward: {
    headline: 'Fixní kurz na fakturu — měnový forward jednoduše',
    lead: 'Dohodnete kurz dnes. Směna proběhne v den, kdy vás to skutečně zajímá — třeba za 3 měsíce.',
    steps: [
      'Objednávka u dodavatele: 50 000 EUR, splatnost 90 dní',
      'Dnes s SAB sjednáte forward — kurz např. 25,20 CZK/EUR',
      'Za 90 dní zaplatíte přesně 1 260 000 Kč — bez ohledu na trh',
    ],
    contrast: 'Bez forwardu: při posunu kurzu o 1 Kč zaplatíte o 50 000 Kč víc.',
    cta: 'Chci fixní kurz — nezávazně',
    anchor: 'Ukotvíme váš kurz',
  },
  services: [
    {
      title: 'Fixní kurz na fakturu',
      for: 'Víte o budoucí platbě nebo inkasu',
      cta: 'Více o forwardu',
      featured: true,
    },
    {
      title: 'Směna měn',
      for: 'Potřebujete EUR, USD, GBP… dnes',
      cta: 'Zjistit kurz',
    },
    {
      title: 'Zahraniční platby',
      for: 'Pošlete fakturu dodavateli nebo přijměte inkaso',
      cta: 'Jak platíme do zahraničí',
    },
    {
      title: 'Hlídání kurzů',
      for: 'Upozornění, když je kurz pro vás výhodný',
      cta: 'Nastavit alert',
    },
  ],
  why: [
    {
      title: 'Kurz, který dává smysl',
      body: 'Srovnatelné nebo lepší sazby než u banky — bez poplatků, které nikdo nečeká.',
    },
    {
      title: 'Obchod do minut',
      body: 'Zavoláte, specialisté dealingu potvrdí kurz emailem, vypořádání bez zbytečného čekání.',
    },
    {
      title: 'Licence ČNB',
      body: 'Jsme platební instituce — vaše peníze a obchody pod dohledem regulátora.',
    },
    {
      title: 'Osobní dealer na telefonu',
      body: '20 let na trhu, 20 000 firem — známe vaše měnové páry a reagujeme, když se kurz hne.',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Krátký úvodní hovor',
      body: 'Projdeme vaše měny, objemy a zda dává smysl forward nebo spot.',
    },
    {
      step: '02',
      title: 'Rámcová smlouva',
      body: 'Připraví ji regionální ředitel — jednorázově, pak už jen obchody.',
    },
    {
      step: '03',
      title: 'Obchod a vypořádání',
      body: 'Telefonicky s dealingem, potvrzení emailem, peníze na cestě.',
    },
  ],
  proof: {
    headline: 'Firmy, které s námi řeší devizy denně',
    quotes: [
      {
        text: 'Na spolupráci se SAB Finance oceňuji jejich proaktivní přístup, hlídání výhodných kurzů a minimum času stráveného sjednáním a vypořádáním obchodu.',
        author: 'Václav Bečvář',
        role: 'finanční manažer',
        company: 'LASSELSBERGER',
        tag: 'export',
      },
      {
        text: 'Spolupráce se společností SAB finance probíhá od roku 2013. Se službami i komunikací jsme spokojeni.',
        author: 'Pavel Brandejs',
        role: 'Finance & Accounting Manager',
        company: 'Becherovka',
        tag: 'pravidelné platby',
      },
      {
        text: 'Se společností SAB Finance dlouhodobě spolupracujeme a vždy jsme se setkali se vstřícným a osobním jednáním.',
        author: 'Ing. Václav Marcel',
        role: '',
        company: 'APM Automotive',
        tag: 'import',
      },
    ],
  },
  lead: {
    headline: 'Nezávazně probereme vaši situaci',
    sub: 'Napište nám měnový pár, směr plateb a orientační objem — ozve se vám přímo specialista dealingu.',
    fields: [
      'Firma',
      'Jméno',
      'E-mail / telefon',
      'Import / export / obojí',
      'Měnový pár (např. EUR/CZK)',
      'Co řešíte (směna / forward / platba)',
    ],
    cta: 'Odeslat poptávku',
    phone: '+420 267 220 202',
    phoneLabel: 'Dealing',
  },
  newsletter: {
    headline: 'Kurzový přehled do mailu',
    body: 'Krátké shrnutí trhu a tipy pro firmy — bez spamu, odhlášení jedním klikem.',
    cta: 'Chci přehled',
  },
  footer: {
    columns: [
      {
        title: 'Služby',
        links: [
          'Fixní kurz na fakturu',
          'Směna měn',
          'Zahraniční platby',
          'Hlídání kurzů',
          'Devizové poradenství',
        ],
      },
      {
        title: 'Pro koho',
        links: ['Exportéři', 'Importéři', 'Pravidelné platby', 'CFO & finanční manažeři'],
      },
      {
        title: 'O firmě',
        links: ['Historie', 'Náš tým', 'Licence ČNB', 'Dokumenty ke stažení', 'Kariéra'],
      },
      {
        title: 'Pro investory',
        links: ['Aktuality', 'Valné hromady', 'Veřejný úpis akcií', 'Politika odměňování'],
      },
      {
        title: 'Kontakt',
        links: [
          'Praha — Na Příkopě 969/33',
          'Zlín — Kvítková 4352',
          '+420 267 220 202',
          'Nezávazná poptávka',
        ],
      },
    ],
    legal: ['Ochrana osobních údajů', 'Cookies', 'Whistleblowing'],
    aside: 'SAB Finance a.s. · IČ: 24717444 · DIČ: CZ699003130',
  },
} as const

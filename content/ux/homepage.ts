export type UxBlockRole = 'default' | 'standout' | 'visual' | 'muted'

export type UxHomeSection = {
  id: string
  label: string
  hint: string
  role?: UxBlockRole
  variant: 'nav' | 'hero' | 'strip' | 'split' | 'cards' | 'wide' | 'form' | 'footer' | 'flow'
}

export const UX_HOMEPAGE_SECTIONS: UxHomeSection[] = [
  {
    id: 'nav',
    label: '01 · Navigace',
    hint: 'SAB TARF (Novinka) + ProStream + přepínač jazyka. CTA „Nezávazná poptávka" trvale viditelné. Investoři mimo hlavní cestu.',
    variant: 'nav',
  },
  {
    id: 'hero',
    label: '02 · Hero',
    hint: 'Headline + CTA + widget kurzů vpravo. Důvěra přesunuta do samostatného pásu pod hero — bez opakování čísel zde.',
    role: 'visual',
    variant: 'hero',
  },
  {
    id: 'trust',
    label: '03 · Důvěra',
    hint: 'Licence, roky, počet klientů — skenovatelné za 2 sekundy. Rozšiřuje jednu větu pod hero, neopakuje ji.',
    variant: 'strip',
  },
  {
    id: 'problem',
    label: '04 · Problém klienta',
    hint: 'Nová sekce — dnes na sab.cz chybí. Importér a exportér se poznají dřív, než uslyší slovo forward. Před rychlým výběrem cesty.',
    variant: 'split',
  },
  {
    id: 'paths',
    label: '05 · Dva vstupy',
    hint: 'Dva vstupy po problému — scénáře z copy návrhů, ne sab.cz slogany. CTA s účelem, ne telefon.',
    variant: 'split',
  },
  {
    id: 'forwardFlow',
    label: '06 · Forward — jak to funguje',
    hint: 'Mechanismus forwardu — 3 kroky ze sab.cz, copy z návrhů. Žargon až po scénáři, CTA „Chci fixní kurz".',
    role: 'standout',
    variant: 'flow',
  },
  {
    id: 'forward',
    label: '07 · Forward — příklad v Kč',
    hint: 'Rozšíření flow — konkrétní čísla pro importéra. CFO dostane koruny, majitel scénář. Navazuje na předchozí sekci.',
    role: 'standout',
    variant: 'wide',
  },
  {
    id: 'why',
    label: '08 · Proč SAB',
    hint: '6 výhod — témata ze sab.cz, formulace z copy návrhů. Konkrétní přínos, ne superlativy.',
    variant: 'cards',
  },
  {
    id: 'services',
    label: '09 · Služby',
    hint: '7 služeb ze sab.cz — názvy a CTA z copy návrhů, každá s „pro koho". Forward zvýrazněný.',
    variant: 'cards',
  },
  {
    id: 'process',
    label: '10 · Jak s námi obchodovat',
    hint: '3 kroky — úvodní hovor první (copy návrhy), ne sab.cz „smlouva jako krok 1". Snižuje bariéru.',
    variant: 'cards',
  },
  {
    id: 'proof',
    label: '11 · Reference',
    hint: 'Citace zůstávají — Becherovka, LASSELSBERGER, APM. Přidat tag import/export u každé firmy.',
    variant: 'split',
  },
  {
    id: 'lead',
    label: '12 · Kontaktní formulář',
    hint: 'Před-kvalifikace: firma, měnový pár, objem, směr obchodu. Obchodník dostane kontext před hovorem. Telefon vedle formuláře.',
    role: 'standout',
    variant: 'form',
  },
  {
    id: 'newsletter',
    label: '13 · Newsletter',
    hint: 'Sekundární konverze pro CFO — kurzový přehled místo generických novinek.',
    role: 'muted',
    variant: 'wide',
  },
  {
    id: 'footer',
    label: '14 · Patička',
    hint: 'Mapa webu + LinkedIn a Facebook. Investoři v patičce, ne v hlavní cestě.',
    variant: 'footer',
  },
]

export const LANG_LABELS: Record<string, string> = {
  CZ: 'Čeština',
  EN: 'English',
  DE: 'Deutsch',
}

export type NavDropdownItem = {
  label: string
  href: string
}

export type NavMenuItem =
  | { type: 'link'; label: string; href: string }
  | { type: 'dropdown'; label: string; items: NavDropdownItem[] }

export const UX_HOMEPAGE_CONTENT = {
  nav: {
    logo: 'SAB Finance',
    tarf: {
      label: 'SAB TARF',
      badge: 'Novinka',
      href: 'https://sabtarf.sab.cz/',
    },
    menus: [
      {
        type: 'dropdown',
        label: 'Služby',
        items: [
          { label: 'Fixní kurz na fakturu', href: '#' },
          { label: 'Směna měn', href: '#' },
          { label: 'Zahraniční platby', href: '#' },
          { label: 'Hlídání kurzů', href: '#' },
        ],
      },
      {
        type: 'dropdown',
        label: 'Pro koho',
        items: [
          { label: 'Exportéři', href: '#' },
          { label: 'Importéři', href: '#' },
          { label: 'Pravidelné platby', href: '#' },
        ],
      },
      {
        type: 'dropdown',
        label: 'Jak to funguje',
        items: [
          { label: 'Jak s námi obchodovat', href: '#' },
          { label: 'Forward — jak to funguje', href: '#' },
        ],
      },
      { type: 'link', label: 'O nás', href: '#' },
    ] satisfies NavMenuItem[],
    links: ['Služby', 'Pro koho', 'Jak to funguje', 'O nás'],
    cta: 'Nezávazná poptávka',
    prostream: {
      label: 'ProStream',
      href: 'https://www.prostream.cz/',
    },
    aside: 'Investoři',
    lang: {
      current: 'CZ',
      options: ['CZ', 'EN', 'DE'],
    },
  },
  hero: {
    headline: 'Víte dopředu, kolik zaplatíte nebo inkasujete v cizí měně.',
    subheadline:
      'Devizové služby pro firmy, které importují, exportují nebo pravidelně platí do zahraničí. Směna, platby a fixní kurz na budoucí fakturu.',
    primaryCta: 'Nezávazná konzultace',
    secondaryCta: 'Zjistit aktuální kurz',
    highlights: [
      'Faktura v EUR za 60 dní? Kurz sjednáte dnes — platíte až ve splatnosti.',
      'Forward od 30 dní dopředu, spot i zahraniční platby v jednom.',
      'Osobní dealer na telefonu — kurz potvrdí emailem během minut.',
    ],
    infoPanel: {
      title: 'Co řešíme nejčastěji',
      items: [
        { label: 'Fixní kurz na fakturu', detail: 'Forward 30–730 dní dopředu' },
        { label: 'Směna a platby', detail: 'EUR, USD, GBP — vypořádání během hodin' },
        { label: 'Hlídání kurzů', detail: 'Upozornění, když je kurz pro vás výhodný' },
      ],
      cta: 'Všechny služby',
    },
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
  problem: {
    headline: 'Platíte nebo inkasujete v cizí měně?',
    scenarios: [
      {
        tag: 'Importér',
        text: 'Za 60 dní platíte dodavateli 50 000 EUR. Kurz se mezitím může změnit — a s ním i vaše marže. Bez zajistění nevíte, kolik korun skutečně odejde z účtu, a při posunu kurzu o 1 Kč zaplatíte o 50 000 Kč víc. Forward sjednáte jedním hovorem — kurz držíte od dneška až do splatnosti faktury.',
        cta: 'Jak se zajistit fixním kurzem',
      },
      {
        tag: 'Exportér',
        text: 'Faktura v EUR, splatnost za 90 dní. Dnes nevíte, kolik korun na účet skutečně přijde — a kurz se může hýbat celé měsíce. Při posunu o 1 Kč přijdete o desítky tisíc korun na marži. Fixní kurz vám dá jistotu inkasa ještě před odesláním zboží nebo dokončením zakázky.',
        cta: 'Spočítat dopad kurzu',
      },
    ],
    visuals: [
      {
        tag: 'Importér',
        image: '/sab-export/homepage/platba-faktur-vasim-partnerum-ad.webp',
      },
      {
        tag: 'Exportér',
        image: '/sab-export/homepage/inkaso-od-vasich-obchodnich-partneru-ad.webp',
      },
    ],
  },
  forwardFlow: {
    headline: 'Fixní kurz na fakturu — jak to proběhne',
    lead: 'Dohodnete kurz dnes. Směna proběhne v den, kdy vás to skutečně zajímá — třeba za 3 měsíce.',
    steps: [
      { num: '1', label: 'Objednávka u dodavatele nebo u partnera' },
      { num: '2', label: 'Sjednání forwardu za dohodnutý kurz', note: '1 týden až 2 roky dopředu' },
      { num: '3', label: 'Vypořádání v den splatnosti' },
    ],
    bullets: [
      'Čeká vás inkaso faktury a chcete přesně vědět, kolik korun na účet přijde?',
      'Platíte za zboží nebo služby v cizí měně a chcete mít jistotu, že neproděláte?',
    ],
    cta: 'Chci fixní kurz — nezávazně',
  },
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
  services: {
    headline: 'Služby pro vaši firmu',
    items: [
      {
        title: 'Fixní kurz na fakturu',
        for: 'Víte o budoucí platbě nebo inkasu',
        badge: 'Novinka',
        featured: true,
        cta: 'Více o forwardu',
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
        title: 'Inkaso od obchodních partnerů',
        for: 'Příjem plateb v cizí měně na váš účet',
        cta: 'Zjistit více',
      },
      {
        title: 'Evropské i světové měnové páry',
        for: 'Páry podle potřeby vaší firmy',
        cta: 'Zjistit více',
      },
      {
        title: 'Hlídání kurzů',
        for: 'Upozornění, když je kurz pro vás výhodný',
        cta: 'Nastavit alert',
      },
      {
        title: 'Devizové poradenství',
        for: 'Přehled trhu a tipy pro rozhodování',
        cta: 'Chci přehled',
      },
    ],
    cta: 'Všechny služby',
  },
  why: {
    headline: 'Proč firmy volí SAB Finance',
    items: [
      {
        title: 'Kurz, který dává smysl',
        body: 'Srovnatelné nebo lepší sazby než u banky — bez poplatků, které nikdo nečeká.',
      },
      {
        title: 'Obchod do minut',
        body: 'Specialista dealingu potvrdí kurz emailem, vypořádání bez zbytečného čekání.',
      },
      {
        title: 'Transparentní podmínky',
        body: 'Víte dopředu, co platí — žádné překvapení v poplatcích ani kurzu.',
      },
      {
        title: 'Licence ČNB',
        body: 'Platební instituce — vaše peníze a obchody pod dohledem regulátora.',
      },
      {
        title: 'Evropské i světové páry',
        body: 'EUR, USD, GBP a další měny pro vaše obchody.',
      },
      {
        title: '20 let a 20 000 firem',
        body: 'Osobní dealer na telefonu, zná vaše měnové páry a reaguje, když se kurz hne.',
      },
    ],
    cta: 'Více o spolupráci',
  },
  process: {
    headline: 'Jak s námi obchodovat',
    steps: [
      {
        step: '1',
        title: 'Krátký úvodní hovor',
        body: 'Projdeme vaše měny, objemy a zda dává smysl forward nebo spot.',
      },
      {
        step: '2',
        title: 'Rámcová smlouva',
        body: 'Připraví ji regionální ředitel — jednorázově, pak už jen obchody.',
      },
      {
        step: '3',
        title: 'Obchod a vypořádání',
        body: 'Telefonicky s dealingem, potvrzení emailem, peníze na cestě.',
      },
    ],
    cta: 'Jak začít spolupráci',
  },
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
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/sabfinanceas' },
      { label: 'Facebook', href: 'https://www.facebook.com/sabfinanceas/' },
    ],
    legal: ['Ochrana osobních údajů', 'Cookies', 'Whistleblowing'],
    aside: 'SAB Finance a.s. · IČ: 24717444 · DIČ: CZ699003130',
  },
} as const

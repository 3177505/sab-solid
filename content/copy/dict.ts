import type { Dictionary } from './types'

export const dict: Dictionary = {
  meta: {
    siteName: 'SAB Solid',
    siteDescription: 'Redesign homepage sab.cz — UX workshop',
  },
  nav: {
    hub: 'Obsah',
    analysis: 'Audit',
    ux: 'UX',
    ui: 'UI',
    uiClassic: 'UI Jednoduchá verze',
    uiPremium: 'UI Rozšířená verze',
    tokens: 'Style guide',
    copy: 'UX Copywriting',
    mobileUx: 'Mobile UX',
    mobileUi: 'UI Mobile',
    external: 'sab.cz',
    ariaLabel: 'Navigace',
  },
  lang: {
    cz: 'CZ',
    en: 'EN',
    switchAria: 'Přepnout jazyk',
  },
  hub: {
    title: 'Redesign homepage sab.cz',
    meta: 'Tereza Nováková · 8.7.2026 · Výběrové řízení · UX Workshop',
    phases: [
      '01 · Audit',
      '02 · UX Copywriting',
      '03 · UX Návrh',
      '04 · UI Style guide',
      '05 · UI Jednoduchá verze',
      '06 · UI Rozšířená verze',
      '07 · UX Mobile rozšíření',
      '08 · UI Mobile rozšíření jednoduchá verze',
    ],
  },
  analysis: {
    title: 'Audit & strategie',
    intro:
      'SAB Finance není retailová banka. Je to licencovaná platební instituce pro B2B devizové obchody. Web musí generovat kvalifikované leady a srozumitelně vysvětlit produkty — zejména zajištění kurzového rizika.',
    sections: {
      who: {
        title: 'Kdo je SAB Finance',
        items: [
          'Licencovaná platební instituce (ČNB) — devizové obchody, zahraniční platby, zajištění kurzového rizika.',
          '20+ let na trhu, 20 000 firemních klientů, 1,74 mil. vypořádaných obchodů.',
          'Osobní dealing po telefonu + online platforma — hybridní model, ne self-service neobank.',
          'Sídlo Praha, provozovna Zlín. Klienti po celé ČR — převážně SME a střední firmy.',
        ],
      },
      core: {
        title: 'Co je jádro byznysu (ne „banka pro všechny")',
        items: [
          'Jistota kurzu v době, kdy firma ví o budoucí platbě nebo inkasu — měnový forward.',
          'Výhodný kurz při okamžité směně — konkurence vůči bankám bez absurdních poplatků.',
          'Rychlé vypořádání plateb do/z zahraničí — operativní FX, ne investiční produkty.',
          'Hlídání kurzů a poradenství — dlouhodobý vztah, ne jednorázová transakce.',
        ],
        insight:
          'Hlavní emoce klienta: jistota a kontrola nad kurzovým rizikem. Ne „moře obchodů", ne lifestyle banking.',
      },
      audiences: {
        title: 'Komu mluvíme',
        groups: [
          {
            name: 'Finanční manažer / CFO',
            need: 'Rozumí forwardům, chce rychlý kurz, transparentní podmínky, méně administrativy než u banky.',
          },
          {
            name: 'Majitel exportní / importní firmy',
            need: 'Ví, že platí v EUR, nechce prodělat na kurzu — nepotřebuje žargon, potřebuje scénář „co se stane".',
          },
          {
            name: 'Účetní / office manager',
            need: 'Zadává platby, potřebuje jednoduchý proces a jasný kontakt — často první touchpoint na webu.',
          },
        ],
        tension:
          'Klíčová tenze: část publika finančním produktům rozumí, část ne. Web musí fungovat pro oba — bez bankovního žargonu, ale odborně správně.',
      },
      current: {
        title: 'Co dnes nefunguje (sab.cz)',
        problems: [
          {
            title: 'Slabá lead-generation',
            desc: 'Hlavní akce = „zavolejte nám". Chybí řízený vstup do obchodního procesu a před-kvalifikace.',
          },
          {
            title: 'Produkty schované v kotvách',
            desc: 'Vše pod „Pro klienty" — forward, směna, platby nejsou samostatné vstupy.',
          },
          {
            title: 'Mix obchodního a investorského obsahu',
            desc: 'Valné hromady a úpis akcií v hlavní navigaci vedle služeb pro firmy — matoucí pro nového klienta.',
          },
          {
            title: 'Metafory místo jasnosti',
            desc: '„Jednička v moři devizových obchodů" — neříká, co firma získá. Fotka moře neprodává jistotu kurzu.',
          },
          {
            title: 'Forward nevysvětlený',
            desc: 'Laik nepochopí, kdy forward dává smysl, jaký je rozdíl oproti „počkám na kurz".',
          },
        ],
      },
      goals: {
        title: 'Cíle redesignu',
        primaryLabel: 'Primární',
        secondaryLabel: 'Sekundární',
        primary: [
          'Generování kvalitních B2B leadů',
          'Před-kvalifikace klienta (objem, měny, import/export)',
          'Srozumitelné vysvětlení služeb pro méně zkušené',
        ],
        secondary: [
          'Důvěryhodná značka — licence, čísla, reference',
          'Designový systém pro další materiály',
          'SEO na devizové služby a FX zajištění',
        ],
      },
      positioning: {
        title: 'Navrhované positioning & messaging',
        headline: 'Jistota kurzu pro firmy, které obchodují se zahraničím.',
        pillars: [
          {
            title: 'Jistota',
            desc: 'Fixní kurz na známou fakturu — víte dopředu, kolik zaplatíte nebo dostanete.',
          },
          {
            title: 'Výhodný kurz',
            desc: 'Konkurenceschopné sazby bez skrytých poplatků — srovnání s bankou jako důkaz.',
          },
          {
            title: 'Rychlost & osobní servis',
            desc: 'Obchod telefonicky během minut, vypořádání bleskově — lidský dealing, ne chatbot.',
          },
        ],
        cta: {
          bad: ['Napište nám', 'Zavolejte nám', 'Kontakt'],
          good: [
            'Nezávazná konzultace',
            'Zjistit aktuální kurz',
            'Chci fixní kurz na fakturu',
            'Spočítat úsporu oproti bance',
          ],
        },
      },
      ia: {
        title: 'Navrhovaná informační architektura',
        main: [
          'Služby (Směna · Platby · Zajištění kurzu · Hlídání kurzů · Poradenství)',
          'Pro koho (Exportéři · Importéři · Pravidelné platby)',
          'Jak to funguje',
          'O nás',
        ],
        separated: 'Investoři — odděleně (horní pravý roh / patička), ne v hlavní klientské cestě.',
        cta: 'Stát se klientem / Nezávazná poptávka — vždy viditelné.',
      },
      principles: {
        title: 'Design principy (z auditu)',
        items: [
          'Od shora dolů: hero → důvěra → problém → produkty → forward vysvětlení → proces → reference → lead formulář.',
          'Čísla jako důkaz (20 000 klientů) — animované counters až v UI, ne jako dekorace.',
          'Scénáře místo definic: „Máte fakturu 50 000 EUR za 60 dní…"',
          'Dvě UI varianty se stejnou UX kostrou — Classic pro konzervativní B2B, Premium pro wow pitch.',
        ],
      },
    },
  },
  ux: {
    title: 'UX kostra homepage',
    intro:
      'Wireframe bez vizuálního designu. Každá sekce má (i) s vysvětlením proč je zde a co má uživatel udělat.',
    sections: {
      nav: {
        label: 'Navigace + primární CTA',
        hint: 'Oddělení klientského obsahu od investorského. Služby seskupené v dropdownu. CTA „Nezávazná poptávka" vždy viditelné — ne schované v patičce.',
      },
      hero: {
        label: 'Hero — hodnota + 2 cesty',
        hint: 'Headline = jistota kurzu, ne metafora moře. Primární CTA: poptávka / konzultace. Sekundární: živý kurz nebo kalkulačka — okamžitá hodnota bez registrace.',
      },
      trust: {
        label: 'Trust strip — licence, roky, čísla',
        hint: 'Okamžitá důvěra pod hero: Platební instituce · 20 let · 20 000 klientů. Krátké, skenovatelné — CFO to čte za 2 sekundy.',
      },
      problem: {
        label: 'Problém — „Platíte v cizí měně?"',
        hint: 'Dva scénáře: importér (platím dodavateli) vs exportér (čekám na inkaso). Uživatel se pozná — teprve pak produkt.',
      },
      services: {
        label: 'Služby — 4 karty, forward zvýrazněn',
        hint: 'Směna, Platby, Zajištění kurzu (větší), Hlídání kurzů. Každá karta: pro koho · kdy · CTA. Forward dostane nejvíc prostoru — klíčový diferenciátor.',
      },
      forward: {
        label: 'Forward vysvětlení — scénář krok za krokem',
        hint: 'Konkrétní příklad: faktura 50 000 EUR, splatnost 90 dní. Co se stane bez forwardu vs s forwardem. Žádný žargon — „fixní kurz dnes".',
      },
      process: {
        label: 'Jak to funguje — 3 kroky',
        hint: 'Rámcová smlouva → Obchod po telefonu → Vypořádání. Snižuje strach z „složitého finančního produktu".',
      },
      proof: {
        label: 'Reference + loga klientů',
        hint: 'Becherovka, LASSELSBERGER atd. — B2B social proof. Citát finančního manažera, ne marketingové fráze.',
      },
      lead: {
        label: 'Lead formulář — před-kvalifikace',
        hint: 'Ne generický kontakt. Pole: firma, měnový pár, měsíční objem, import/export, co řeší. Obchodník dostane warm lead.',
      },
      footer: {
        label: 'Patička — kontakt, investoři, legal',
        hint: 'Investoři a whistleblowing dole. Telefon zůstává, ale není jediná konverze.',
      },
    },
  },
  ui: {
    classic: {
      title: 'UI — Classic',
      desc: 'Světlejší, klidnější varianta. Důraz na čitelnost a důvěru. UI design doplníme v dalším kroku.',
    },
    premium: {
      title: 'UI — Premium',
      desc: 'Tmavší, animovanější varianta. Gradienty, counters, motion. UI design doplníme v dalším kroku.',
    },
    switchLabel: 'Varianta',
  },
  tokens: {
    title: 'Style guide',
    intro:
      'Souhrn všech designových proměnných — barvy, typografie, spacing a komponenty. Jeden přehled, ze kterého vycházejí obě UI varianty.',
    groups: ['Barvy', 'Typografie', 'Spacing', 'Komponenty'],
  },
  mobileUx: {
    title: 'Mobile UX',
    intro: 'Stejná UX struktura jako desktop — sekce pod sebou, hamburger navigace, CTA vždy dostupné.',
    viewport: '390 × 844 px · iPhone 14 Pro',
    notesTitle: 'Mobilní principy',
    notes: [
      'Hamburger + logo + CTA v jedné řádce — žádný dropdown v hlavní liště',
      'Hero: headline, podtext, primární CTA, sekundární CTA — vše pod sebou',
      'Služby jako vertikální karty — forward první / zvýrazněný',
      'Formulář na plnou šířku — minimum polí nad foldem',
      'Telefon jako sticky FAB nebo v patičce, ne jako jediná akce v hero',
    ],
  },
  mobileUi: {
    title: 'UI Mobile',
    intro: 'Jednoduchá UI varianta v mobilním viewportu — stejná struktura jako desktop Classic.',
    viewport: '390 × 844 px · iPhone 14 Pro',
  },
}

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
    tokens: 'Style guide',
    copy: 'UX Copywriting',
    mobileUx: 'UX Mobil',
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
    meta: 'Tereza Nováková · 8.7.2026 · Výběrové řízení · UX Workshop · Solidpixels',
    phases: [
      '01 · Audit',
      '02 · UX Copywriting',
      '03 · UX Návrh',
      '04 · UI Style guide',
      '05 · UI Návrh',
      '06 · UX Návrh — Mobil',
    ],
  },
  analysis: {
    title: 'Audit webu',
    intro:
      'Výchozí bod redesignu: audit současné homepage sab.cz z pohledu firemního klienta: současný stav webu, kde stránka ztrácí lead → návrh postupu redesignu.',
    sections: [
      {
        title: 'SAB Finance v kostce',
        summary: 'Společnost která pomáhá firmám řídit kurzové riziko v zahraničním obchodu',
        layout: 'full',
        itemsLayout: 'grid-2',
        items: [
          {
            text: 'Licencovaná platební instituce — devizové obchody, zahraniční platby a zajištění kurzového rizika pro firmy v mezinárodním obchodu.',
          },
          {
            text: 'Kompletní FX servis — směna, platby, forward, hlídání kurzů a poradenství pod jednou střechou.',
          },
          {
            text: 'Jistota kurzu — fixní kurz na známou fakturu, osobní dealing doplněný online platformou.',
          },
          {
            text: '20 let praxe, 20 000 firemních klientů — důvěryhodný partner pro SME a střední firmy v celé ČR.',
          },
        ],
      },
      {
        title: 'Čím se liší',
        layout: 'row',
        items: [
          {
            text: 'Kurz na míru — individuální sazby podle objemu obchodů a dlouhodobého vztahu s klientem.',
            emphasis: true,
          },
          {
            text: 'Forward jako standard — klíčový produkt pro firmy s pravidelným exportem a importem.',
            emphasis: true,
          },
          {
            text: 'Jeden kontakt, celý proces — od konzultace po vypořádání platby u obchodníka.',
            emphasis: true,
          },
        ],
      },
      {
        title: 'Co to není',
        layout: 'row',
        tone: 'muted',
        items: [
          { text: 'Retailové bankovnictví — služby pro fyzické osoby a rodinné finance.' },
          { text: 'Hypotéky a spotřebitelské úvěry — mimo rozsah služeb.' },
          { text: 'Investiční produkty — zaměření na operativní FX a platební služby.' },
        ],
      },
      {
        title: 'Kdo na web přichází',
        layout: 'full',
        items: [
          { text: 'CFO — rozumí produktům, chce rychlý kurz a jasné podmínky.' },
          { text: 'Majitel firmy — nechce prodělat na kurzu, potřebuje srozumitelný scénář.' },
          { text: 'Účetní — často první kontakt, hledá jednoduchý postup a jasný kontakt.' },
        ],
        aside:
          'Na web přicházejí zejména experti, ale i laici. Forward, měnové páry a vypořádání musí být srozumitelné i bez finančního žargonu. Musí být hned jasné, jaké služby spolecnost nabízí a pro koho jsou vhodné.',
      },
      {
        title: 'Co se na sab.cz dnes děje',
        layout: 'full',
        dividerBefore: 'arrow',
        items: [
          {
            text: 'Hero stojí na metafoře — „moře devizových obchodů" neříká, jaký problém web návštěvníkovi vyřeší.',
          },
          {
            text: 'Jediná výzva k akci je telefonát — chybí mezikrok pro klienta, který ještě není připraven volat.',
            emphasis: true,
          },
          {
            text: 'Služby jsou ukryté v navigaci — forward, směna i platby žijí pod jednou položkou „Pro klienty".',
          },
          {
            text: 'Dvě publika na jedné cestě — investorský obsah se v navigaci míchá se službami pro firmy.',
          },
          {
            text: 'Forward zůstává nevysvětlený — návštěvník bez finančního zázemí nepozná, kdy ho potřebuje.',
            emphasis: true,
          },
        ],
      },
      {
        title: 'Jak současná prezentace ovlivňuje komunikaci se zájemcem',
        layout: 'row',
        items: [
          {
            text: 'Zájemce přichází nepřipravený — obchodník věnuje první hovor základům místo konkrétní potřeby.',
          },
          {
            text: 'Kontakt nenese kontext — chybí objem, měnový pár i směr obchodu.',
            emphasis: true,
          },
          {
            text: 'Poptávky nelze prioritizovat — firma nepozná připraveného klienta od zvědavého návštěvníka.',
          },
          {
            text: 'Konkurenční výhoda se ztrácí — forward splývá s ostatním obsahem webu.',
          },
          {
            text: 'Chybí důvod preferovat SAB — zájemce nevidí rozdíl oproti nabídce banky.',
            emphasis: true,
          },
          {
            text: 'Důvěra se buduje pomalu — licence, čísla a reference stojí mimo hlavní cestu návštěvníka.',
          },
        ],
      },
      {
        title: 'Co na webu změnit',
        layout: 'full',
        dividerBefore: 'arrow',
        itemsLayout: 'cols-2',
        items: [
          {
            text: 'Hero říká přínos — místo „Jsme jedničkou v moři devizových obchodů!" např. „Víte dopředu, kolik zaplatíte v cizí měně."',
            emphasis: true,
          },
          {
            text: 'Dvě jasné akce — „Nezávazná konzultace" a „Zjistit aktuální kurz" nahradí telefon jako jediný vstup.',
            emphasis: true,
          },
          {
            text: 'Nová sekce s problémem — importér a exportér se poznají ve svém scénáři dřív, než padne slovo forward.',
          },
          {
            text: 'Forward s příkladem — faktura 50 000 EUR, splatnost 90 dní: kurz dnes vs. kurz za tři měsíce.',
          },
          {
            text: 'Služby ze 7 položek na 4 vstupy — každý s určením „pro koho" a vlastním CTA, forward zvýrazněný.',
          },
          {
            text: 'Proces bez bariéry — prvním krokem je hovor se specialistou, rámcová smlouva až po domluvě.',
          },
          {
            text: 'Formulář s před-kvalifikací — firma, měnový pár, měsíční objem, import nebo export.',
          },
          {
            text: 'Navigace podle řešení — položka „Pro klienty" se rozpadne na služby, investoři mimo hlavní menu.',
          },
        ],
      },
      {
        title: 'Co je cílem redesignu',
        layout: 'full',
        tone: 'note',
        items: [
          {
            text: 'Generovat kvalifikované poptávky — návštěvník projde od problému k formuláři, který obchodníkovi předá objem, měnu i směr obchodu.',
          },
          {
            text: 'Vysvětlit forward srozumitelně — konkrétní scénář s fakturou a splatností dá i laikovi důvod o zajištění uvažovat.',
          },
          {
            text: 'Postavit důvěru na faktech — licence ČNB, 20 let na trhu a 20 000 klientů viditelné přímo v hlavní cestě stránkou.',
          },
          {
            text: 'Oddělit publika — firemní klient a investor dostanou každý svou cestu, homepage slouží obchodu.',
          },
          {
            text: 'Založit designový systém — style guide, ze kterého vychází UI i další materiály firmy.',
          },
        ],
      },
    ],
  },
  ux: {
    title: 'UX návrh homepage',
    intro:
      'Wireframe celé stránky sab.cz — obsah, pořadí sekcí a cesta klienta. Reálné texty z copy návrhů. Vizuální design doplníme v další fázi.',
    sections: {
      nav: { label: 'Navigace', hint: '' },
      hero: { label: 'Hero', hint: '' },
      trust: { label: 'Důvěra', hint: '' },
      problem: { label: 'Problém', hint: '' },
      paths: { label: 'Dva vstupy', hint: '' },
      forwardFlow: { label: 'Forward flow', hint: '' },
      forward: { label: 'Forward příklad', hint: '' },
      services: { label: 'Služby', hint: '' },
      why: { label: 'Proč SAB', hint: '' },
      process: { label: 'Proces', hint: '' },
      proof: { label: 'Reference', hint: '' },
      lead: { label: 'Formulář', hint: '' },
      newsletter: { label: 'Newsletter', hint: '' },
      footer: { label: 'Patička', hint: '' },
    },
  },
  ui: {
    title: 'UI',
    desc: 'Classic homepage — scroll tóny, skleněné karty, Hedvig typografie, liquid gradient v hero a scroll motion.',
  },
  tokens: {
    title: 'Style guide',
    intro:
      'Designové proměnné finálního UI — identita SAB, scroll tóny, typografie Hedvig, spacing a tři typy tlačítek. Vychází z homepage /ui/classic.',
    groups: ['Barvy', 'Typografie', 'Spacing', 'Komponenty'],
  },
  mobileUx: {
    title: 'UX Mobil',
    intro:
      'Mobilní wireframe stejné homepage — sekce pod sebou, zjednodušená navigace, CTA vždy dostupné. UI zůstává desktopové.',
    viewport: '390 × 844 px · iPhone 14 Pro',
    notesTitle: 'Mobilní principy',
    notes: [
      'Logo + menu + CTA v jedné řádce — bez desktopového dropdownu v hlavní liště',
      'Hero: headline, podtext, CTA, kurzy pod sebou — dock s rychlými akcemi dole',
      'Proč SAB jako horizontální slider — jedna karta + náhled další',
      'Služby jako řádkové karty — forward první / zvýrazněný',
      'Reference v jednom panelu pod sebou, oddělené linkou',
      'Formulář na plnou šířku — vizuál nahoře, kontakt v patičce',
    ],
  },
}

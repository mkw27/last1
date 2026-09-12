/**
 * ============================================================
 *  CONTENT.JS — EVERYTHING ABOUT YOUR BUSINESS LIVES HERE
 * ============================================================
 *
 *  This is the ONLY file you edit for product, prices,
 *  delivery fees, FAQ, contact, and discount settings.
 *
 *  HOW TO EDIT:
 *   - Change text between quotes: 'like this'
 *   - Change numbers: just the number, no quotes
 *   - Keep commas at the end of every line except the last
 *   - Don't remove or rename the labels (productName:, etc.)
 *
 *  ⚠️ VERSION TAG — see the "version" field below.
 *  Bump it every time you change price, discount, or
 *  delivery fees. See instructions at the bottom of this file.
 * ============================================================
 */

window.CONTENT = {

  /* ============================================================
     1. VERSION TAG
     ============================================================
     Increment this every time you change ANY of:
       - unitPrice
       - discountEnabled / discountPercent
       - any delivery fee

     The server compares its version of this tag to what the
     customer's browser sent. If they differ, the order is
     still recorded, but marked "MISMATCH" so you know to
     double-check the price on the confirmation call.

     Change 'v1' → 'v2' → 'v3' etc. Never skip back.
     ============================================================ */
  version: 'v1',


  /* ============================================================
     2. BRAND & PRODUCT
     ============================================================ */
  brandName:   'Sable & Soleil',
  productName: 'Table de plage pliable',


  /* ============================================================
     3. HERO (top of the page)
     ============================================================ */
  heroEyebrow: 'Été 2026',
  heroTitle:   'La table pliable pour vos journées en plein air.',
  heroLead:    'Aluminium anodisé, plateau étanche, pieds antidérapants. Se plie en un geste et se glisse dans un sac.',


  /* ============================================================
     4. PRICING
     ============================================================ */
  unitPrice: 4900,            // Current price in DZD
  priceWas:  6500,            // Crossed-out old price, or null to hide
  priceNote: 'Édition lancement',  // Small label near price, or null to hide


  /* ============================================================
     5. DISCOUNT — toggle on/off, adjust percent
     ============================================================
     discountEnabled: true / false
     discountPercent: any number from 1 to 99
     discountMinQty:  the quantity from which the discount applies

     When discountEnabled is false, NO discount UI appears
     anywhere on the page. It's completely hidden.
     ============================================================ */
  discountEnabled: true,
  discountPercent: 10,
  discountMinQty:  2,


  /* ============================================================
     6. QUANTITY CAP
     ============================================================ */
  maxQty: 15,


  /* ============================================================
     7. CONTACT (appears in footer, FAQ, error messages)
     ============================================================ */
  contactPhone:     '0555 00 00 00',
  contactPhoneHref: '+213555000000',       // international format, no spaces
  contactEmail:     'contact@sable-soleil.dz',


  /* ============================================================
     8. PRODUCT DETAIL BLOCKS (the two big sections below the hero)
     ============================================================ */
  detail1: {
    eyebrow: 'Matériaux',
    title:   'Aluminium anodisé, plateau étanche.',
    body:    "Le plateau résiste à l'eau, au sable et aux UV. Un chiffon humide suffit à le remettre à neuf. Les pieds sont réglables sur trois hauteurs et s'adaptent à tous les terrains.",
    bullets: [
      'Aluminium anodisé, 800 g',
      'Supporte jusqu\'à 15 kg',
      'Se plie et se range dans un sac'
    ]
  },
  detail2: {
    eyebrow: 'Usage',
    title:   'De la plage au pique-nique.',
    body:    "Stable sur le sable, l'herbe, le gravier ou la pierre. Les pieds larges et antidérapants restent en place même quand la surface bouge."
  },


  /* ============================================================
     9. FEATURE CARDS (the four square boxes)
     ============================================================ */
  features: [
    {
      title: 'Se plie en un geste',
      body:  "Se replie à la taille d'un livre et se glisse dans un sac à main, un sac de plage ou une boîte à gants."
    },
    {
      title: '800 grammes',
      body:  'Assez légère pour être portée toute la journée, assez solide pour supporter 15 kg sans fléchir.'
    },
    {
      title: 'Stable sur tout terrain',
      body:  "Pieds larges et antidérapants. Elle reste droite sur le sable, l'herbe, le gravier ou la pierre."
    },
    {
      title: "Résistante à l'eau",
      body:  'Aluminium anodisé et plateau étanche. Un chiffon humide suffit à la remettre à neuf.'
    }
  ],


  /* ============================================================
     10. FAQ — add or remove entries freely
     ============================================================
     Each entry has a "q" (question) and an "a" (answer).
     The last FAQ about contacting appears automatically.
     ============================================================ */
  faq: [
    {
      q: 'Est-ce que je dois payer quelque chose maintenant ?',
      a: "Non. Vous ne payez rien tant que vous n'avez pas reçu le colis. Le règlement se fait en espèces auprès du livreur, après vérification."
    },
    {
      q: 'Quel est le délai de livraison ?',
      a: 'Nous expédions sous 24 heures. Le colis arrive généralement en 48 à 72 heures selon votre wilaya. Les wilayas du sud peuvent demander un jour supplémentaire.'
    },
    {
      q: 'Comment sont calculés les frais de livraison ?',
      a: 'Les frais dépendent de votre wilaya et du mode choisi. Au bureau (retrait au bureau du transporteur) est moins cher qu\'à domicile. Le montant exact s\'affiche automatiquement dans le formulaire quand vous sélectionnez votre wilaya.'
    },
    {
      q: 'Puis-je refuser le colis ?',
      a: 'Oui. Vous pouvez refuser à la livraison sans rien payer. Nous vous demandons simplement de nous prévenir par téléphone pour alerter le livreur.'
    },
    {
      q: 'Comment vous contacter ?',
      a: 'CONTACT_AUTO'    // ← leave this exactly as-is, it fills itself
    }
  ],


  /* ============================================================
     11. DELIVERY FEES
     ============================================================
     Fees per wilaya, for both delivery modes.
     domicile = delivered to the customer's home
     bureau   = customer picks up at the courier's office
     Edit the numbers. Don't rename the wilaya keys.
     ============================================================ */
  deliveryFees: {
    '01 — Adrar':           { domicile: 1200, bureau: 850 },
    '02 — Chlef':           { domicile: 700,  bureau: 400 },
    '03 — Laghouat':        { domicile: 900,  bureau: 600 },
    '04 — Oum El Bouaghi':  { domicile: 700,  bureau: 400 },
    '05 — Batna':           { domicile: 700,  bureau: 400 },
    '06 — Béjaïa':          { domicile: 600,  bureau: 350 },
    '07 — Biskra':          { domicile: 800,  bureau: 500 },
    '08 — Béchar':          { domicile: 1200, bureau: 850 },
    '09 — Blida':           { domicile: 450,  bureau: 300 },
    '10 — Bouira':          { domicile: 600,  bureau: 350 },
    '11 — Tamanrasset':     { domicile: 1400, bureau: 1000 },
    '12 — Tébessa':         { domicile: 800,  bureau: 500 },
    '13 — Tlemcen':         { domicile: 700,  bureau: 400 },
    '14 — Tiaret':          { domicile: 700,  bureau: 400 },
    '15 — Tizi Ouzou':      { domicile: 500,  bureau: 300 },
    '16 — Alger':           { domicile: 400,  bureau: 250 },
    '17 — Djelfa':          { domicile: 800,  bureau: 500 },
    '18 — Jijel':           { domicile: 600,  bureau: 350 },
    '19 — Sétif':           { domicile: 600,  bureau: 350 },
    '20 — Saïda':           { domicile: 700,  bureau: 400 },
    '21 — Skikda':          { domicile: 600,  bureau: 350 },
    '22 — Sidi Bel Abbès':  { domicile: 700,  bureau: 400 },
    '23 — Annaba':          { domicile: 600,  bureau: 350 },
    '24 — Guelma':          { domicile: 650,  bureau: 400 },
    '25 — Constantine':     { domicile: 600,  bureau: 350 },
    '26 — Médéa':           { domicile: 500,  bureau: 300 },
    '27 — Mostaganem':      { domicile: 600,  bureau: 350 },
    '28 — M\'Sila':         { domicile: 650,  bureau: 400 },
    '29 — Mascara':         { domicile: 700,  bureau: 400 },
    '30 — Ouargla':         { domicile: 1000, bureau: 700 },
    '31 — Oran':            { domicile: 500,  bureau: 300 },
    '32 — El Bayadh':       { domicile: 900,  bureau: 600 },
    '33 — Illizi':          { domicile: 1400, bureau: 1000 },
    '34 — Bordj Bou Arreridj': { domicile: 600, bureau: 350 },
    '35 — Boumerdès':       { domicile: 450,  bureau: 300 },
    '36 — El Tarf':         { domicile: 650,  bureau: 400 },
    '37 — Tindouf':         { domicile: 1400, bureau: 1000 },
    '38 — Tissemsilt':      { domicile: 700,  bureau: 400 },
    '39 — El Oued':         { domicile: 900,  bureau: 600 },
    '40 — Khenchela':       { domicile: 750,  bureau: 450 },
    '41 — Souk Ahras':      { domicile: 700,  bureau: 400 },
    '42 — Tipaza':          { domicile: 450,  bureau: 300 },
    '43 — Mila':            { domicile: 600,  bureau: 350 },
    '44 — Aïn Defla':       { domicile: 500,  bureau: 300 },
    '45 — Naâma':           { domicile: 1000, bureau: 700 },
    '46 — Aïn Témouchent':  { domicile: 650,  bureau: 400 },
    '47 — Ghardaïa':        { domicile: 900,  bureau: 600 },
    '48 — Relizane':        { domicile: 600,  bureau: 350 },
    '49 — Timimoun':        { domicile: 1300, bureau: 950 },
    '50 — Bordj Badji Mokhtar': { domicile: 1400, bureau: 1000 },
    '51 — Ouled Djellal':   { domicile: 900,  bureau: 600 },
    '52 — Béni Abbès':      { domicile: 1200, bureau: 850 },
    '53 — In Salah':        { domicile: 1400, bureau: 1000 },
    '54 — In Guezzam':      { domicile: 1500, bureau: 1100 },
    '55 — Touggourt':       { domicile: 950,  bureau: 650 },
    '56 — Djanet':          { domicile: 1500, bureau: 1100 },
    '57 — El M\'Ghair':     { domicile: 900,  bureau: 600 },
    '58 — El Meniaa':       { domicile: 1000, bureau: 700 }
  },

  /* Used only if a wilaya above is missing from the list.
     You won't normally need this. */
  defaultDeliveryFee: { domicile: 900, bureau: 600 }

};

/**
 * ============================================================
 *  WHEN YOU CHANGE PRICES OR DELIVERY FEES
 * ============================================================
 *
 *  1. Change the number in this file.
 *  2. Bump the version tag at the top (v1 → v2).
 *  3. Save this file.
 *  4. Re-upload the whole folder to Cloudflare Pages.
 *  5. Wait 60 seconds.
 *
 *  The server will fetch the new version automatically.
 *  If any order arrives during that 60-second window with
 *  the old version, it's still recorded — just marked
 *  "MISMATCH" in the Sheet so you can double-check the price
 *  on the confirmation call. You never lose a customer.
 * ============================================================
 */

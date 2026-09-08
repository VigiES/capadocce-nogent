export const restaurant = {
  name: 'Le Capadocce',
  wordmark: 'CAPADOCCE',
  activity: 'Restaurant turc · Kebab',
  address: '3B rue Tochon, 28400 Nogent-le-Rotrou',
  phone: '02 37 29 04 03',
  phoneHref: 'tel:+3327290403',
  cardMinimum: 'CB à partir de 10 €',
  mapsUrl: 'https://maps.google.com/maps?ftid=0x47e3b7313a8aa7cf:0xe17c7fc969c8b497',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Le+Capadocce,+3B+rue+Tochon,+28400+Nogent-le-Rotrou&output=embed',
  uberEatsUrl: 'https://www.ubereats.com/fr/store/capadocce/C9GgS7P8XIOzIqK4oQu6xw',
  pressUrl: 'https://actu.fr/centre-val-de-loire/nogent-le-rotrou_28280/on-est-alle-gouter-le-meilleur-kebab-deure-et-loir-de-2026-une-adresse-deja-bien-connue-a-nogent-le-rotrou_63721533.html',
};

export const hours = [
  { day: 'Lundi', value: 'Fermé' },
  { day: 'Mardi', value: '11 h 30–14 h · 18 h–22 h' },
  { day: 'Mercredi', value: '11 h 30–14 h · 18 h–22 h' },
  { day: 'Jeudi', value: '11 h 30–14 h · 18 h–22 h' },
  { day: 'Vendredi', value: '11 h 30–14 h · 18 h–22 h' },
  { day: 'Samedi', value: '11 h 30–14 h · 18 h–22 h' },
  { day: 'Dimanche', value: '18 h–22 h' },
];

export type MenuItem = { name: string; detail?: string; prices: { label: string; value: string }[] };

export const menu: { id: string; title: string; note?: string; items: MenuItem[] }[] = [
  {
    id: 'sandwichs', title: 'Sandwichs', note: 'Pain ou galette · Kebab, köfte, steak, chicken ou merguez',
    items: [{ name: 'Au choix', prices: [{ label: 'avec frites', value: '8 €' }, { label: 'frites + boisson 33 cl', value: '9,50 €' }] }],
  },
  {
    id: 'assiettes', title: 'Assiettes', note: 'Kebab, köfte, steak, chicken ou merguez',
    items: [
      { name: '1 viande', prices: [{ label: 'avec frites', value: '12 €' }, { label: 'frites + boisson 33 cl', value: '13,50 €' }] },
      { name: 'Mixte', detail: '2 viandes', prices: [{ label: 'avec frites', value: '13,50 €' }, { label: 'avec boisson 33 cl', value: '15 €' }] },
      { name: 'Royal', detail: '3 viandes', prices: [{ label: 'avec frites', value: '15,50 €' }, { label: 'avec boisson 33 cl', value: '17 €' }] },
    ],
  },
  {
    id: 'tacos-bowls', title: 'Tacos & bowls',
    note: 'Servi avec frites et sauce fromagère · Kebab, steak, chicken, merguez, köfte, nuggets, tenders ou cordon bleu',
    items: [
      { name: '1 viande', prices: [{ label: 'seul', value: '9 €' }, { label: 'menu', value: '10,50 €' }] },
      { name: '2 viandes', prices: [{ label: 'seul', value: '11 €' }, { label: 'menu', value: '12,50 €' }] },
      { name: '3 viandes', prices: [{ label: 'seul', value: '13 €' }, { label: 'menu', value: '14,50 €' }] },
    ],
  },
  {
    id: 'burgers', title: 'Burgers',
    items: [
      { name: 'Miniburger', detail: 'Steak 45 g', prices: [{ label: 'avec frites', value: '5,50 €' }, { label: 'frites + boisson', value: '7 €' }] },
      { name: 'Hamburger', detail: 'Steak 100 g', prices: [{ label: 'avec frites', value: '8 €' }, { label: 'frites + boisson', value: '9,50 €' }] },
    ],
  },
  {
    id: 'paninis', title: 'Paninis', note: 'Kebab, köfte, steak, chicken, merguez ou fromage',
    items: [{ name: 'Au choix', prices: [{ label: 'avec frites', value: '8 €' }, { label: 'frites + boisson', value: '9,50 €' }] }],
  },
  {
    id: 'accompagnements', title: 'Barquettes & accompagnements',
    items: [
      { name: 'Salade', prices: [{ label: '', value: '2,50 €' }] },
      { name: 'Petite frite', prices: [{ label: '', value: '3 €' }] },
      { name: 'Grande frite', prices: [{ label: '', value: '4 €' }] },
      { name: 'Petite viande', prices: [{ label: '', value: '6,50 €' }] },
      { name: 'Grande viande', prices: [{ label: '', value: '13 €' }] },
      { name: 'Viande + frites', prices: [{ label: '', value: '5 €' }] },
      { name: '4 wings + frites', prices: [{ label: '', value: '5 €' }] },
      { name: '4 nuggets + frites', prices: [{ label: '', value: '5 €' }] },
    ],
  },
  {
    id: 'boissons', title: 'Boissons', note: 'Coca-Cola, Fanta et Oasis visibles sur la carte',
    items: [
      { name: 'Boisson 33 cl', prices: [{ label: '', value: '2 €' }] },
      { name: 'Boisson 1,25 l', prices: [{ label: '', value: '3,50 €' }] },
      { name: 'Eau 50 cl', prices: [{ label: '', value: '1 €' }] },
      { name: 'Café', prices: [{ label: '', value: '1,50 €' }] },
    ],
  },
  {
    id: 'desserts', title: 'Desserts',
    items: [
      { name: 'Tiramisu', prices: [{ label: '', value: '3 €' }] },
      { name: 'Panini Nutella', prices: [{ label: '', value: '4 €' }] },
      { name: 'Revani', detail: 'Dessert turc à la semoule imbibé de sirop', prices: [{ label: '', value: '3 €' }] },
      { name: 'Mousse au chocolat maison', prices: [{ label: '', value: '2,50 €' }] },
      { name: 'Cookie maison', prices: [{ label: '', value: '2,50 €' }] },
    ],
  },
];

export const sauces = ['Algérienne', 'Andalouse', 'Barbecue', 'Biggy', 'Blanche', 'Brasil', 'Burger', 'Chili thaï', 'Curry', 'Harissa', 'Ketchup', 'Mayo', 'Moutarde', 'Samouraï'];

export const reviews = [
  "Une expérience par excellence d'un kebab comme celui ci! Le service était parfait, aucune attente, et des ingrédients de bonne qualité!",
  "Aujourd'hui, nous avons découvert une adresse d'exception avec mes enfants ! Tant sur l'aspect humain que sur l'aspect gastronomique... Merci pour cette expérience avec un jeune patron au dessus du lot !",
  "aujourd'hui première fois au capadocce ! Très bon kebab ! Encore merci a Ahmet pour sa gentillesse et son professionnalisme !",
];

import { ArrowDown, ArrowUpRight, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { hours, menu, restaurant, reviews, sauces } from './data';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: restaurant.name,
  servesCuisine: ['Turque', 'Kebab'],
  address: { '@type': 'PostalAddress', streetAddress: '3B rue Tochon', postalCode: '28400', addressLocality: 'Nogent-le-Rotrou', addressCountry: 'FR' },
  telephone: restaurant.phone,
  url: restaurant.mapsUrl,
  priceRange: '€',
  hasMenu: '#carte',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '11:30', closes: '14:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '18:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '18:00', closes: '22:00' },
  ],
};

function ArrowLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  const external = href.startsWith('http');
  return <a className={`arrow-link ${className}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}><span>{children}</span><ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.4} /></a>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header className="site-header">
        <a className="brand-lockup" href="#accueil" aria-label="Le Capadocce, retour en haut"><span className="balloon-mark" aria-hidden="true" /><span>CAPADOCCE</span></a>
        <nav aria-label="Navigation principale"><a href="#carte">La carte</a><a href="#restaurant">Le restaurant</a><a href="#avis">Les avis</a><a href="#nous-trouver">Nous trouver</a></nav>
        <a className="call-button" href={restaurant.phoneHref}><Phone size={17} aria-hidden="true" /> Appeler</a>
      </header>

      <main id="contenu">
        <section className="hero" id="accueil">
          <div className="hero-topline"><span>Kebab · Nogent-le-Rotrou</span><span>3B rue Tochon</span></div>
          <h1 aria-label="Capadocce">CAPADOCCE</h1>
          <div className="hero-stage">
            <div className="hero-copy">
              <p className="eyebrow">Restaurant turc · Nogent-le-Rotrou</p>
              <h2>Les saveurs prennent de la hauteur.</h2>
              <p className="lead">Kebab, köfte, assiettes et douceurs turques. Rendez-vous rue Tochon.</p>
              <div className="hero-actions"><a className="primary-button" href="#carte">Voir la carte <ArrowDown size={18} aria-hidden="true" /></a><ArrowLink href="#nous-trouver">Nous trouver</ArrowLink></div>
            </div>
            <figure className="hero-art"><Image src="/images/capadocce-landscape.png" alt="Illustration graphique d’une montgolfière au-dessus des cheminées de fée de Cappadoce" fill priority sizes="(max-width: 980px) 94vw, 62vw" /></figure>
          </div>
        </section>

        <aside className="press-strip" aria-labelledby="press-title">
          <div className="press-year" aria-hidden="true">20<span>26</span></div>
          <div className="press-copy"><p>À lire dans Actu.fr</p><h2 id="press-title">« Le meilleur kebab d’Eure-et-Loir en 2026 »</h2><span>Selon l’article d’Actu.fr</span></div>
          <ArrowLink href={restaurant.pressUrl} className="press-link">Lire l’article</ArrowLink>
        </aside>

        <section className="menu-section" id="carte">
          <header className="section-intro"><p className="eyebrow">01 — La carte</p><h2>Choisir, c’est déjà goûter.</h2><p>Les prix incluent les accompagnements indiqués. Toute la carte reste lisible, même sur petit écran.</p></header>
          <nav className="category-nav" aria-label="Catégories de la carte">{menu.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav>
          <div className="menu-grid">
            {menu.map((section, index) => (
              <article className={`menu-block menu-block-${index + 1}`} id={section.id} key={section.id}>
                <div className="menu-heading"><span>{String(index + 1).padStart(2, '0')}</span><h3>{section.title}</h3>{section.note && <p>{section.note}</p>}</div>
                <div className="menu-items">
                  {section.items.map((item) => (
                    <div className="menu-item" key={`${section.id}-${item.name}`}>
                      <div><h4>{item.name}</h4>{item.detail && <p>{item.detail}</p>}</div>
                      <div className="price-list">{item.prices.map((price) => <div className="price" key={`${price.label}-${price.value}`}><span>{price.label}</span><strong>{price.value}</strong></div>)}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <aside className="sauces" aria-labelledby="sauces-title"><div><p className="eyebrow">Le grand choix</p><h3 id="sauces-title">14 sauces</h3></div><p>{sauces.join(' · ')}</p></aside>
        </section>

        <section className="restaurant-section" id="restaurant">
          <div className="restaurant-visual" aria-hidden="true"><Image src="/images/capadocce-landscape.png" alt="" fill sizes="(max-width: 980px) 100vw, 53vw" /><span>Rue<br />Tochon</span></div>
          <div className="restaurant-copy"><p className="eyebrow">02 — Le restaurant</p><h2>Une halte chaude, au cœur de Nogent.</h2><p>Sur place ou à emporter, Le Capadocce réunit les classiques du kebab et des spécialités turques dans une adresse de quartier simple et directe.</p><div className="dessert-callout"><span>À garder pour la fin</span><h3>Revani, mousse au chocolat et cookie maison.</h3><p>Le revani est un dessert turc à la semoule imbibé de sirop.</p></div></div>
        </section>

        <section className="reviews-section" id="avis">
          <header className="section-intro light"><p className="eyebrow">03 — Les avis</p><h2>Vous le dites mieux que nous.</h2><p>Extraits d’avis Google fournis par le propriétaire du projet.</p></header>
          <div className="reviews-grid">{reviews.map((review, index) => <blockquote key={review}><span aria-hidden="true">“</span><p>{review}</p><footer>Avis Google · Extrait {index + 1}</footer></blockquote>)}</div>
          <ArrowLink href={restaurant.mapsUrl} className="reviews-link">Voir tous les avis Google</ArrowLink>
        </section>

        <section className="location-section" id="nous-trouver">
          <div className="location-content"><p className="eyebrow">04 — Nous trouver</p><h2>On vous attend rue Tochon.</h2><address>{restaurant.address}</address><a className="phone-line" href={restaurant.phoneHref}>{restaurant.phone}</a><p className="payment-note">{restaurant.cardMinimum}</p><div className="hours" aria-label="Horaires d’ouverture">{hours.map((row) => <div key={row.day}><span>{row.day}</span><strong>{row.value}</strong></div>)}</div><div className="location-actions"><ArrowLink href={restaurant.mapsUrl}>Itinéraire</ArrowLink><ArrowLink href={restaurant.uberEatsUrl}>Commander sur Uber Eats</ArrowLink></div></div>
          <div className="map-wrap"><iframe title="Carte Google Maps — Le Capadocce, 3B rue Tochon à Nogent-le-Rotrou" src={restaurant.mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a href={restaurant.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={17} aria-hidden="true" /> Ouvrir dans Google Maps</a></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-wordmark">CAPADOCCE</div><div><strong>{restaurant.name}</strong><span>{restaurant.address}</span></div><div><a href={restaurant.phoneHref}>{restaurant.phone}</a><a href="#carte">La carte</a><a href="#nous-trouver">Nous trouver</a></div></footer>
      <nav className="mobile-bar" aria-label="Actions rapides"><a href="#carte"><ArrowDown size={18} aria-hidden="true" /> La carte</a><a href={restaurant.phoneHref}><Phone size={18} aria-hidden="true" /> Appeler</a><a href={restaurant.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={18} aria-hidden="true" /> Itinéraire</a></nav>
    </>
  );
}

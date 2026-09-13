import { ArrowDown, ArrowUpRight, MapPin, Phone } from 'lucide-react';
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

function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg className={`brand-mark ${className}`} viewBox="-56 -64 112 142" aria-hidden="true" focusable="false">
      <path className="mark-shell" d="M0-58C34-58 53-36 50-6C48 17 35 32 15 45L9 55H-9L-15 45C-35 32-48 17-50-6C-53-36-34-58 0-58Z" />
      <path className="mark-cut" d="M0-42C11-31 14-15 10 2C7 17 2 30 0 43C-2 30-7 17-10 2C-14-15-11-31 0-42Z" />
      <rect className="mark-basket" x="-8" y="57" width="16" height="12" rx="1" />
    </svg>
  );
}

function Wordmark({ className = '' }: { className?: string }) {
  return <span className={`wordmark ${className}`}><span className="sr-only">Capadocce</span><span aria-hidden="true">CAPAD</span><BrandMark className="wordmark-o" /><span aria-hidden="true">CCE</span></span>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header className="site-header">
        <a className="brand-lockup" href="#accueil" aria-label="Le Capadocce, retour en haut"><Wordmark /></a>
        <nav aria-label="Navigation principale"><a href="#carte">La carte</a><a href="#restaurant">Le restaurant</a><a href="#avis">Les avis</a><a href="#nous-trouver">Nous trouver</a></nav>
        <a className="call-button" href={restaurant.phoneHref}><Phone size={17} aria-hidden="true" /> Appeler</a>
      </header>

      <main id="contenu">
        <section className="hero" id="accueil">
          <div className="hero-topline"><span className="hero-kicker">Kebab — Nogent-le-Rotrou</span><span>3B rue Tochon</span></div>
          <div className="hero-canvas">
            <h1><Wordmark /></h1>
            <div className="hero-copy">
              <p className="eyebrow">Restaurant turc · Nogent-le-Rotrou</p>
              <h2>Les saveurs s’élèvent.</h2>
              <p className="lead">Kebab, köfte, assiettes et douceurs turques. Rendez-vous rue Tochon.</p>
              <div className="hero-actions"><a className="primary-button" href="#carte">Voir la carte <ArrowDown size={18} aria-hidden="true" /></a><ArrowLink href="#nous-trouver">Nous trouver</ArrowLink></div>
            </div>
            <BrandMark className="hero-mark" />
            <span className="hero-orb" aria-hidden="true" />
            <span className="hero-rise" aria-hidden="true" />
            <svg className="hero-line" viewBox="0 0 520 150" aria-hidden="true"><path d="M8 120C102 74 154 133 239 80C330 23 388 82 512 14" /></svg>
          </div>
        </section>

        <aside className="press-strip" aria-labelledby="press-title">
          <div className="press-year" aria-hidden="true">20<span>26</span></div>
          <div className="press-copy"><p>À lire dans Actu.fr</p><h2 id="press-title">« Le meilleur kebab d’Eure-et-Loir en 2026 »</h2><span>Selon l’article d’Actu.fr</span></div>
          <ArrowLink href={restaurant.pressUrl} className="press-link">Lire l’article</ArrowLink>
        </aside>

        <section className="menu-section" id="carte" aria-label="La carte">
          <div className="food-gallery" aria-label="La cuisine du Capadocce en quatre images">
            <figure className="food-shot food-shot-broche">
              <picture>
                <source type="image/avif" srcSet="/images/food/broche-900.avif 900w, /images/food/broche-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 70vw" />
                <source type="image/webp" srcSet="/images/food/broche-900.webp 900w, /images/food/broche-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 70vw" />
                <img src="/images/food/broche-1600.webp" width="1800" height="2250" loading="lazy" decoding="async" alt="Broche de kebab dorée en cuisson devant le gril" />
              </picture>
              <figcaption><span>01</span> Broche</figcaption>
            </figure>
            <figure className="food-shot food-shot-geste">
              <picture>
                <source type="image/avif" srcSet="/images/food/geste-900.avif 900w, /images/food/geste-1600.avif 1600w" sizes="(max-width: 640px) 58vw, 28vw" />
                <source type="image/webp" srcSet="/images/food/geste-900.webp 900w, /images/food/geste-1600.webp 1600w" sizes="(max-width: 640px) 58vw, 28vw" />
                <img src="/images/food/geste-1600.webp" width="1800" height="1216" loading="lazy" decoding="async" alt="Mains préparant un sandwich dans un pain plat" />
              </picture>
              <figcaption><span>02</span> Le geste</figcaption>
            </figure>
            <figure className="food-shot food-shot-pain">
              <picture>
                <source type="image/avif" srcSet="/images/food/pain-900.avif 900w, /images/food/pain-1600.avif 1600w" sizes="(max-width: 640px) 42vw, 28vw" />
                <source type="image/webp" srcSet="/images/food/pain-900.webp 900w, /images/food/pain-1600.webp 1600w" sizes="(max-width: 640px) 42vw, 28vw" />
                <img src="/images/food/pain-1600.webp" width="1800" height="1200" loading="lazy" decoding="async" alt="Kebab généreusement garni présenté à deux mains" />
              </picture>
              <figcaption><span>03</span> Le kebab</figcaption>
            </figure>
            <figure className="food-shot food-shot-frites">
              <picture>
                <source type="image/avif" srcSet="/images/food/frites-900.avif 900w, /images/food/frites-1600.avif 1600w" sizes="(max-width: 640px) 100vw, 28vw" />
                <source type="image/webp" srcSet="/images/food/frites-900.webp 900w, /images/food/frites-1600.webp 1600w" sizes="(max-width: 640px) 100vw, 28vw" />
                <img src="/images/food/frites-1600.webp" width="1800" height="1473" loading="lazy" decoding="async" alt="Frites dorées et croustillantes servies bien chaudes" />
              </picture>
              <figcaption><span>04</span> Les frites</figcaption>
            </figure>
          </div>
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
          <div className="restaurant-visual" aria-hidden="true"><BrandMark className="restaurant-mark" /><span className="restaurant-rise" /><svg viewBox="0 0 620 180"><path d="M10 146C92 103 159 156 237 111C326 59 399 117 610 24" /></svg><strong>Sur place<br />ou à emporter.</strong></div>
          <div className="restaurant-copy"><p className="eyebrow">02 — Le restaurant</p><h2>Une halte chaude, au cœur de Nogent.</h2><p>Sur place ou à emporter, Le Capadocce réunit les classiques du kebab et des spécialités turques dans une adresse de quartier simple et directe.</p><div className="dessert-callout"><span>À garder pour la fin</span><h3>Revani, mousse au chocolat et cookie maison.</h3><p>Le revani est un dessert turc à la semoule imbibé de sirop.</p></div></div>
        </section>

        <section className="reviews-section" id="avis">
          <header className="section-intro light"><p className="eyebrow">03 — Les avis</p><h2>Vous le dites mieux que nous.</h2></header>
          <div className="reviews-grid">{reviews.map((review) => <blockquote key={review}><span aria-hidden="true">“</span><p>{review}</p><footer>Avis Google</footer></blockquote>)}</div>
          <ArrowLink href={restaurant.mapsUrl} className="reviews-link">Voir tous les avis Google</ArrowLink>
        </section>

        <section className="location-section" id="nous-trouver">
          <div className="location-content"><p className="eyebrow">04 — Nous trouver</p><h2>On vous attend rue Tochon.</h2><address>{restaurant.address}</address><a className="phone-line" href={restaurant.phoneHref}>{restaurant.phone}</a><p className="payment-note">{restaurant.cardMinimum}</p><div className="hours" aria-label="Horaires d’ouverture">{hours.map((row) => <div key={row.day}><span>{row.day}</span><strong>{row.value}</strong></div>)}</div><div className="location-actions"><ArrowLink href={restaurant.mapsUrl}>Itinéraire</ArrowLink><ArrowLink href={restaurant.uberEatsUrl}>Commander sur Uber Eats</ArrowLink></div></div>
          <div className="map-wrap"><iframe title="Carte Google Maps — Le Capadocce, 3B rue Tochon à Nogent-le-Rotrou" src={restaurant.mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a href={restaurant.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={17} aria-hidden="true" /> Ouvrir dans Google Maps</a></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-wordmark"><Wordmark /></div><div><strong>{restaurant.name}</strong><span>{restaurant.address}</span></div><div><a href={restaurant.phoneHref}>{restaurant.phone}</a><a href="#carte">La carte</a><a href="#nous-trouver">Nous trouver</a></div></footer>
      <nav className="mobile-bar" aria-label="Actions rapides"><a href="#carte"><ArrowDown size={18} aria-hidden="true" /> La carte</a><a href={restaurant.phoneHref}><Phone size={18} aria-hidden="true" /> Appeler</a><a href={restaurant.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={18} aria-hidden="true" /> Itinéraire</a></nav>
    </>
  );
}

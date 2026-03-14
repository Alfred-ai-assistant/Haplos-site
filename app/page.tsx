import Image from 'next/image';

const APP_STORE_URL =
  'https://apps.apple.com/us/app/haplos/id6760237903';

const features = [
  {
    icon: '📝',
    title: 'Simple & Fast',
    description:
      'Create and manage grocery lists in seconds. A clean interface designed for speed.',
  },
  {
    icon: '📂',
    title: 'Sort by Category',
    description:
      'Organize items by aisle or category so you can breeze through the store.',
  },
  {
    icon: '🛒',
    title: 'Plan Grocery Trips',
    description:
      'Plan ahead with smart lists that help you never forget an item again.',
  },
  {
    icon: '👥',
    title: 'Share with Others',
    description:
      'Collaborate on lists with family or roommates in real time.',
  },
  {
    icon: '🍳',
    title: 'Add from Recipes',
    description:
      'Import ingredients directly from your favorite recipes into a shopping list.',
  },
  {
    icon: '🗣️',
    title: 'Siri Integration',
    description:
      'Add items hands-free with Siri. Just say what you need and it appears on your list.',
  },
];

const screenshots = [
  { src: '/images/SimpleFastOrganized.png', alt: 'Simple, fast, and organized lists' },
  { src: '/images/OrganizeSortCategories.png', alt: 'Organize and sort by categories' },
  { src: '/images/PlanGroceryTripsFaster.png', alt: 'Plan grocery trips faster' },
  { src: '/images/ShareListWithOthers.png', alt: 'Share lists with others' },
  { src: '/images/AddItemsFromRecipe.png', alt: 'Add items from a recipe' },
  { src: '/images/SiriIntegrationIncluded.png', alt: 'Siri integration included' },
];

function AppStoreBadge() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="app-store-badge"
      aria-label="Download on the App Store"
    >
      <svg
        viewBox="0 0 120 40"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
      >
        <rect width="120" height="40" rx="6" fill="#000" />
        <rect
          x="0.5"
          y="0.5"
          width="119"
          height="39"
          rx="5.5"
          stroke="#a6a6a6"
          fill="none"
        />
        <text
          x="42"
          y="14"
          fill="#fff"
          fontSize="5.5"
          fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
        >
          Download on the
        </text>
        <text
          x="42"
          y="27"
          fill="#fff"
          fontSize="11"
          fontWeight="600"
          fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
        >
          App Store
        </text>
        <g transform="translate(12, 6) scale(0.55)">
          <path
            d="M24.769 20.3a5.884 5.884 0 0 1 2.8-4.939 6.027 6.027 0 0 0-4.748-2.567c-2-.21-3.93 1.2-4.95 1.2s-2.6-1.18-4.29-1.14a6.27 6.27 0 0 0-5.28 3.22c-2.27 3.93-.58 9.72 1.6 12.9 1.09 1.57 2.36 3.32 4.05 3.26 1.64-.07 2.25-1.05 4.22-1.05s2.52 1.05 4.24 1.01c1.76-.03 2.86-1.58 3.9-3.16a14.14 14.14 0 0 0 1.79-3.63 5.69 5.69 0 0 1-3.29-5.12zM21.72 10.6a5.783 5.783 0 0 0 1.33-4.15 5.9 5.9 0 0 0-3.81 1.97 5.51 5.51 0 0 0-1.36 3.99 4.87 4.87 0 0 0 3.84-1.81z"
            fill="#fff"
          />
        </g>
      </svg>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <Image
            src="/images/Haplos_App_Icon.png"
            alt="Haplos app icon"
            width={120}
            height={120}
            className="hero-icon"
            priority
          />
          <h1>
            Your grocery list,
            <br />
            <span>simplified.</span>
          </h1>
          <p>
            Haplos makes grocery shopping effortless with smart lists,
            categories, recipe imports, and seamless sharing.
          </p>
          <AppStoreBadge />
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <h2>Everything you need</h2>
        <p>
          Powerful features wrapped in a simple, intuitive interface.
        </p>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="screenshots">
        <h2>See it in action</h2>
        <div className="screenshots-scroll">
          {screenshots.map((s) => (
            <div key={s.src} className="screenshot-item">
              <Image
                src={s.src}
                alt={s.alt}
                width={231}
                height={500}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <h2>Ready to simplify your shopping?</h2>
          <p>Download Haplos free on the App Store.</p>
          <AppStoreBadge />
        </div>
      </section>
    </main>
  );
}

import { PUBLISHERS } from '../data/content';

// Six columns that roll through three rows of logos; the first row repeats at the
// end so the loop is seamless.
const pubCols = Array.from({ length: 6 }, (_, c) => ({
  delay: `${(c * 0.09).toFixed(2)}s`,
  items: [0, 1, 2, 0].map((r, k) => {
    const [name, src, h] = PUBLISHERS[r * 6 + c];
    return { src, alt: k === 3 ? '' : name, h: `${(h * 0.8).toFixed(1)}px` };
  }),
}));

export default function PublisherBar() {
  return (
    <>
      <section className="cd-pub" aria-label="Publishers on deedooh">
        <div className="pub-row w-full grid grid-cols-6 gap-x-6">
          {pubCols.map((col, colIndex) => (
            <div key={colIndex} className="h-14 overflow-hidden">
              <div className="pub-track" style={{ animationDelay: col.delay }}>
                {col.items.map((it, itIndex) => (
                  <span key={itIndex} className="flex items-center justify-center h-14">
                    <img className="block w-auto max-w-full" src={it.src} alt={it.alt} style={{ height: it.h }} />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <p className="pt-6 pr-6 pb-24 pl-6 text-[15px] text-slate text-center">
        Screens from 20+ publishers all over the world
      </p>
    </>
  );
}

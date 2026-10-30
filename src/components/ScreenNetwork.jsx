import { useState } from 'react';
import Globe from './Globe';
import { NETWORK_CITIES } from '../data/content';

export default function ScreenNetwork() {
  const [sel, setSel] = useState(0);
  const netCities = NETWORK_CITIES.map(([name], i) => ({ name, sel: i === sel ? 'true' : 'false', pick: () => setSel(i) }));

  return (
    <section className="cd-sec cd-white" aria-labelledby="net-title">
      <div className="cd-in">
        <div className="cdn-grid">
          <div className="min-w-0">
            <h2 className="cd-h2 text-[clamp(32px,3.2vw,46px)]" id="net-title">
              Start on your street.
              <br />
              <b>
                Go anywhere.
              </b>
            </h2>
            <p className="cdn-num">
              2,200,000+
            </p>
            <p className="cdn-cap">
              screens worldwide
            </p>
            <ul className="cdn-pills" role="list">
              {netCities.map((c, cIndex) => (
                <li key={cIndex}>
                  <button className="cdn-pill" type="button" aria-pressed={c.sel} onClick={c.pick}>
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
            <p className="mb-7 max-w-[440px] text-[18px] leading-[1.55] text-slate">
              Book the screens around one store, or across a continent. Pick a city to see it on the globe.
            </p>
            <a className="cd-btn" href="#">
              Explore the screen map
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="cdn-globe">
            <Globe selected={sel} />
            <span className="cd-pill">
              <span className="cd-dot [--ring:#C4B5FD]" />
              <span>
                Drag to spin
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

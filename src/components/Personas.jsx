import { useState } from 'react';
import { PERSONAS } from '../data/content';

export default function Personas() {
  const [cur, setCur] = useState(0);
  const d = PERSONAS[cur];
  const psTabs = PERSONAS.map((p, i) => ({ label: p.label, sel: i === cur ? 'true' : 'false', pick: () => setCur(i) }));
  const { head: psHead, body: psBody, photo: psPhoto, photoPosition: psPos, pill: psPill, ring: psRing } = d;
  const psStats = d.stats.map(([v, who]) => ({ v, who }));

  return (
    <section className="cd-sec cd-white" aria-labelledby="ps-title">
      <div className="cd-in">
        <div className="cd-head">
          <h2 className="cd-h2" id="ps-title">
            Global or local,{' '}
            <b>
              find yours.
            </b>
          </h2>
          <p className="cd-lead">
            Whether you run one mall in Stockholm, launch globally twice a year or juggle fifteen brands, deedooh finds the screens where your audience spends its day.
          </p>
        </div>
        <div className="cdp-tabs" role="tablist" aria-label="Who it's for">
          {psTabs.map((t, tIndex) => (
            <button key={tIndex} className="cdp-tab" type="button" role="tab" aria-selected={t.sel} onClick={t.pick}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="cdp-card" role="tabpanel">
          <div className="cdp-photo">
            <img src={psPhoto} alt="" style={{ objectPosition: psPos }} />
            <span className="cd-pill">
              <span className="cd-dot" style={{ '--ring': psRing }} />
              <span>
                {psPill}
              </span>
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="cdp-big">
              {psHead}
            </h3>
            <p className="cdp-body">
              {psBody}
            </p>
            <ul className="cdp-stats" role="list">
              {psStats.map((st, stIndex) => (
                <li key={stIndex}>
                  <span className="cd-dot" style={{ '--ring': psRing }} />
                  <span>
                    <b>
                      {st.v}
                    </b>
                    <small>
                      {st.who}
                    </small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

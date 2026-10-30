import { STEPS, HIW_SCREENS, HIW_BARS, HIW_LOG } from '../data/content';
import { useAutoAdvance } from '../hooks/useAutoAdvance';

const DURATION = 6500;

const hiwScreens = HIW_SCREENS.map(([name, meta], i) => ({ name, meta, i: i + 1 }));
// Weekday bars in brand blue, weekends in lavender; each grows in slightly after the last.
const hiwBars = HIW_BARS.map((h, i) => ({ h, d: (0.4 + i * 0.04).toFixed(2), c: i % 7 === 5 || i % 7 === 6 ? '#C4B5FD' : '#4A40EC' }));
const hiwLog = HIW_LOG.map(([t, m, bg, fg], i) => ({ t, m, bg, fg, i: i + 1 }));

export default function HowItWorks() {
  const { index, progress, pick, pause, resume } = useAutoAdvance(STEPS.length, DURATION);
  const hiwSteps = STEPS.map((s, i) => ({
    ...s,
    active: i === index,
    sel: i === index ? 'true' : 'false',
    pct: i === index ? progress.toFixed(1) : 0,
    pick: () => pick(i),
  }));
  const [hiw0, hiw1, hiw2] = [index === 0, index === 1, index === 2];
  const hiwPause = pause;
  const hiwResume = resume;

  return (
    <section className="cd-sec" id="how-it-works" aria-labelledby="hiw-title">
      <div className="cd-in">
        <div className="cd-head">
          <h2 className="cd-h2" id="hiw-title">
            From plan to live{' '}
            <b>
              in 3 simple steps.
            </b>
          </h2>
          <p className="cd-lead">
            Plan and submit your campaign in minutes. We handle activation and delivery across your selected screens.
          </p>
        </div>
        <div className="cdh-grid">
          <div className="cdh-steps" role="tablist" aria-label="Steps" aria-orientation="vertical" onMouseEnter={hiwPause} onMouseLeave={hiwResume}>
            {hiwSteps.map((st, stIndex) => (
              <button key={stIndex} className="cdh-step" type="button" role="tab" aria-selected={st.sel} onClick={st.pick}>
                <span className="cdh-time">
                  {st.time}
                </span>
                <span className="cdh-title">
                  {st.title}
                </span>
                {st.active && (
                  <span className="cdh-body">
                    {st.body}
                  </span>
                )}
                <span className="cdh-bar" aria-hidden="true">
                  <i style={{ width: `${st.pct}%` }} />
                </span>
              </button>
            ))}
          </div>
          <div className="cdh-stage" aria-hidden="true">
            {hiw0 && (
              <>
                <img className="cdh-img hiw-photo [object-position:45%_40%]" src="/assets/proof-studio-nord.jpg" alt="" />
                <span className="cdh-tag">
                  <span className="cd-pill">
                    <span className="cd-dot [--ring:#7CFFCB]" />
                    <span>
                      08:12 · Picking screens
                    </span>
                  </span>
                </span>
                <div className="cdh-win">
                  <div className="cdh-win-h">
                    <b>
                      Your screens
                    </b>
                    <span>
                      18 selected
                    </span>
                  </div>
                  {hiwScreens.map((s, sIndex) => (
                    <div key={sIndex} className="hiw-row hl" style={{ '--i': s.i }}>
                      <span className="hiw-check">
                        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <b>
                          {s.name}
                        </b>
                        <small>
                          {s.meta}
                        </small>
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
            {hiw1 && (
              <>
                <img className="cdh-img hiw-photo [object-position:50%_28%]" src="/assets/ad-model.jpg" alt="" />
                <span className="cdh-tag">
                  <span className="cd-pill">
                    <span className="cd-dot [--ring:#C4B5FD]" />
                    <span>
                      08:20 · Budget set
                    </span>
                  </span>
                </span>
                <div className="cdh-win">
                  <div className="cdh-win-h">
                    <b>
                      €10,000
                    </b>
                    <span>
                      3 Mar → 16 Mar
                    </span>
                  </div>
                  <div className="flex items-end gap-1 h-24 mt-3 mb-1.5">
                    {hiwBars.map((b, bIndex) => (
                      <span key={bIndex} className="hiw-bar" style={{ height: `${b.h}%`, background: b.c, animationDelay: `${b.d}s` }} />
                    ))}
                  </div>
                  <div className="flex justify-between text-[12px] text-slate mb-3">
                    <span>
                      Week 1
                    </span>
                    <span>
                      Week 2
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pb-1.5">
                    <span className="hiw-chip on">
                      07–09 rush
                    </span>
                    <span className="hiw-chip on">
                      16–18 rush
                    </span>
                    <span className="hiw-chip">
                      Weekdays
                    </span>
                  </div>
                </div>
              </>
            )}
            {hiw2 && (
              <>
                <div className="absolute left-0 right-0 top-[-26%] aspect-[736/920]">
                  <img className="absolute inset-0 w-full h-full block" src="/assets/billboard.jpg" alt="" />
                  <div className="absolute left-[41.17%] top-[41.09%] w-[58.83%] h-[42.72%] @container bg-navy text-white overflow-hidden flex">
                    <div className="[flex:1_1_52%] flex flex-col justify-center gap-[3cqw] pl-[7cqw]">
                      <span className="text-[13cqw] font-extrabold leading-[0.92] tracking-[-0.04em]">
                        Spring is here.
                      </span>
                      <span className="text-[4.2cqw] font-medium text-lavender">
                        Nordic Oat · in stores now
                      </span>
                    </div>
                    <img className="[flex:0_0_48%] w-[48%] h-full object-cover [object-position:50%_15%] block" src="/assets/proof-fjord-bank.jpg" alt="" />
                  </div>
                </div>
                <span className="cdh-tag">
                  <span className="cd-pill">
                    <span className="cd-dot [--ring:#00D1FF]" />
                    <span>
                      09:00 · Live in Stockholm
                    </span>
                  </span>
                </span>
                <div className="cdh-win">
                  <div className="cdh-win-h">
                    <b>
                      Activation
                    </b>
                    <span>
                      Stockholm
                    </span>
                  </div>
                  {hiwLog.map((l, lIndex) => (
                    <div key={lIndex} className="hiw-log hl" style={{ '--i': l.i }}>
                      <span className="hiw-dot" style={{ background: l.bg, color: l.fg }}>
                        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <b>
                          {l.t}
                        </b>
                        <small>
                          {l.m}
                        </small>
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

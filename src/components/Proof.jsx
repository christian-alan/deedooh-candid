export default function Proof() {
  return (
    <section className="cd-sec" aria-labelledby="pf-title">
      <div className="cd-in">
        <div className="cd-head">
          <h2 className="cd-h2" id="pf-title">
            Proof?{' '}
            <b>
              It's on the street.
            </b>
          </h2>
          <p className="cd-lead">
            Real teams, real campaigns. Hover a card to hear how it went.
          </p>
        </div>
        <div className="pf-row">
          <a className="pf-card bg-[#C9D8F0]" href="#">
            <img className="pf-img [object-position:50%_20%]" src="/assets/proof-kvarter-coffee.jpg" alt="" />
            <span className="pf-fade" aria-hidden="true" />
            <span className="pf-fade btm" aria-hidden="true" />
            <span className="pf-brand">
              <span className="cd-dot [--ring:#7CFFCB]" />
              Kvarter Coffee
            </span>
            <span className="pf-btm">
              <span className="pf-q">
                <span>
                  <span className="pf-quote">
                    “We booked the screens around our three new cafés in an afternoon. Opening week was our busiest ever.”
                  </span>
                </span>
              </span>
              <span className="pf-who">
                Johan Ek, Head of Marketing
              </span>
            </span>
          </a>
          <a className="pf-card bg-[#D9D3FF]" href="#">
            <img className="pf-img [object-position:50%_18%]" src="/assets/proof-fjord-bank.jpg" alt="" />
            <span className="pf-fade" aria-hidden="true" />
            <span className="pf-fade btm" aria-hidden="true" />
            <span className="pf-brand">
              <span className="cd-dot [--ring:#C4B5FD]" />
              Fjord Bank
            </span>
            <span className="pf-btm">
              <span className="pf-q">
                <span>
                  <span className="pf-quote">
                    “For the first time, outdoor felt as measurable as our digital channels, city by city.”
                  </span>
                </span>
              </span>
              <span className="pf-who">
                Sara Lind, Brand Lead
              </span>
            </span>
          </a>
          <a className="pf-card bg-[#D5DEEC]" href="#">
            <img className="pf-img [object-position:45%_40%]" src="/assets/proof-studio-nord.jpg" alt="" />
            <span className="pf-fade" aria-hidden="true" />
            <span className="pf-fade btm" aria-hidden="true" />
            <span className="pf-brand">
              <span className="cd-dot [--ring:#00D1FF]" />
              Studio Nord
            </span>
            <span className="pf-btm">
              <span className="pf-q">
                <span>
                  <span className="pf-quote">
                    “I plan campaigns for six clients. deedooh turned two weeks of emails into one brief.”
                  </span>
                </span>
              </span>
              <span className="pf-who">
                Amira Haddad, Media Planner
              </span>
            </span>
          </a>
          <a className="pf-card bg-[#F3EFC2]" href="#">
            <img className="pf-img [object-position:50%_12%]" src="/assets/proof-nordic-oat.webp" alt="" />
            <span className="pf-fade" aria-hidden="true" />
            <span className="pf-fade btm" aria-hidden="true" />
            <span className="pf-brand">
              <span className="cd-dot [--ring:#FFF04A]" />
              Nordic Oat
            </span>
            <span className="pf-btm">
              <span className="pf-q">
                <span>
                  <span className="pf-quote">
                    “Our spring launch went live on 18 screens on the commute, in less time than it took to write the brief.”
                  </span>
                </span>
              </span>
              <span className="pf-who">
                Elin Berg, Marketing Director
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

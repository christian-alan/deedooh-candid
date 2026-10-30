export default function Footer() {
  return (
    <footer className="cdft" aria-label="Site footer">
      <div className="cdft-cta">
        <img src="/assets/crossing.jpg" alt="" />
        <div className="cdft-cta-in">
          <div className="flex flex-col gap-4 max-w-[640px]">
            <span>
              <span className="cd-pill">
                <span className="cd-dot [--ring:#7CFFCB]" />
                <span>
                  Your next campaign · live in minutes
                </span>
              </span>
            </span>
            <h2 className="cd-h2">
              From brief{' '}
              <b>
                to billboard.
              </b>
            </h2>
            <p className="max-w-[520px] text-[19px] leading-[1.5] text-[rgba(255,255,255,.86)]">
              Tell us who you want to reach. We find the screens, get the approvals and put you live, in minutes.
            </p>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <a className="cdft-white" href="#">
              Start planning
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="cdft-links">
        <div className="cdl-grid">
          <div className="cdl-col">
            <h3 className="cdl-h">
              Product
            </h3>
            <ul>
              <li>
                <a className="cdl-a" href="#">
                  Campaign planner
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Screen inventory
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Audiences
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Reporting
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="cdl-col">
            <h3 className="cdl-h">
              Solutions
            </h3>
            <ul>
              <li>
                <a className="cdl-a" href="#">
                  Agencies
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Brands
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Local businesses
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Publishers
                </a>
              </li>
            </ul>
          </div>
          <div className="cdl-col">
            <h3 className="cdl-h">
              Resources
            </h3>
            <ul>
              <li>
                <a className="cdl-a" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Guides
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Help centre
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Screen map
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div className="cdl-col">
            <h3 className="cdl-h">
              Company
            </h3>
            <ul>
              <li>
                <a className="cdl-a" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Customers
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Press
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="cdl-col">
            <h3 className="cdl-h">
              Follow us
            </h3>
            <div className="flex gap-3.5 mt-1">
              <a className="cdl-soc" href="#" aria-label="deedooh on LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z" />
                </svg>
              </a>
              <a className="cdl-soc" href="#" aria-label="deedooh on Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a className="cdl-soc" href="#" aria-label="deedooh on X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.8 3h3.3l-7.2 8.2L22.4 21h-6.6l-5.2-6.8L4.7 21H1.4l7.7-8.8L1 3h6.8l4.7 6.2zm-1.2 16h1.8L7.5 4.9H5.6z" />
                </svg>
              </a>
            </div>
            <h3 className="cdl-h mt-7">
              Talk to us
            </h3>
            <a className="cdl-a" href="#">
              Book a demo
            </a>
          </div>
        </div>
        <div className="cdl-grid cdl-grid2">
          <div className="cdl-col">
            <h3 className="cdl-h">
              Screens in
            </h3>
            <ul className="cdl-two">
              <li>
                <a className="cdl-a" href="#">
                  Stockholm
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Oslo
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Copenhagen
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Helsinki
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  London
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Berlin
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Paris
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  New York
                </a>
              </li>
            </ul>
          </div>
          <div className="cdl-col [grid-column:span_2]">
            <h3 className="cdl-h">
              From the blog
            </h3>
            <ul>
              <li>
                <a className="cdl-a" href="#">
                  How rush hour became the best time slot in outdoor
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  Local first: planning a campaign for one neighbourhood
                </a>
              </li>
              <li>
                <a className="cdl-a" href="#">
                  What a 2-week DOOH flight actually costs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a className="cdft-mark" href="#" aria-label="deedooh home">
          <span className="logo block w-full h-full bg-navy" />
        </a>
        <div className="cdft-legal">
          <span>
            deedooh © 2026
          </span>
          <span className="flex gap-2">
            <a href="#">
              Terms
            </a>
            ·
            <a href="#">
              Privacy
            </a>
            ·
            <a href="#">
              Cookies
            </a>
            ·
            <a href="#">
              DPA
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

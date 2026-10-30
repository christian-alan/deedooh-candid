import Prompt from './Prompt';
import { VISITOR_CITY } from '../data/content';

export default function Hero({ city = VISITOR_CITY }) {
  return (
    <section className="cd-hero relative">
      <div className="max-w-[1280px] mx-auto pt-5 pr-6 pb-14 pl-6 box-border">
        <nav className="cd-nav">
          <a className="block" href="#" aria-label="deedooh home">
            <span className="logo block w-[132px] h-[22px] bg-navy" />
          </a>
          <div className="nav-links flex items-center gap-0.5">
            <a className="cd-nl" href="#">
              Product
            </a>
            <a className="cd-nl" href="#">
              Screens
            </a>
            <a className="cd-nl" href="#">
              For agencies
            </a>
            <a className="cd-nl" href="#">
              For publishers
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <a className="cd-nl" href="#">
              Log in
            </a>
            <a className="cd-btn py-[11px] px-5 text-[15px]" href="#">
              Start planning
            </a>
          </div>
        </nav>
        <div className="grid [grid-template-columns:minmax(0,_1.05fr)_minmax(0,_1fr)] gap-16 items-center pt-18 pr-2 pl-2">
          <div className="flex flex-col gap-[22px] min-w-0">
            <h1 className="cd-h1 rise [--d:.05s] pt-0.5">
              Every screen is a moment in{' '}
              <b>
                someone's day.
              </b>
            </h1>
            <p className="rise [--d:.1s] max-w-[480px] text-[19px] leading-[1.5] text-slate">
              Plan outdoor campaigns in minutes. We'll tell you the moment it's live.
            </p>
          </div>
          <div className="rise [--d:.12s] flex flex-col gap-5">
            <Prompt theme="light" accent="#0B1F3B" accentText="#FFFFFF" align="left" />
          </div>
        </div>
        <div className="rise [--d:.2s] grid [grid-template-columns:minmax(0,_1fr)_minmax(0,_1.6fr)] gap-5 mt-12">
          <figure className="cd-fig">
            <div className="cd-photo h-[520px]">
              <img className="w-full h-full object-cover [object-position:50%_30%] block" src="/assets/ad-model.jpg" alt="Marketer in a green sweater booking screens on her phone" />
              <span className="absolute left-[18px] top-[18px]">
                <span className="cd-pill">
                  <span className="cd-dot [--ring:#7CFFCB]" />
                  <span>
                    Booked · 12 screens
                  </span>
                </span>
              </span>
            </div>
          </figure>
          <figure className="cd-fig">
            <div className="cd-photo h-[520px]">
              <div className="absolute left-0 right-0 top-[50%] [transform:translateY(-62.9%)] aspect-[736/920]">
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
              <span className="absolute left-[18px] top-[18px]">
                <span className="cd-pill">
                  <span className="cd-dot [--ring:#00D1FF]" />
                  <span>
                    Live · {city} · 09:00
                  </span>
                </span>
              </span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

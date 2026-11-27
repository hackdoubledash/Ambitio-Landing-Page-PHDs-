"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";

const DASHBOARD = "https://dashboard.ambitio.club/";
const EASE = [0.22, 1, 0.36, 1] as const;

const decisions = [
  { title: "Find your direction.", body: "A research interest becomes more useful when you can name the question behind it.", tag: "Research direction", mark: "01" },
  { title: "Find your people.", body: "Look for supervisors and departments whose work connects with the questions you want to pursue.", tag: "Supervisors", mark: "02" },
  { title: "Find your place.", body: "See what a programme asks for and how its research focus fits your plans.", tag: "Programmes", mark: "03" },
  { title: "Find a way forward.", body: "Bring funding, deadlines and application steps into the picture before you commit to a shortlist.", tag: "Funding & applications", mark: "04" },
];

const finderViews = [
  { title: "Programmes that fit the work you want to do.", body: "Search by subject, country, PhD type and start date. Open a result for the details behind the name.", name: "PhD Finder", image: "/dashboard/phd-finder.jpg", alt: "Ambitio PhD Finder with programme results and filters" },
  { title: "People working on ideas close to yours.", body: "Browse supervisors by university, department and research focus, then follow the promising connections.", name: "Supervisor Finder", image: "/dashboard/supervisor-finder.jpg", alt: "Ambitio Supervisor Finder with faculty listings and filters" },
  { title: "Funding deserves an early place in the search.", body: "Explore opportunities by funding type, discipline, country and deadline as you compare your options.", name: "Funding Finder", image: "/dashboard/funding-finder.jpg", alt: "Ambitio Funding Finder with opportunities and deadlines" },
];

const plans = [
  { name: "Shortlist Builder", body: "Keep promising programmes and professors together as a plan takes shape.", image: "/dashboard/shortlist-builder.jpg", alt: "Ambitio Shortlist Builder showing its Elite access gate" },
  { name: "Interview Prep", body: "See the preparation tools offered for the conversations after an application.", image: "/dashboard/interview-prep.jpg", alt: "Ambitio Interview Prep showing its Elite access gate" },
];

const faqs = [
  { question: "Who is this dashboard for?", answer: "The screens shown here focus on prospective PhD applicants exploring research, programmes, supervisors, funding and applications." },
  { question: "How does AI help?", answer: "Lisa is an in-dashboard assistant for study-abroad questions. The Research Profile Audit is presented as an AI audit of your research direction and profile." },
  { question: "Can I use every tool?", answer: "Access depends on your account. The current Shortlist Builder and Interview Prep screens show Ambitio Elite access gates." },
  { question: "Where do I start?", answer: "Open the dashboard to see the current experience. You can explore the finders or begin with your Research Profile Audit." },
];

function Arrow() { return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 16 16 4M7 4h9v9" /></svg>; }
function Plus() { return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3v14M3 10h14" /></svg>; }
function Brand() { return <img className="brand-logo" src="/assets/ambitio-logo.png" alt="Ambitio" width="256" height="68" />; }
function ProductFrame({ image, alt, className = "" }: { image: string; alt: string; className?: string }) {
  return <div className={`product-frame ${className}`}><div className="product-frame__top"><span className="product-frame__dots"><i /><i /><i /></span><span>dashboard.ambitio.club</span><span>ambitio.</span></div><img src={image} alt={alt} width={1440} height={693} /></div>;
}
function Action({ children = "Open dashboard", light = false }: { children?: React.ReactNode; light?: boolean }) {
  return <motion.a className={`button ${light ? "button--light" : ""}`} href={DASHBOARD} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ y: 1, scale: .98 }}>{children}<span><Arrow /></span></motion.a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><div className="header__inner"><a className="skip-link" href="#main">Skip to content</a><a className="header__brand" href="#main" aria-label="Ambitio home"><Brand /></a><nav className={open ? "header__nav is-open" : "header__nav"} aria-label="Main navigation"><a href="#challenge" onClick={() => setOpen(false)}>The journey</a><a href="#finders" onClick={() => setOpen(false)}>Finders</a><a href="#profile" onClick={() => setOpen(false)}>AI & profile</a><a href="#planning" onClick={() => setOpen(false)}>Planning</a><a href="#faq" onClick={() => setOpen(false)}>Questions</a></nav><div className="header__actions"><a href={DASHBOARD} target="_blank" rel="noopener noreferrer">Log in</a><Action>Explore dashboard</Action></div><button className="header__menu" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button></div></header>;
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const skyScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const copyOpacity = useTransform(scrollYProgress, [0, .6, 1], [1, 1, 0]);
  const frameY = useTransform(scrollYProgress, [0, 1], [0, -125]);
  const frameScale = useTransform(scrollYProgress, [0, 1], [.94, 1.08]);
  return <section className="hero" ref={ref} aria-labelledby="hero-title" data-section="hero" data-enter><div className="hero__pin"><motion.div className="hero__sky" aria-hidden="true" style={reduced ? undefined : { y: skyY, scale: skyScale }} /><div className="hero__veil" aria-hidden="true" /><motion.div className="hero__copy" style={reduced ? undefined : { y: copyY, opacity: copyOpacity }}><h1 id="hero-title">Your PhD path,<br /><span>made clearer.</span></h1><p>Explore programmes, supervisors and funding. Understand your research profile. See what comes next in one place.</p><div className="hero__actions"><a className="button button--dark" href="#challenge">Explore the journey <span><Arrow /></span></a><a className="text-action" href={DASHBOARD} target="_blank" rel="noopener noreferrer">Open dashboard <Arrow /></a></div></motion.div><motion.div className="hero__product" style={reduced ? undefined : { y: frameY, scale: frameScale }}><ProductFrame image="/dashboard/home.jpg" alt="Full Ambitio PhD dashboard home screen" /><div className="hero__float hero__float--a" aria-hidden="true">Programmes <span>↗</span></div><div className="hero__float hero__float--b" aria-hidden="true">Research profile <span>↗</span></div></motion.div><div className="hero__scroll" aria-hidden="true">Scroll to explore <span /></div></div></section>;
}

function DecisionArt({ index }: { index: number }) {
  const labels = ["A question", "The people", "The place", "The plan"];
  return <div className={`decision-art decision-art--${index}`} aria-hidden="true">
    <svg viewBox="0 0 640 420" preserveAspectRatio="xMidYMid meet" fill="none">
      <defs><linearGradient id="decision-floor" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#edf6fb" /><stop offset="1" stopColor="#b6d9e8" /></linearGradient><filter id="decision-shadow"><feDropShadow dx="0" dy="15" stdDeviation="13" floodColor="#23517c" floodOpacity=".18" /></filter></defs>
      <path d="M53 246 319 96 589 247 320 397Z" fill="url(#decision-floor)" stroke="#a7cce0" strokeWidth="2" />
      <path d="m90 252 229-130 232 130-231 130Z" stroke="#fff" strokeOpacity=".72" strokeWidth="2" />
      <path d="M151 249 251 194 321 231 397 189 491 242" stroke="#2871aa" strokeWidth="5" strokeLinecap="round" strokeDasharray="12 12" />
      <g className={index === 0 ? "decision-art__piece is-active" : "decision-art__piece"} filter="url(#decision-shadow)">
        <path d="m91 245 62-35 64 36-63 36Z" fill="#fff" /><path d="m91 245 63 37v33l-63-37Z" fill="#a9c9ed" /><path d="m154 282 63-36v33l-63 36Z" fill="#6b9bd5" /><path d="m115 248 39-22 40 22-40 22Z" fill="#dbeafb" /><path d="m138 242 17-9 16 9-16 10Z" fill="#2763b1" />
      </g>
      <g className={index === 1 ? "decision-art__piece is-active" : "decision-art__piece"} filter="url(#decision-shadow)">
        <path d="m223 180 59-33 61 34-61 35Z" fill="#fff" /><path d="m223 180 59 36v33l-59-35Z" fill="#a9d5dc" /><path d="m282 216 61-35v33l-61 35Z" fill="#4c98a8" /><circle cx="282" cy="183" r="15" fill="#2d718b" /><circle cx="263" cy="190" r="8" fill="#89c3ce" /><circle cx="301" cy="192" r="8" fill="#89c3ce" />
      </g>
      <g className={index === 2 ? "decision-art__piece is-active" : "decision-art__piece"} filter="url(#decision-shadow)">
        <path d="m351 183 61-34 67 38-63 36Z" fill="#fff" /><path d="m351 183 65 40v47l-65-39Z" fill="#b8c9eb" /><path d="m416 223 63-36v47l-63 36Z" fill="#617fb8" /><path d="m374 175 37-21 42 24-38 22Z" fill="#dce8fa" /><path d="M387 204v22m18-13v24m23-20v23m17-32v22" stroke="#315c9b" strokeWidth="5" />
      </g>
      <g className={index === 3 ? "decision-art__piece is-active" : "decision-art__piece"} filter="url(#decision-shadow)">
        <path d="m456 251 54-31 59 33-56 34Z" fill="#fff" /><path d="m456 251 57 36v35l-57-35Z" fill="#f1cba8" /><path d="m513 287 56-34v35l-56 34Z" fill="#d88c5a" /><path d="m482 254 29-17 31 18-30 17Z" fill="#f6e0b8" /><path d="M511 247v15m-8-9h16" stroke="#a66032" strokeWidth="4" />
      </g>
      <circle cx={[151, 282, 416, 513][index]} cy={[248, 183, 186, 253][index]} r="42" fill="#fff" fillOpacity=".2" stroke="#fff" strokeWidth="2" className="decision-art__halo" />
    </svg><div className="decision-art__label"><span>{`0${index + 1}`}</span>{labels[index]}</div>
  </div>;
}
function Challenge() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", value => setActive(Math.min(3, Math.floor(value * 4))));
  const current = decisions[active];
  return <section className={`challenge ${reduced ? "challenge--reduced" : ""}`} ref={ref} id="challenge" aria-labelledby="challenge-title" data-section="challenge"><div className="challenge__pin"><div className="wrap challenge__inner"><div className="challenge__heading"><h2 id="challenge-title">A PhD search is<br />never just a search.</h2><p>Four connected decisions shape the path ahead.</p></div><div className="challenge__stage"><div className="challenge__visual"><AnimatePresence mode="wait" initial={false}><motion.div key={active} className="challenge__art-wrap" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: .42, ease: EASE }}><DecisionArt index={active} /></motion.div></AnimatePresence></div><div className="challenge__content"><span className="challenge__count">{current.mark} / 04</span><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: .38, ease: EASE }}><h3>{current.title}</h3><p>{current.body}</p></motion.div></AnimatePresence><div className="challenge__rail" aria-label="Four decisions">{decisions.map((item, i) => <span key={item.mark} className={i === active ? "is-active" : ""} title={item.tag} />)}</div></div></div></div></div></section>;
}

function Finders() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", value => setActive(Math.min(2, Math.floor(value * 3))));
  const current = finderViews[active];
  return <section className={`finders ${reduced ? "finders--reduced" : ""}`} ref={ref} id="finders" aria-labelledby="finders-title" data-section="finders"><div className="finders__pin"><div className="wrap finders__inner"><div className="finders__header"><h2 id="finders-title">Explore your options.</h2><p>Look at the programmes, people and funding behind your next move.</p></div><div className="finders__stage"><div className="finders__copy"><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: .4, ease: EASE }}><h3>{current.title}</h3><p>{current.body}</p></motion.div></AnimatePresence><div className="finders__steps" aria-label="Choose a finder">{finderViews.map((view, i) => <button type="button" key={view.name} aria-pressed={active === i} onClick={() => setActive(i)} className={active === i ? "is-active" : ""}><b>{`0${i + 1}`}</b><span>{view.name}</span><Arrow /></button>)}</div></div><div className="finders__product"><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{ opacity: 0, x: 50, scale: .96 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -35, scale: .98 }} transition={{ duration: .46, ease: EASE }}><ProductFrame image={current.image} alt={current.alt} /></motion.div></AnimatePresence></div></div></div></div></section>;
}

function Detail() {
  const reduced = useReducedMotion();
  return <section className="detail" id="detail" aria-labelledby="detail-title" data-section="detail"><div className="wrap detail__inner"><div className="detail__heading"><h2 id="detail-title">A result is only<br />the beginning.</h2><p>Open a programme to examine its research focus, eligibility, funding, supervisors and application process before deciding where it fits.</p></div><motion.div className="detail__product" initial={reduced ? false : { opacity: .6, y: 70, scale: .95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .8, ease: EASE }}><ProductFrame image="/dashboard/programme-detail.jpg" alt="Full Ambitio programme detail screen" /></motion.div></div></section>;
}

function Profile() {
  const reduced = useReducedMotion();
  return <section className="profile" id="profile" aria-labelledby="profile-title" data-section="profile"><div className="profile__landscape" aria-hidden="true" /><div className="profile__shade" aria-hidden="true" /><div className="wrap profile__inner"><div className="profile__copy"><h2 id="profile-title">Questions get clearer<br />when you can ask them.</h2><p>Lisa is there for study-abroad questions. The Research Profile Audit helps you look more closely at your starting point.</p><Action light>Open the dashboard</Action></div><div className="profile__cards"><motion.article className="profile__card profile__card--lisa" initial={reduced ? false : { opacity: 0, x: 90, rotate: 3 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .72, ease: EASE }}><ProductFrame image="/dashboard/lisa.jpg" alt="Full Lisa assistant screen in Ambitio" /><div><h3>Ask Lisa</h3><p>Work through questions as your ideas take shape.</p></div></motion.article><motion.article className="profile__card profile__card--audit" initial={reduced ? false : { opacity: 0, x: 120, rotate: -3 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .75, delay: .12, ease: EASE }}><ProductFrame image="/dashboard/profile-audit.jpg" alt="Full Research Profile Audit screen in Ambitio" /><div><h3>Research Profile Audit</h3><p>Examine your direction, strengths and alignment.</p></div></motion.article></div></div></section>;
}

function Planning() {
  const [active, setActive] = useState(0);
  return <section className="planning" id="planning" aria-labelledby="planning-title" data-section="planning"><div className="wrap planning__inner"><div className="planning__top"><h2 id="planning-title">Give your next steps a place.</h2><p>Move from a promising option toward a considered application.</p></div><div className={`planning__cards planning__cards--active-${active}`} aria-label="Explore planning tools">{plans.map((plan, i) => <button type="button" key={plan.name} aria-pressed={active === i} onClick={() => setActive(i)} className={`planning__card ${active === i ? "is-active" : ""}`}><span className="planning__card-top"><span>{plan.name}</span><Arrow /></span><span className="planning__card-image"><ProductFrame image={plan.image} alt={plan.alt} /></span><span className="planning__card-bottom"><span>{plan.body}</span><span>{active === i ? "Viewing this tool" : "Select to view"}</span></span></button>)}</div><p className="planning__note">These dashboard previews currently show Ambitio Elite access gates. <a href={DASHBOARD} target="_blank" rel="noopener noreferrer">Open the dashboard <Arrow /></a></p></div></section>;
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="faq" id="faq" aria-labelledby="faq-title" data-section="faq"><div className="wrap faq__inner"><div><h2 id="faq-title">Good to know<br />before you begin.</h2><p>A quick look at the experience shown here and the access currently visible in the dashboard.</p></div><div className="faq__list">{faqs.map((item, i) => <div className="faq__item" key={item.question}><button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}><span>{item.question}</span><motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: .2 }}><Plus /></motion.span></button><AnimatePresence initial={false}>{open === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }}><p>{item.answer}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>;
}

function Footer() {
  return <footer className="footer" data-section="footer"><div className="wrap"><div className="footer__top"><h2>Find a clearer way<br />to your PhD.</h2><Action light>Open dashboard</Action></div><div className="footer__links"><div><strong>PRODUCT</strong><a href="#finders">Explore finders</a><a href="#detail">Programme details</a><a href="#profile">AI & profile</a><a href="#planning">Application planning</a></div><div><strong>AMBITIO</strong><a href="https://ambitio.club/" target="_blank" rel="noopener noreferrer">Main website</a><a href="https://ambitio.club/elite/" target="_blank" rel="noopener noreferrer">Ambitio Elite</a><a href="https://ambitio.club/contact-us/" target="_blank" rel="noopener noreferrer">Contact us</a></div><div><strong>LEGAL</strong><a href="https://ambitio.club/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy policy</a><a href="https://ambitio.club/terms-and-conditions/" target="_blank" rel="noopener noreferrer">Terms & conditions</a><a href="https://ambitio.club/refund-policy/" target="_blank" rel="noopener noreferrer">Refund policy</a></div><div><strong>EXPLORE</strong><a href="#challenge">The journey</a><a href="#faq">Questions</a><a href="#main">Back to top ↗</a></div></div><div className="footer__wordmark" aria-label="Ambitio">ambitio<span>.</span></div><div className="footer__legal"><span>© {new Date().getFullYear()} Ambitio. Landing page concept.</span><span>Make the next move with a clearer view.</span></div></div></footer>;
}

export default function Home() {
  return <MotionConfig reducedMotion="user"><Header /><main id="main"><Hero /><Challenge /><Finders /><Detail /><Profile /><Planning /><FAQ /></main><Footer /></MotionConfig>;
}

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
  return <div className={`decision-art decision-art--${index}`} aria-hidden="true"><div className="decision-art__ring" /><div className="decision-art__hub"><span>{["?", "••", "⌂", "↗"][index]}</span></div><div className="decision-art__line decision-art__line--one" /><div className="decision-art__line decision-art__line--two" /><div className="decision-art__node decision-art__node--one" /><div className="decision-art__node decision-art__node--two" /><div className="decision-art__node decision-art__node--three" /></div>;
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
  return <section className={`finders ${reduced ? "finders--reduced" : ""}`} ref={ref} id="finders" aria-labelledby="finders-title" data-section="finders"><div className="finders__pin"><div className="wrap finders__inner"><div className="finders__header"><h2 id="finders-title">Explore your options.</h2><p>Look at the programmes, people and funding behind your next move.</p></div><div className="finders__stage"><div className="finders__copy"><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: .4, ease: EASE }}><h3>{current.title}</h3><p>{current.body}</p></motion.div></AnimatePresence><div className="finders__steps" aria-label="Finder chapters">{finderViews.map((view, i) => <span key={view.name} className={active === i ? "is-active" : ""}><b>{`0${i + 1}`}</b>{view.name}</span>)}</div></div><div className="finders__product"><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{ opacity: 0, x: 50, scale: .96 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -35, scale: .98 }} transition={{ duration: .46, ease: EASE }}><ProductFrame image={current.image} alt={current.alt} /></motion.div></AnimatePresence></div></div></div></div></section>;
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
  return <section className="planning" id="planning" aria-labelledby="planning-title" data-section="planning"><div className="wrap planning__inner"><div className="planning__top"><h2 id="planning-title">Give your next steps a place.</h2><p>Move from a promising option toward a considered application.</p></div><div className="planning__stage"><div className="planning__tabs" role="tablist" aria-label="Planning tools">{plans.map((plan, i) => <button type="button" role="tab" key={plan.name} id={`plan-${i}`} aria-selected={active === i} aria-controls="plan-panel" onClick={() => setActive(i)} className={active === i ? "is-active" : ""}><span>{plan.name}</span><small>{plan.body}</small><Arrow /></button>)}</div><div className="planning__screen" role="tabpanel" id="plan-panel" aria-labelledby={`plan-${active}`}><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: .3, ease: EASE }}><ProductFrame image={plans[active].image} alt={plans[active].alt} /></motion.div></AnimatePresence></div></div><p className="planning__note">Shortlist Builder and Interview Prep currently show Ambitio Elite access gates.</p></div></section>;
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

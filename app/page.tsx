"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";

const DASHBOARD = "https://dashboard.ambitio.club/";
const EASE = [0.22, 1, 0.36, 1] as const;
type FinderKey = "programmes" | "supervisors" | "funding";
type PlanKey = "shortlist" | "interviews";

const finders: Record<FinderKey, { name: string; heading: string; body: string; image: string; alt: string; details: string[] }> = {
  programmes: {
    name: "Programmes", heading: "Find a programme that fits the question you want to ask.",
    body: "Search by subject, country, PhD type and start date. Open a result to see the research and application details behind the name.",
    image: "/dashboard/phd-finder.jpg", alt: "Ambitio PhD Finder showing programme cards and search filters",
    details: ["Subject", "Country", "PhD type", "Start date"],
  },
  supervisors: {
    name: "Supervisors", heading: "Find people working on the ideas that matter to you.",
    body: "Browse researchers by university, department and focus area. Use their profiles to make your next search more specific.",
    image: "/dashboard/supervisor-finder.jpg", alt: "Ambitio Supervisor Finder with faculty listings and filters",
    details: ["University", "Department", "Research focus"],
  },
  funding: {
    name: "Funding", heading: "Bring funding into the conversation early.",
    body: "Explore scholarships and funding opportunities by type, discipline, country and deadline while you consider your options.",
    image: "/dashboard/funding-finder.jpg", alt: "Ambitio Funding Finder with opportunities and deadlines",
    details: ["Funding type", "Discipline", "Country", "Deadline"],
  },
};

const plans: Record<PlanKey, { name: string; body: string; image: string; alt: string }> = {
  shortlist: {
    name: "Shortlist Builder",
    body: "Give promising programmes and professors a place in your plan.",
    image: "/dashboard/shortlist-builder.jpg",
    alt: "Ambitio Shortlist Builder with an Elite access gate",
  },
  interviews: {
    name: "Interview Prep",
    body: "Prepare for the conversations that follow your application.",
    image: "/dashboard/interview-prep.jpg",
    alt: "Ambitio Interview Prep with an Elite access gate",
  },
};

const faqs = [
  { question: "Who is this dashboard for?", answer: "The dashboard shown here is focused on prospective PhD applicants exploring research, programmes, supervisors, funding and applications." },
  { question: "How does AI help?", answer: "Lisa is an in-dashboard assistant for study-abroad questions. The Research Profile Audit is presented as an AI audit of your research direction and profile." },
  { question: "Can I use every tool?", answer: "Access depends on your account. The current Shortlist Builder and Interview Prep screens show Ambitio Elite access gates." },
  { question: "Where do I start?", answer: "Open the dashboard to see the current experience. You can begin with the PhD, supervisor or funding finders, or start your Research Profile Audit." },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d={diagonal ? "M4 16 16 4M7 4h9v9" : "M3 10h13m-5-5 5 5-5 5"} /></svg>;
}
function Plus() { return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3v14M3 10h14" /></svg>; }
function Brand() { return <img className="brand-logo" src="/assets/ambitio-logo.png" alt="Ambitio" width="256" height="68" />; }
function MainAction({ dark = false }: { dark?: boolean }) {
  return <motion.a className={"action" + (dark ? " action--dark" : "")} href={DASHBOARD} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ y: 1, scale: 0.985 }}>Open dashboard <Arrow diagonal /></motion.a>;
}
function BrowserWindow({ image, alt, className = "" }: { image: string; alt: string; className?: string }) {
  return <div className={"browser-window " + className}><div className="browser-window__bar"><span className="browser-window__lights"><i /><i /><i /></span><span className="browser-window__address">dashboard.ambitio.club</span><span className="browser-window__brand">ambitio.</span></div><img src={image} alt={alt} width={1440} height={693} /></div>;
}
function SectionHead({ n, label, title, id, children }: { n: string; label: string; title: string; id?: string; children?: React.ReactNode }) {
  return <div className="section-head"><div><h2 id={id}>{title}</h2>{children && <p>{children}</p>}</div></div>;
}

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end end"] });
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const skyScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const titleY = useTransform(scrollYProgress, [0, .6], [0, -115]);
  const titleOpacity = useTransform(scrollYProgress, [0, .48, .75], [1, .92, 0]);
  const productY = useTransform(scrollYProgress, [0, 1], [0, -95]);
  const productScale = useTransform(scrollYProgress, [0, 1], [.93, 1.08]);
  return <section ref={heroRef} className="hero-scroll" data-section="hero" data-enter aria-labelledby="hero-title">
    <div className="hero-scroll__sticky">
      <motion.div className="hero-scroll__sky" aria-hidden="true" style={reduced ? undefined : { y: skyY, scale: skyScale }} />
      <div className="hero-scroll__wash" aria-hidden="true" />
      <motion.div className="hero-scroll__copy wrap" style={reduced ? undefined : { y: titleY, opacity: titleOpacity }}>
        <motion.h1 id="hero-title" initial={reduced ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: EASE }}>The right PhD path<br /><em>starts with clarity.</em></motion.h1>
        <motion.p initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .18 }}>Explore programmes, supervisors and funding. Understand your research profile. See your next move in one place.</motion.p>
        <motion.div className="hero-scroll__actions" initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .27 }}><a className="action action--ink" href="#problem">Explore the experience <Arrow diagonal /></a><a className="hero-scroll__text-link" href={DASHBOARD} target="_blank" rel="noopener noreferrer">Open dashboard <Arrow diagonal /></a></motion.div>
      </motion.div>
      <motion.div className="hero-scroll__product" style={reduced ? undefined : { y: productY, scale: productScale }}>
        <BrowserWindow image="/dashboard/home.jpg" alt="Full Ambitio PhD dashboard home view" />
        <div className="hero-scroll__sidecard hero-scroll__sidecard--left" aria-hidden="true"><strong>Programmes<br />& people</strong><i /></div>
        <div className="hero-scroll__sidecard hero-scroll__sidecard--right" aria-hidden="true"><strong>Your research<br />profile</strong><i /></div>
        <div className="hero-scroll__orbit hero-scroll__orbit--one" aria-hidden="true" />
        <div className="hero-scroll__orbit hero-scroll__orbit--two" aria-hidden="true" />
      </motion.div>
      <div className="hero-scroll__hint" aria-hidden="true"><span>SCROLL TO EXPLORE</span><i /></div>
    </div>
  </section>;
}

const challengeSteps = [
  { number: "01", label: "Research direction", title: "What do you want to investigate?", body: "Start with a research question that has room to grow. Your direction gives the rest of the search a purpose.", kind: "research", first: "Your question", second: "A field to explore" },
  { number: "02", label: "The right people", title: "Who is working in that area?", body: "Look for supervisors whose work connects with yours, then understand the departments and universities around them.", kind: "people", first: "Research focus", second: "Supervisors" },
  { number: "03", label: "The right place", title: "Which programme gives it room?", body: "Compare the details behind a programme name, from research focus and eligibility to the application process.", kind: "place", first: "Your direction", second: "Programmes" },
  { number: "04", label: "A viable plan", title: "How will you fund and apply?", body: "Bring funding and application steps into the picture before you decide what belongs on your shortlist.", kind: "funding", first: "Funding", second: "Next steps" },
] as const;

function ChallengeArtwork({ kind, first, second }: { kind: string; first: string; second: string }) {
  return <div className={"challenge-art challenge-art--" + kind} aria-hidden="true">
    <div className="challenge-art__disc" />
    <div className="challenge-art__line challenge-art__line--one" /><div className="challenge-art__line challenge-art__line--two" />
    <div className="challenge-art__paper challenge-art__paper--back"><span>AMBITIO / PHD</span><i /><i /><i /></div>
    <div className="challenge-art__paper challenge-art__paper--front"><span>{first}</span><strong>{second}</strong><div className="challenge-art__glyph"><b /><b /><b /></div></div>
    <div className="challenge-art__chip challenge-art__chip--left">EXPLORE</div><div className="challenge-art__chip challenge-art__chip--right">CONNECT</div>
  </div>;
}

function Problem() {
  const challengeRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: challengeRef, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", value => setActive(Math.min(3, Math.floor(value * 4))));
  const slides = reduced ? challengeSteps : [challengeSteps[active]];
  return <section ref={challengeRef} className={"challenge-scroll" + (reduced ? " challenge-scroll--reduced" : "")} id="problem" data-section="problem" aria-labelledby="problem-title">
    <div className="challenge-scroll__sticky"><div className="wrap challenge-scroll__inner">
      <div className="challenge-scroll__intro"><h2 id="problem-title">A PhD search is<br /><em>never just a search.</em></h2><p>One decision shapes the next. Follow the questions that make the whole path clearer.</p></div>
      <div className="challenge-scroll__stage">
        <div className="challenge-scroll__slides"><AnimatePresence mode="wait">{slides.map(step => <motion.article className="challenge-slide" key={step.number} initial={reduced ? false : { opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -24 }} transition={{ duration: .48, ease: EASE }}><ChallengeArtwork kind={step.kind} first={step.first} second={step.second} /><div className="challenge-slide__copy"><span>{step.number} / {step.label}</span><h3>{step.title}</h3><p>{step.body}</p></div></motion.article>)}</AnimatePresence></div>
        <div className="challenge-scroll__progress" aria-label="Four connected questions">{challengeSteps.map((step, index) => <span key={step.number} className={index === active ? "is-active" : ""}><b>{step.number}</b>{step.label}</span>)}</div>
      </div>
    </div></div>
  </section>;
}

function Finders() {
  const [active, setActive] = useState<FinderKey>("programmes");
  const selected = finders[active];
  return <section className="finders screen screen--double" id="finders" data-section="finders" aria-labelledby="finders-title"><div className="wrap">
    <div className="section-head"><div><h2 id="finders-title">Explore your options.</h2><p>Search programmes, people and funding without losing sight of how they fit together.</p></div></div>
    <div className="finders__tabs" role="tablist" aria-label="Finders">{(Object.keys(finders) as FinderKey[]).map((key, i) => <button key={key} type="button" role="tab" aria-selected={active === key} aria-controls="finder-panel" id={"finder-"+key} className={active === key ? "is-active" : ""} onClick={() => setActive(key)}><span>0{i + 1}</span>{finders[key].name}<Arrow diagonal /></button>)}</div>
    <div className="finders__content" role="tabpanel" id="finder-panel" aria-labelledby={"finder-"+active}><div className="finders__copy"><h3>{selected.heading}</h3><p>{selected.body}</p><div className="finders__filters">{selected.details.map(detail => <span key={detail}>{detail}</span>)}</div></div><AnimatePresence mode="wait"><motion.div className="finders__image" key={active} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: .2 }}><BrowserWindow image={selected.image} alt={selected.alt} /></motion.div></AnimatePresence></div>
  </div></section>;
}

function Detail() {
  return <section className="detail screen" id="detail" data-section="programme-detail" aria-labelledby="detail-title"><div className="wrap detail__grid"><div className="detail__copy"><h2 id="detail-title">A search result is the beginning.</h2><p>Open a programme to look at its research focus, eligibility, funding, supervisors and application process before deciding whether it belongs in your plan.</p><a className="quiet-link" href={DASHBOARD} target="_blank" rel="noopener noreferrer">See programme details <Arrow /></a><div className="detail__number">05<span>areas to examine</span></div></div><div className="detail__visual"><BrowserWindow image="/dashboard/programme-detail.jpg" alt="Ambitio programme detail view with research, eligibility, funding and supervisor information" /></div></div></section>;
}

function AI() {
  return <section className="ai screen screen--double" id="ai" data-section="ai-profile" aria-labelledby="ai-title"><div className="wrap"><SectionHead n="04" label="AI in the journey" title="Help for the questions behind the application." id="ai-title">Lisa and the Research Profile Audit appear inside the student workflow, where the questions come up.</SectionHead><div className="ai__grid"><article className="ai__card"><div className="ai__image ai__image--lisa"><BrowserWindow image="/dashboard/lisa.jpg" alt="Lisa AI assistant in the Ambitio dashboard" /><div className="ai__prompt">What should I explore next?<span>Ask Lisa ↗</span></div></div><div className="ai__card-copy"><span>01 / Ask Lisa</span><h3>Ask a question while you explore.</h3><p>Lisa gives you a place to work through study-abroad questions as your ideas take shape.</p></div></article><article className="ai__card"><div className="ai__image ai__image--audit"><BrowserWindow image="/dashboard/profile-audit.jpg" alt="Research Profile Audit in the Ambitio dashboard" /><div className="ai__audit-note"><span>Research Profile Audit</span><strong>A closer look at your starting point.</strong></div></div><div className="ai__card-copy"><span>02 / Profile audit</span><h3>Understand your research profile.</h3><p>Begin an audit of your direction, strengths, alignment and funding potential before narrowing the search.</p></div></article></div></div></section>;
}

function Planning() {
  const [active, setActive] = useState<PlanKey>("shortlist");
  return <section className="planning screen" id="planning" data-section="planning" aria-labelledby="planning-title"><div className="wrap planning__grid"><div className="planning__copy"><h2 id="planning-title">Give the next steps a place.</h2><p>When you know what to pursue, keep the work moving from a shortlist toward application and interview preparation.</p><div className="planning__options" role="tablist" aria-label="Planning tools">{(Object.keys(plans) as PlanKey[]).map((key, i) => <button type="button" role="tab" aria-selected={active === key} aria-controls="planning-panel" id={"plan-"+key} className={active === key ? "is-active" : ""} key={key} onClick={() => setActive(key)}><span>0{i + 1}</span><span><strong>{plans[key].name}</strong><small>{plans[key].body}</small></span><Arrow diagonal /></button>)}</div><p className="planning__access">Shortlist Builder and Interview Prep currently show Ambitio Elite access gates.</p></div><div className="planning__visual" role="tabpanel" id="planning-panel" aria-labelledby={"plan-"+active}><div className="planning__visual-orbit" aria-hidden="true" /><AnimatePresence mode="wait"><motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .2 }}><BrowserWindow image={plans[active].image} alt={plans[active].alt} /></motion.div></AnimatePresence></div></div></section>;
}

function Journey() {
  const reduced = useReducedMotion();
  return <section className="journey screen" id="journey" data-section="journey" aria-labelledby="journey-title"><div className="wrap journey__grid"><div className="journey__copy"><h2 id="journey-title">One dashboard. A clearer sequence.</h2><div className="journey__steps"><div><span>01</span><strong>Explore</strong><p>Find programmes, supervisors and funding that connect with your interests.</p></div><div><span>02</span><strong>Assess</strong><p>Use Lisa and the Research Profile Audit to sharpen your direction.</p></div><div><span>03</span><strong>Prepare</strong><p>Bring the strongest options into a plan, as your account access allows.</p></div></div></div><motion.div className="journey__picture" initial={reduced ? false : { clipPath: "circle(0% at 50% 50%)" }} whileInView={{ clipPath: "circle(80% at 50% 50%)" }} viewport={{ once: true, amount: .35 }} transition={{ duration: 1.1, ease: EASE }}><BrowserWindow image="/dashboard/home.jpg" alt="Ambitio dashboard home, showing the connected PhD journey" /></motion.div></div></section>;
}

function Statement() {
  const reduced = useReducedMotion();
  const words = ["Make", "your", "next", "move."];
  return <section className="statement screen" data-section="statement" aria-labelledby="statement-title"><div className="wrap statement__inner"><span>After the research comes a decision.</span><h2 id="statement-title" aria-label="Make your next move.">{words.map((word, i) => <motion.span key={word} aria-hidden="true" initial={reduced ? false : { opacity: 0, y: 90, rotate: i % 2 ? 7 : -7 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: .7 }} transition={{ duration: .75, delay: i * .09, ease: EASE }}>{word} </motion.span>)}</h2><p>See the information behind each option before you choose where to focus.</p></div></section>;
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="faq screen" id="faq" data-section="faq" aria-labelledby="faq-title"><div className="wrap faq__grid"><div><h2 id="faq-title">Before you open the dashboard.</h2><p>The current screens answer some questions. Access and the final offer still depend on your account.</p></div><div className="faq__list">{faqs.map((item, i) => <div className="faq__item" key={item.question}><button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}><span>{item.question}</span><motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: .2 }}><Plus /></motion.span></button><AnimatePresence initial={false}>{open === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }}><p>{item.answer}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>;
}

function Closing() {
  return <footer className="closing" data-section="closing-footer"><div className="wrap closing__wrap"><div className="closing__top"><div><h2>Find a clearer way<br />to your PhD.</h2></div><a className="closing__cta" href={DASHBOARD} target="_blank" rel="noopener noreferrer">Open dashboard <Arrow diagonal /></a></div><div className="closing__links"><div><strong>PRODUCT</strong><a href="#finders">Explore finders</a><a href="#detail">Programme details</a><a href="#ai">AI & profile</a><a href="#planning">Application planning</a></div><div><strong>AMBITIO</strong><a href="https://ambitio.club/" target="_blank" rel="noopener noreferrer">Main website</a><a href="https://ambitio.club/elite/" target="_blank" rel="noopener noreferrer">Ambitio Elite</a><a href="https://ambitio.club/contact-us/" target="_blank" rel="noopener noreferrer">Contact us</a></div><div><strong>LEGAL</strong><a href="https://ambitio.club/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy policy</a><a href="https://ambitio.club/terms-and-conditions/" target="_blank" rel="noopener noreferrer">Terms & conditions</a><a href="https://ambitio.club/refund-policy/" target="_blank" rel="noopener noreferrer">Refund policy</a></div><div><strong>EXPLORE</strong><a href="#problem">The challenge</a><a href="#journey">How it works</a><a href="#faq">Questions</a><a href="#top">Back to top ↗</a></div></div><div className="closing__wordmark" aria-label="Ambitio">ambitio<span>.</span></div><div className="closing__legal"><span>© {new Date().getFullYear()} Ambitio. Landing page concept.</span><span>Make the next move with a clearer view.</span></div></div></footer>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <MotionConfig reducedMotion="user"><header className="site-header"><div className="wrap site-header__inner"><a className="skip-link" href="#top">Skip to content</a><a href="#top" aria-label="Ambitio home"><Brand /></a><nav className={"site-header__nav" + (menuOpen ? " site-header__nav--open" : "")} aria-label="Main navigation"><a href="#problem" onClick={() => setMenuOpen(false)}>Why Ambitio</a><a href="#finders" onClick={() => setMenuOpen(false)}>Finders</a><a href="#ai" onClick={() => setMenuOpen(false)}>AI & profile</a><a href="#journey" onClick={() => setMenuOpen(false)}>How it works</a><a href="#faq" onClick={() => setMenuOpen(false)}>Questions</a></nav><div className="site-header__right"><a className="site-header__login" href={DASHBOARD} target="_blank" rel="noopener noreferrer">Log in</a><MainAction /></div><button className="site-header__menu" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button></div></header><main id="top"><Hero /><Problem /><Finders /><Detail /><AI /><Planning /><Journey /><Statement /><FAQ /></main><Closing /></MotionConfig>;
}

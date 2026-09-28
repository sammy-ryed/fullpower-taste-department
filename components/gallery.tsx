"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { repository, skills, starterPrompt, type Skill } from "@/lib/skills";

const Arrow = ({ down = false }: { down?: boolean }) => (
  <span aria-hidden="true">{down ? "↓" : "↗"}</span>
);
function useSoftDialog(reduce: boolean) {
  const ref = useRef<HTMLDialogElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const open = () => {
    clearTimeout(timer.current);
    if (!ref.current) return;
    delete ref.current.dataset.closing;
    ref.current.showModal();
  };
  const close = (afterClose?: () => void) => {
    const node = ref.current;
    if (!node || node.dataset.closing) return;
    if (reduce) {
      node.close();
      afterClose?.();
      return;
    }
    node.dataset.closing = "true";
    timer.current = setTimeout(() => {
      node.close();
      delete node.dataset.closing;
      afterClose?.();
    }, 240);
  };
  return { ref, open, close };
}

function Seam({ color }: { color: string }) {
  return (
    <div
      className="chapter-seam"
      style={{ background: color }}
      aria-hidden="true"
    />
  );
}
function Flower({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M50 30C23-12 1 16 30 42C-15 40-6 76 34 64C17 105 51 115 55 73C82 110 109 79 73 59C119 46 99 12 65 37C70-7 34-10 50 30Z" />
      <circle cx="50" cy="51" r="13" fill="var(--flower-center, #ffcc32)" />
    </svg>
  );
}
function PaperPal() {
  return (
    <svg
      className="paper-pal"
      viewBox="0 0 370 410"
      role="img"
      aria-label="A delighted paper character with long rubber-hose legs"
    >
      <g
        stroke="#1a1a1a"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M107 277Q108 335 78 357M236 275Q240 339 282 357" fill="none" />
        <path d="M79 350Q36 341 25 378Q58 402 107 376Z" fill="#f4ed36" />
        <path d="M277 348Q315 337 345 374Q309 400 269 378Z" fill="#f4ed36" />
        <path d="M76 130Q21 121 27 192M283 127Q351 93 334 53" fill="none" />
        <path
          d="M316 53Q293 27 310 20L326 35Q319-3 335 6L345 30Q360 8 365 24L351 63Z"
          fill="#f9f5f2"
        />
        <path
          d="M37 188Q49 218 31 220L20 205Q8 232 2 211L7 188Z"
          fill="#f9f5f2"
        />
        <path d="M86 32L235 20L298 71L277 295L68 284Z" fill="#f9f5f2" />
        <path d="M235 20L229 81L298 71" fill="#f8c1ba" />
        <ellipse cx="139" cy="142" rx="16" ry="29" fill="#1a1a1a" />
        <ellipse cx="217" cy="137" rx="16" ry="29" fill="#1a1a1a" />
        <path d="M119 199Q176 258 229 189Q198 206 119 199Z" fill="#1a1a1a" />
        <path d="M154 224Q178 205 201 222" fill="#f8c1ba" />
        <path d="M97 165L109 160M240 155L252 158" fill="none" />
      </g>
    </svg>
  );
}
function Kit({
  skill,
  onOpen,
}: {
  skill: Skill;
  onOpen: (skill: Skill) => void;
}) {
  const [feedback, setFeedback] = useState("");
  const promptRef = useRef<HTMLTextAreaElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  function downloadFeedback(format: string) {
    setFeedback(`${format} requested. Check your downloads.`);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setFeedback(""), 4500);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(starterPrompt(skill));
      setFeedback("Copied. Go cause a design incident.");
    } catch {
      promptRef.current?.focus();
      promptRef.current?.select();
      setFeedback("Select the prompt and copy it manually.");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setFeedback(""), 4500);
  }
  return (
    <div className="skill-kit" id={`${skill.slug}-kit`}>
      <div className="kit-description">
        <span className="eyebrow">What you're getting</span>
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>
      </div>
      <div className="prompt-slip">
        <div className="prompt-label">
          <label htmlFor={`${skill.slug}-prompt`}>Start with this</label>
          <span aria-hidden="true">↳</span>
        </div>
        <textarea
          ref={promptRef}
          id={`${skill.slug}-prompt`}
          value={starterPrompt(skill)}
          readOnly
          rows={5}
          aria-label={`Starter prompt for ${skill.name}`}
        />
        <div className="prompt-bottom">
          <span className="copy-feedback" role="status">
            {feedback || "Copy this, then add what you want to make."}
          </span>
          <button className="copy-button" onClick={copy}>
            Copy prompt <span aria-hidden="true">⧉</span>
          </button>
        </div>
      </div>
      <div className="kit-actions">
        <button className="primary-action" onClick={() => onOpen(skill)}>
          Take this to GPT <Arrow />
        </button>
        <a
          className="download-action"
          href={`/downloads/${skill.slug}.zip`}
          download
          onClick={() => downloadFeedback("ZIP")}
        >
          Download .zip <Arrow down />
        </a>
        <a
          className="download-action small-action"
          href={`/downloads/${skill.slug}.skill`}
          download
          onClick={() => downloadFeedback("Skill bundle")}
        >
          .skill <Arrow down />
        </a>
        <span className="bundle-caption">
          SKILL.md + design notes + tokens + CSS
        </span>
      </div>
    </div>
  );
}

const posterPalettes = [
  ["Mint", "#c7ffcd", "#000000"],
  ["Cocoa", "#806247", "#ffffff"],
  ["Yellow", "#ffeb62", "#000000"],
  ["Blue", "#e1e1e1", "#1600df"],
  ["Cherry", "#d40000", "#ffffff"],
  ["Paper", "#ffffff", "#000000"],
  ["Mauve", "#b39cb1", "#701000"],
];
const cartoonPalettes = [
  ["Violet", "#8584bd", "#1a1a1a"],
  ["Bubblegum", "#f8c1ba", "#1a1a1a"],
  ["Matcha", "#b5c995", "#1a1a1a"],
  ["Lemon", "#f4ed36", "#1a1a1a"],
  ["After hours", "#61609a", "#f9f5f2"],
];

export default function Gallery() {
  const root = useRef<HTMLDivElement>(null);
  const [handoff, setHandoff] = useState<Skill>(skills[0]);
  const [handoffMessage, setHandoffMessage] = useState("");
  const [active, setActive] = useState(0);
  const [motionOff, setMotionOff] = useState(false);
  const [systemReduced, setSystemReduced] = useState(false);
  const [indianPalette, setIndianPalette] = useState("mango");
  const [poster, setPoster] = useState(0);
  const [cartoon, setCartoon] = useState(0);
  const [hoverPalette, setHoverPalette] = useState<number | null>(null);
  const [focusPalette, setFocusPalette] = useState<number | null>(null);
  const paletteInput = useRef<"keyboard" | "pointer">("keyboard");
  const cartoonPreview = focusPalette ?? hoverPalette ?? cartoon;
  const reduce = motionOff || systemReduced;
  const handoffDialog = useSoftDialog(reduce);
  const menuDialog = useSoftDialog(reduce);
  const indianInks: Record<string, string[]> = {
    mango: ["#ffcc32", "#701c39"],
    indigo: ["#25216b", "#fff2cc"],
    gulabi: ["#f4b6ca", "#25216b"],
  };
  const headerInks =
    active === 0
      ? indianInks[indianPalette]
      : active === 2
        ? posterPalettes[poster].slice(1)
        : active === 4
          ? cartoonPalettes[cartoonPreview].slice(1)
          : null;
  const showKit = (skill: Skill) => {
    setHandoff(skill);
    setHandoffMessage("");
    handoffDialog.open();
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSystemReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = reduce ? "off" : "on";
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [reduce]);
  useEffect(() => {
    const chapters = Array.from(
      root.current?.querySelectorAll<HTMLElement>("[data-chapter]") || [],
    );
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = 0;
      chapters.forEach((chapter, i) => {
        if (chapter.getBoundingClientRect().top <= window.innerHeight * 0.4)
          current = i;
      });
      setActive(current);
    };
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
    };
  }, []);
  useEffect(() => {
    if (reduce || !root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (cancelled) return;
      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          gsap.from(".hero-title-line", {
            yPercent: 25,
            rotation: -3,
            opacity: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
          });
          gsap.from(".pendant", {
            rotation: -17,
            duration: 1.6,
            ease: "elastic.out(1, .6)",
            transformOrigin: "50% 0%",
          });
          gsap.utils
            .toArray<HTMLElement>(".chapter:not(.indian) .chapter-intro")
            .forEach((el) => {
              gsap.from(el, {
                y: "2.5rem",
                opacity: 0.4,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  start: "top 95%",
                  end: "top 40%",
                  scrub: 0.45,
                },
              });
            });
          gsap.utils.toArray<HTMLElement>(".chapter-seam").forEach((seam) => {
            gsap.fromTo(
              seam,
              { scaleY: 1 },
              {
                scaleY: 0,
                transformOrigin: "50% 0%",
                ease: "none",
                scrollTrigger: {
                  trigger: seam.parentElement,
                  start: "top bottom",
                  end: "top 45%",
                  scrub: 0.35,
                },
              },
            );
          });
          gsap.from(".warp-slice", {
            y: (i: number) =>
              `${Math.sin(i * 0.8) * (window.innerWidth < 672 ? 0.15 : 0.5)}rem`,
            skewY: 1.5,
            stagger: 0.025,
            duration: 0.8,
            ease: "power2.inOut",
            scrollTrigger: { trigger: ".warp", start: "top 75%" },
          });
          gsap.from(".paper-pal", {
            x: "4rem",
            y: "3rem",
            rotation: -16,
            scaleX: 1.06,
            scaleY: 0.94,
            duration: 1.05,
            ease: "back.out(1.6)",
            scrollTrigger: { trigger: ".cartoon-stage", start: "top 70%" },
          });
          gsap.to(".cartoon-sticker", {
            y: "-2rem",
            ease: "none",
            scrollTrigger: {
              trigger: ".cartoon-stage",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          });
          gsap.fromTo(
            ".cartoon-ribbon-track",
            { xPercent: 8 },
            {
              xPercent: -20,
              ease: "none",
              scrollTrigger: {
                trigger: ".cartoon-ribbon",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            },
          );
        },
        root,
      );
      mm.add(
        "(max-width: 59.999rem) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            ".paper-flight",
            { y: "1rem", rotation: -8 },
            {
              y: "-2rem",
              rotation: 10,
              ease: "none",
              scrollTrigger: {
                trigger: ".cartoon-stage",
                start: "top 75%",
                end: "bottom 15%",
                scrub: 0.5,
              },
            },
          );
          gsap.from(".flying-sheet", {
            y: "3rem",
            rotation: -25,
            scale: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".cartoon-stage",
              start: "top 75%",
              end: "bottom 30%",
              scrub: 0.5,
            },
          });
        },
        root,
      );
      mm.add(
        "(min-width: 60rem) and (min-height: 40rem) and (prefers-reduced-motion: no-preference)",
        () => {
          const flight =
            root.current!.querySelector<HTMLElement>(".cartoon-stage")!;
          gsap
            .timeline({
              scrollTrigger: {
                trigger: flight,
                start: () =>
                  `top ${parseFloat(getComputedStyle(document.documentElement).fontSize) * 5}`,
                end: () => `+=${flight.offsetHeight * 1.25}`,
                pin: true,
                scrub: 0.7,
                invalidateOnRefresh: true,
              },
            })
            .to(
              ".cartoon-line:nth-child(1)",
              { xPercent: 7, rotation: -3, duration: 1 },
              0,
            )
            .to(
              ".cartoon-line:nth-child(2)",
              { xPercent: 1, rotation: 2, duration: 1 },
              0,
            )
            .to(".cartoon-line:nth-child(3)", { xPercent: 9, duration: 1 }, 0)
            .to(
              ".paper-flight",
              {
                xPercent: -28,
                yPercent: -13,
                rotation: -22,
                scale: 1.12,
                duration: 0.5,
              },
              0,
            )
            .to(
              ".paper-flight",
              {
                xPercent: 6,
                yPercent: 8,
                rotation: 12,
                scale: 0.95,
                duration: 0.55,
              },
              0.5,
            )
            .from(
              ".flying-sheet",
              {
                xPercent: 50,
                yPercent: 150,
                rotation: -70,
                scale: 0.2,
                opacity: 0,
                stagger: 0.09,
                duration: 0.7,
              },
              0.1,
            )
            .to(".cartoon-sticker", { rotation: 18, duration: 0.5 }, 0.5);
          const stage =
            root.current!.querySelector<HTMLElement>(".number-stage")!;
          const panels = Array.from(
            stage.querySelectorAll<HTMLElement>(".number-panel"),
          );
          gsap.set(stage, { height: "76svh", minHeight: "34rem" });
          panels.forEach((panel, i) =>
            gsap.set(panel, {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${i * 6}%`,
              width: `${100 - i * 6}%`,
              xPercent: i ? 110 : 0,
            }),
          );
          gsap
            .timeline({
              scrollTrigger: {
                trigger: stage,
                // ScrollTrigger start offsets use browser coordinates, not CSS rem syntax.
                start: () =>
                  `top ${parseFloat(getComputedStyle(document.documentElement).fontSize) * 4}`,
                end: () => `+=${stage.offsetHeight * 2}`,
                pin: true,
                scrub: 0.65,
                invalidateOnRefresh: true,
              },
            })
            .to({}, { duration: 0.25 })
            .to(panels[1], { xPercent: 0, duration: 1, ease: "none" })
            .to({}, { duration: 0.25 })
            .to(panels[2], { xPercent: 0, duration: 1, ease: "none" })
            .to({}, { duration: 0.25 });
        },
        root,
      );
      ScrollTrigger.refresh();
    });
    return () => {
      cancelled = true;
      mm.revert();
    };
  }, [reduce]);

  async function copyHandoff() {
    try {
      await navigator.clipboard.writeText(starterPrompt(handoff));
      setHandoffMessage("Copied. Paste it into your new chat.");
    } catch {
      setHandoffMessage(
        "Clipboard unavailable. Copy the prompt from its section instead.",
      );
    }
  }

  return (
    <div
      ref={root}
      className="gallery"
      data-motion={reduce ? "off" : "on"}
      onKeyDownCapture={(e) => {
        if (e.key === "Tab") paletteInput.current = "keyboard";
      }}
    >
      <a className="skip-link" href="#main">
        Skip to the skills
      </a>
      <header
        className="site-header"
        data-theme={active}
        style={
          headerInks
            ? {
                background: headerInks[0],
                color: headerInks[1],
                borderColor: headerInks[1],
              }
            : undefined
        }
      >
        <a href="#indian-print-maximalism" className="wordmark">
          FP
          <span>
            THE TASTE
            <br />
            DEPARTMENT
          </span>
        </a>
        <span className="header-caption">Made for your next “what if…”</span>
        <div className="header-controls">
          <button
            className="motion-button"
            onClick={() => setMotionOff(!motionOff)}
            aria-pressed={motionOff}
            disabled={systemReduced}
          >
            {reduce ? "Motion off" : "Motion on"}{" "}
            <span aria-hidden="true">{reduce ? "Ⅱ" : "↝"}</span>
          </button>
          <button className="index-button" onClick={menuDialog.open}>
            Pick a style{" "}
            <span className="menu-icon" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>
      <nav className="chapter-rail" aria-label="Skill chapters">
        {skills.map((s, i) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            aria-label={`${i + 1}. ${s.name}`}
            aria-current={active === i ? "location" : undefined}
            style={{ "--dot": s.color } as CSSProperties}
          >
            <span className="rail-label">{s.short}</span>
            <span className="rail-dot" />
          </a>
        ))}
      </nav>
      <main id="main">
        <section
          className="chapter indian ipm"
          id={skills[0].slug}
          data-chapter="0"
          data-ipm-palette={indianPalette}
          aria-labelledby="hero-title"
        >
          <div className="poster-frame">
            <div className="ornament-rail top-rail" />
            <div className="hero-topline">
              <span>Made by the OpenAI Student Collective</span>
              <span>Bring your laptop. And that weird idea.</span>
            </div>
            <div className="hero-composition">
              <div className="hero-copy">
                <div className="painted-label">The Taste Department</div>
                <h1 id="hero-title" className="ipm-display">
                  <span className="hero-title-line">FULL-POWER</span>
                  <span className="hero-title-line">FRONTEND</span>
                </h1>
                <div className="hero-under">
                  <span className="issue-tag">
                    7 SKILLS
                    <br />
                    ALL YOURS
                  </span>
                  <p>
                    Your next website
                    <br />
                    could have a personality.
                  </p>
                  <a
                    className="hero-scroll"
                    href="#indian-print-maximalism-kit"
                    aria-label="Explore the first skill"
                  >
                    <Arrow down />
                  </a>
                </div>
              </div>
              <div className="hero-art">
                <img
                  className="pendant"
                  src="/art/lime-chilli.svg"
                  alt="An original lime-and-chilli print illustration"
                />
                <span className="art-note">
                  GOOD TASTE.
                  <br />
                  BURI NAZAR, BYE.
                </span>
                <Flower className="hero-flower" />
              </div>
            </div>
            <div className="hero-footer">
              <p>
                Hosted by <strong>Samarth Ryan Edward</strong>
                <span>&</span>
                <strong>Parv Bhawsar</strong>
              </p>
              <span>Keep going. There are seven of these. ↓</span>
            </div>
            <div className="ornament-rail bottom-rail" />
          </div>
          <div className="section-shell indian-details">
            <div className="chapter-meta">
              <span>01 / THE PRINT SHOP</span>
              <div className="ink-controls" aria-label="Print palette">
                {["mango", "indigo", "gulabi"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setIndianPalette(p)}
                    aria-pressed={p === indianPalette}
                  >
                    {p}
                    <span aria-hidden="true">
                      {p === indianPalette ? " ●" : " ○"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="chapter-intro indian-subtitle">
              <h2>
                Thoda loud.
                <br />
                <span className="ipm-painted">Full power.</span>
              </h2>
              <p>
                Pick a look. Download its brain.
                <br />
                Let your idea take it from here.
              </p>
            </div>
            <Kit skill={skills[0]} onOpen={showKit} />
          </div>
        </section>

        <section
          className="chapter minimal"
          id={skills[1].slug}
          data-chapter="1"
          aria-labelledby="minimal-title"
        >
          <Seam color={indianInks[indianPalette][0]} />
          <div className="section-shell">
            <div className="chapter-meta">
              <span>02 / Type gallery</span>
              <span>Give the letters some room.</span>
            </div>
            <div className="chapter-intro">
              <div className="minimal-kicker">
                Less stuff.
                <br />
                More nerve.
              </div>
              <div className="warp">
                <h2 id="minimal-title">
                  Good type.
                  <br />
                  <i>Bad habits.</i>
                </h2>
                <div className="warp-echo" aria-hidden="true">
                  {Array.from({ length: 16 }, (_, i) => (
                    <span
                      className="warp-slice"
                      key={i}
                      style={{
                        clipPath: `inset(0 ${100 - (i + 1) * 6.25}% 0 ${i * 6.25}%)`,
                      }}
                    >
                      Good type.
                      <br />
                      <i>Bad habits.</i>
                    </span>
                  ))}
                </div>
              </div>
              <div className="minimal-caption">
                <span>Yes, the letters are doing that on purpose.</span>
                <span className="coral-disc" aria-hidden="true">
                  ↗
                </span>
              </div>
            </div>
            <Kit skill={skills[1]} onOpen={showKit} />
          </div>
        </section>

        <section
          className="chapter colorful"
          id={skills[2].slug}
          data-chapter="2"
          style={
            {
              "--poster-bg": posterPalettes[poster][1],
              "--poster-ink": posterPalettes[poster][2],
            } as CSSProperties
          }
          aria-labelledby="color-title"
        >
          <Seam color="#ffffff" />
          <div className="section-shell">
            <div className="chapter-meta">
              <span>03 / Color riot</span>
              <button
                className="palette-cycle"
                onClick={() => setPoster((poster + 1) % posterPalettes.length)}
              >
                Change colors <span aria-hidden="true">↻</span>
                <span className="sr-only">
                  Current: {posterPalettes[poster][0]}
                </span>
              </button>
            </div>
            <div className="chapter-intro">
              <h2 id="color-title">
                MAKE
                <br />
                SOME
                <br />
                <span>NOISE.</span>
                <Flower className="poster-flower" />
              </h2>
              <div className="glyph-band" aria-hidden="true">
                <span>✳</span>
                <span>↗</span>
                <span>◎</span>
                <span>❋</span>
                <span>↝</span>
                <small>TYPE IS THE PICTURE.</small>
              </div>
            </div>
            <Kit skill={skills[2]} onOpen={showKit} />
          </div>
        </section>

        <section
          className="chapter newspaper"
          id={skills[3].slug}
          data-chapter="3"
          aria-labelledby="paper-title"
        >
          <Seam color={posterPalettes[poster][1]} />
          <div className="section-shell">
            <div className="chapter-meta">
              <span>04 / THE DAILY FRONTEND</span>
              <span>ALL THE TYPE THAT FITS</span>
              <span>PRICE: YOUR ATTENTION</span>
            </div>
            <div className="chapter-intro">
              <h2 className="masthead" id="paper-title">
                The good
                <br />
                <i>old scroll.</i>
              </h2>
              <div className="newspaper-columns">
                <article>
                  <span className="eyebrow">OPINION</span>
                  <h3>
                    Local website
                    <br />
                    finds its spine.
                  </h3>
                  <p className="dropcap">
                    Reports suggest the addition of one thin line and a very
                    large serif has made the entire project feel suspiciously
                    considered.
                  </p>
                </article>
                <div className="print-symbol" aria-hidden="true">
                  <span>&</span>
                  <div>EST. WHENEVER YOU START</div>
                </div>
                <article>
                  <span className="eyebrow">FROM THE EDITOR</span>
                  <h3>
                    Stop burying
                    <br />
                    the headline.
                  </h3>
                  <p>
                    Give the big idea the big type. The rest can wait its turn.
                    Yes, even the paragraph you spent forty minutes writing.
                  </p>
                  <span className="editor-stamp">
                    EXTRA!
                    <br />
                    EXTRA!
                  </span>
                </article>
              </div>
            </div>
            <Kit skill={skills[3]} onOpen={showKit} />
          </div>
        </section>

        <section
          className="chapter cartoon"
          id={skills[4].slug}
          data-chapter="4"
          style={
            {
              "--cartoon-bg": cartoonPalettes[cartoonPreview][1],
              "--cartoon-ink": cartoonPalettes[cartoonPreview][2],
            } as CSSProperties
          }
          aria-labelledby="cartoon-title"
        >
          <Seam color="#e2dedb" />
          <div className="section-shell">
            <div className="chapter-meta">
              <span>05 / Cartoon brain</span>
              <span>Someone gave the paper legs.</span>
            </div>
            <div className="cartoon-stage chapter-intro">
              <div>
                <span className="cartoon-sticker">
                  100%
                  <br />
                  UNSERIOUS
                </span>
                <h2 id="cartoon-title">
                  <span className="cartoon-line">BAD AT</span>
                  <span className="cartoon-line">SITTING</span>
                  <span className="cartoon-line">
                    <em>STILL.</em>
                  </span>
                </h2>
              </div>
              <div className="character-wrap">
                <div className="paper-flight">
                  <PaperPal />
                </div>
                <span className="character-caption">
                  HE HAS NO DELIVERABLES.
                </span>
              </div>
              <div className="flying-sheet sheet-one" aria-hidden="true">
                Aa
                <span>
                  HANDLE WITH
                  <br />
                  ABSOLUTELY NO CARE
                </span>
              </div>
              <div className="flying-sheet sheet-two" aria-hidden="true">
                ↗
              </div>
              <div className="flying-sheet sheet-three" aria-hidden="true">
                oops.
              </div>
            </div>
            <div className="cartoon-ribbon" aria-hidden="true">
              <div className="cartoon-ribbon-track">
                FOLD IT. SEND IT. <span>SEE WHAT HAPPENS.</span> FOLD IT. SEND
                IT.
              </div>
            </div>
            <div className="cartoon-palette">
              <p>
                Try a different mood.
                <br />
                <small>Hover to flirt. Click to commit.</small>
              </p>
              <div
                className="mood-buttons"
                onKeyDown={() => {
                  paletteInput.current = "keyboard";
                }}
                onPointerDown={() => {
                  paletteInput.current = "pointer";
                  setFocusPalette(null);
                }}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget))
                    setFocusPalette(null);
                }}
              >
                {cartoonPalettes.map((p, i) => (
                  <button
                    key={p[0]}
                    style={{ "--swatch": p[1] } as CSSProperties}
                    aria-label={`${p[0]} palette`}
                    aria-pressed={cartoon === i}
                    onPointerEnter={(e) => {
                      if (
                        e.pointerType === "mouse" &&
                        matchMedia("(hover: hover) and (pointer: fine)").matches
                      )
                        setHoverPalette(i);
                    }}
                    onPointerLeave={() =>
                      setHoverPalette((current) =>
                        current === i ? null : current,
                      )
                    }
                    onFocus={() => {
                      if (paletteInput.current === "keyboard")
                        setFocusPalette(i);
                    }}
                    onKeyDown={() => {
                      paletteInput.current = "keyboard";
                      setFocusPalette(i);
                    }}
                    onClick={() => setCartoon(i)}
                  >
                    <span aria-hidden="true">{cartoon === i ? "✓" : ""}</span>
                  </button>
                ))}
              </div>
              <span className="mood-name">
                {cartoonPalettes[cartoonPreview][0]}
              </span>
            </div>
            <Kit skill={skills[4]} onOpen={showKit} />
          </div>
        </section>

        <section
          className="chapter architecture"
          id={skills[5].slug}
          data-chapter="5"
          aria-labelledby="architecture-title"
        >
          <Seam color={cartoonPalettes[cartoonPreview][1]} />
          <div className="section-shell architecture-top">
            <div className="chapter-meta">
              <span>06 / Big concrete</span>
              <span>Start big. You can edit it down.</span>
            </div>
            <div className="chapter-intro">
              <h2 id="architecture-title">
                Built
                <br />
                different.
              </h2>
              <div className="architecture-caption">
                <span>Architectural color blocks</span>
                <span>Keep scrolling. Three large points are incoming. ↓</span>
              </div>
            </div>
          </div>
          <ol
            className="number-stage"
            aria-label="Three steps to making your frontend"
          >
            <li className="number-panel panel-one">
              <span className="big-number" aria-hidden="true">
                1
              </span>
              <div>
                <span className="eyebrow">PICK YOUR STRUCTURE</span>
                <h3>
                  A little
                  <br />
                  less timid.
                </h3>
                <p>
                  Let the type take up space.
                  <br />
                  It’s paying the rent.
                </p>
              </div>
            </li>
            <li className="number-panel panel-two">
              <span className="big-number" aria-hidden="true">
                2
              </span>
              <div>
                <span className="eyebrow">PUT SOME COLOR DOWN</span>
                <h3>
                  Paint the
                  <br />
                  whole wall.
                </h3>
                <p>
                  A color block should commit.
                  <br />A polite little tint won’t do.
                </p>
              </div>
            </li>
            <li className="number-panel panel-three">
              <span className="big-number" aria-hidden="true">
                3
              </span>
              <div>
                <span className="eyebrow">NOW MAKE IT MOVE</span>
                <h3>
                  Give it
                  <br />
                  some room.
                </h3>
                <p>
                  Three panels. One scroll.
                  <br />A very satisfying entrance.
                </p>
              </div>
            </li>
          </ol>
          <div className="section-shell architecture-bottom">
            <Kit skill={skills[5]} onOpen={showKit} />
          </div>
        </section>

        <section
          className="chapter cute"
          id={skills[6].slug}
          data-chapter="6"
          aria-labelledby="cute-title"
        >
          <Seam color="#d9d9d9" />
          <div className="section-shell">
            <div className="chapter-meta">
              <span>07 / Soft serve</span>
              <span>You've earned a quieter tab.</span>
            </div>
            <div className="cute-hero chapter-intro">
              <div>
                <span className="cute-label">
                  the soft side of the internet
                </span>
                <h2 id="cute-title">
                  Oh, that’s
                  <br />
                  <i>really</i> cute.
                </h2>
                <p>
                  For websites you want to pinch
                  <br />
                  on the cheek. Gently.
                </p>
              </div>
              <div className="cute-art" aria-hidden="true">
                <div className="cute-medallion">
                  <Flower />
                  <span className="flower-face">
                    ••
                    <br />
                    <b>⌣</b>
                  </span>
                </div>
                <span className="cute-note">
                  made with
                  <br />a little extra love
                </span>
                <span className="cute-sparkle">✧</span>
              </div>
            </div>
            <div className="flavor-row" aria-label="This skill's ingredients">
              <div className="flavor yellow">
                <span>01</span>
                <strong>Buttery type</strong>
                <span aria-hidden="true">Aa</span>
              </div>
              <div className="flavor pink">
                <span>02</span>
                <strong>Soft corners</strong>
                <span className="pill-doodle" aria-hidden="true" />
              </div>
              <div className="flavor purple">
                <span>03</span>
                <strong>Good manners</strong>
                <span aria-hidden="true">♡</span>
              </div>
            </div>
            <Kit skill={skills[6]} onOpen={showKit} />
          </div>
          <footer className="site-footer">
            <span className="eyebrow">Found one you like?</span>
            <h2>Go make a thing.</h2>
            <p>
              Full-power Frontend · OpenAI Student Collective
              <br />
              Hosted by Samarth Ryan Edward & Parv Bhawsar
            </p>
            <div>
              <a href="#indian-print-maximalism">One more scroll? ↑</a>
              <button onClick={menuDialog.open}>Pick your skill ↗</button>
              {repository && (
                <a href={repository} target="_blank" rel="noreferrer">
                  Get everything on GitHub ↗
                </a>
              )}
            </div>
          </footer>
        </section>
      </main>

      <dialog
        className="handoff-dialog"
        aria-label="Use this skill in your AI app"
        ref={handoffDialog.ref}
        data-style={handoff.slug}
        onCancel={(e) => {
          e.preventDefault();
          handoffDialog.close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) handoffDialog.close();
        }}
      >
        <div className="dialog-inner">
          <button
            className="dialog-close"
            onClick={() => handoffDialog.close()}
            aria-label="Close handoff"
          >
            ×
          </button>
          <span className="eyebrow">{handoff.name}</span>
          <h2>
            Take it from here.
            <br />
          </h2>
          <p>
            Start a new chat with <strong>{handoff.name}</strong>. The prompt
            points to the skill {repository ? "on GitHub" : "bundle you attach"}
            .
          </p>
          <ol>
            <li>
              <button onClick={copyHandoff}>Copy the starter prompt ⧉</button>
            </li>
            <li>
              <a href="https://chatgpt.com/" target="_blank" rel="noreferrer">
                Open ChatGPT ↗
              </a>
              <span>
                Paste the prompt and replace [Enter your prompt here] with your
                idea. If it cannot read the repository, attach the ZIP.
              </span>
            </li>
            <li>
              <a href={`/downloads/${handoff.slug}.zip`} download>
                Grab the ZIP as backup ↓
              </a>
            </li>
          </ol>
          <p className="dialog-status" role="status">
            {handoffMessage}
          </p>
          <a
            className="desktop-link"
            href={`codex://new?prompt=${encodeURIComponent(starterPrompt(handoff))}`}
          >
            Or prefill the desktop app ↗
          </a>
          <small>
            Requires a compatible Codex/ChatGPT desktop app. You review and send
            the prompt. Nothing is installed automatically. A .skill file is the
            same ZIP bundle for apps that support that import.
          </small>
        </div>
      </dialog>
      <dialog
        className="index-dialog"
        aria-label="Choose a design skill"
        ref={menuDialog.ref}
        onCancel={(e) => {
          e.preventDefault();
          menuDialog.close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) menuDialog.close();
        }}
      >
        <div className="dialog-inner">
          <button
            className="dialog-close"
            onClick={() => menuDialog.close()}
            aria-label="Close skill index"
          >
            ×
          </button>
          <span className="eyebrow">All seven styles</span>
          <h2>
            What feels like you?
            <br />
            <i>You can always change your mind.</i>
          </h2>
          <nav aria-label="All skills">
            {skills.map((skill, i) => (
              <a
                href={`#${skill.slug}`}
                key={skill.slug}
                onClick={(e) => {
                  e.preventDefault();
                  menuDialog.close(() => {
                    window.location.hash = skill.slug;
                  });
                }}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{skill.name}</span>
                <i style={{ background: skill.color }} />
                <Arrow />
              </a>
            ))}
          </nav>
        </div>
      </dialog>
    </div>
  );
}

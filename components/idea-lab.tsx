"use client";

import { useState, useRef } from "react";
import { ideas, ideaPrompt, type BuildIdea } from "@/lib/ideas";
import { repository, skills } from "@/lib/skills";

function IdeaCard({ idea, index }: { idea: BuildIdea; index: number }) {
  const [selected, setSelected] = useState("");
  const [extra, setExtra] = useState("");
  const [message, setMessage] = useState("");
  const promptRef = useRef<HTMLTextAreaElement>(null);
  const skill = skills.find((item) => item.slug === selected);
  const suggested = skills.find((item) => item.slug === idea.suggestion)!;
  const prompt = ideaPrompt(
    idea,
    skill
      ? `${skill.name}: ${repository.replace(/\/$/, "")}/blob/main/skills/${skill.slug}/SKILL.md`
      : "",
    extra,
  );

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      setMessage("Copied. Paste in ChatGPT, select @Sites, and make it yours.");
    } catch {
      promptRef.current?.focus();
      promptRef.current?.select();
      setMessage(
        "Clipboard unavailable. The prompt is selected; copy it manually.",
      );
    }
  }

  return (
    <article className="idea-card" data-vibe={idea.vibe} id={idea.id}>
      <div className="idea-card-top">
        <span>BRIEF / 0{index + 1}</span>
        <span>{idea.label}</span>
      </div>
      <h3>{idea.title}</h3>
      <p className="idea-description">{idea.description}</p>
      <figure className="idea-specimen">
        <span className="idea-example-label">
          AN EXAMPLE, NOT A WORKING GENERATOR
        </span>
        <blockquote>{idea.sample}</blockquote>
        <figcaption>{idea.sampleLabel}</figcaption>
      </figure>
      <h4>Make it do this</h4>
      <ul>
        {idea.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <p className="idea-stretch">
        <strong>Make it worse:</strong> {idea.stretch}
      </p>
      <p className="idea-pairing">
        Looks good in <a href={`#${suggested.slug}`}>{suggested.name}</a>. Any
        skill works.
      </p>
      <details className="idea-builder">
        <summary>
          Steal this brief <span aria-hidden="true">+</span>
        </summary>
        <div className="idea-builder-content">
          <label htmlFor={`${idea.id}-skill`}>1. Pick the frontend</label>
          <select
            id={`${idea.id}-skill`}
            value={selected}
            onChange={(event) => {
              setSelected(event.target.value);
              setMessage("");
            }}
          >
            <option value="">[add skill here] — I’ll choose in ChatGPT</option>
            {skills.map((item) => (
              <option value={item.slug} key={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
          <label htmlFor={`${idea.id}-extra`}>
            2. Add your own bad influence <span>(optional)</span>
          </label>
          <textarea
            id={`${idea.id}-extra`}
            value={extra}
            onChange={(event) => {
              setExtra(event.target.value);
              setMessage("");
            }}
            placeholder="Make it bilingual. Add a chaos dial. Ban the word synergy."
            rows={3}
            maxLength={6000}
          />
          <label htmlFor={`${idea.id}-prompt`}>3. Your build prompt</label>
          <textarea
            id={`${idea.id}-prompt`}
            className="idea-prompt"
            ref={promptRef}
            value={prompt}
            readOnly
            rows={7}
          />
          <div className="idea-actions">
            <button type="button" onClick={copyPrompt}>
              Copy build prompt
            </button>
            <a href="https://chatgpt.com/" target="_blank" rel="noreferrer">
              Open ChatGPT
            </a>
          </div>
          <p className="idea-feedback" role="status">
            {message ||
              "Copy, open ChatGPT, and paste. Select @Sites from the mention picker if needed. Nothing is sent automatically."}
          </p>
        </div>
      </details>
    </article>
  );
}

export function IdeaLab() {
  return (
    <section
      className="idea-lab"
      id="build-ideas"
      aria-labelledby="idea-lab-title"
    >
      <div className="idea-lab-heading">
        <span className="eyebrow">THE BRIEF WAS LEFT UNSUPERVISED</span>
        <h2 id="idea-lab-title">
          No idea?
          <br />
          <em>Take a bad one.</em>
        </h2>
        <p>
          Six very buildable bad decisions. Pick a brief, borrow a frontend, add
          your own nonsense.
        </p>
        <p className="idea-workflow">
          Build with <strong>@Sites</strong> in ChatGPT. Need AI writing? The
          briefs ask for ChatGPT too, with a copy-and-paste handoff when an
          in-site connection isn’t available. The funeral-home brief is the
          exception: private messages never leave your device.{" "}
          <a
            href="https://learn.chatgpt.com/docs/sites"
            target="_blank"
            rel="noreferrer"
          >
            How Sites works
          </a>
          .
        </p>
      </div>
      <div className="idea-grid">
        {ideas.map((idea, index) => (
          <IdeaCard key={idea.id} idea={idea} index={index} />
        ))}
      </div>
    </section>
  );
}

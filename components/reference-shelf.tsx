import { references } from "@/lib/references";

export function ReferenceShelf() {
  return (
    <section
      className="reference-shelf"
      id="references"
      aria-labelledby="references-title"
    >
      <div className="reference-shelf-inner">
        <header className="reference-shelf-heading">
          <span className="eyebrow">A few good rabbit holes</span>
          <h2 id="references-title">
            Tabs worth
            <br />
            <em>keeping open.</em>
          </h2>
          <p>
            Stuck? Go look at good work. These are places to find a direction,
            pick up a useful bit of code, or finally learn what that scroll
            effect is called.
          </p>
        </header>
        <ol className="reference-list">
          {references.map((reference, index) => (
            <li key={reference.url}>
              <a
                className="reference-link"
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="reference-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="reference-name">
                  <small>{reference.category}</small>
                  <strong>{reference.name}</strong>
                </span>
                <span className="reference-description">
                  {reference.description}
                </span>
                <span className="reference-arrow" aria-hidden="true">
                  ↗
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ol>
        <p className="reference-footnote">
          Look closely. Build something of your own. Check each resource’s
          licence before reusing code or assets. Links open in a new tab.
        </p>
      </div>
    </section>
  );
}

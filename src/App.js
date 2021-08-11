import { useState } from "react";
import "./scss/styles.scss";
import * as R from "ramda";

export default function App() {
  const [show, setShow] = useState(false);
  const [output, setOutput] = useState(":root{}");
  const [styles, setStyles] = useState({
    /* src/styles/base.css */
    "--grid-gutter": "1rem",
    "--spacing-xxx-small": "0.125rem",
    "--spacing-xx-small": "0.25rem",
    "--spacing-x-small": "0.5rem",
    "--spacing-small": "0.75rem",
    "--spacing-medium": "1rem",
    "--spacing-large": "1.25rem",
    "--spacing-x-large": "1.75rem",
    "--spacing-xx-large": "2.25rem",
    "--spacing-xxx-large": "3rem",
    "--spacing-xxxx-large": "4.5rem",
    "--color-primary-50": "#f0f9ff",
    "--color-primary-100": "#e0f2fe",
    "--color-primary-200": "#bae6fd",
    "--color-primary-300": "#7dd3fc",
    "--color-primary-400": "#38bdf8",
    "--color-primary-500": "#0ea5e9",
    "--color-primary-600": "#0284c7",
    "--color-primary-700": "#0369a1",
    "--color-primary-800": "#075985",
    "--color-primary-900": "#0c4a6e",
    "--color-primary-950": "#082e45",
    "--color-black": "#000",
    "--color-white": "#fff",
    "--color-gray-50": "#f9fafb",
    "--color-gray-100": "#f3f4f6",
    "--color-gray-200": "#e5e7eb",
    "--color-gray-300": "#d1d5db",
    "--color-gray-400": "#9ca3af",
    "--color-gray-500": "#6b7280",
    "--color-gray-600": "#4b5563",
    "--color-gray-700": "#374151",
    "--color-gray-800": "#1f2937",
    "--color-gray-900": "#111827",
    "--color-gray-950": "#0d131e",
    "--color-primary-text": "var(--color-white)",
    "--color-success-50": "#f0fdf4",
    "--color-success-100": "#dcfce7",
    "--color-success-200": "#bbf7d0",
    "--color-success-300": "#86efac",
    "--color-success-400": "#4ade80",
    "--color-success-500": "#22c55e",
    "--color-success-600": "#16a34a",
    "--color-success-700": "#15803d",
    "--color-success-800": "#166534",
    "--color-success-900": "#14532d",
    "--color-success-950": "#0d381e",
    "--color-success-text": "var(--color-white)",
    "--color-info-50": "#f9fafb",
    "--color-info-100": "#f3f4f6",
    "--color-info-200": "#e5e7eb",
    "--color-info-300": "#d1d5db",
    "--color-info-400": "#9ca3af",
    "--color-info-500": "#6b7280",
    "--color-info-600": "#4b5563",
    "--color-info-700": "#374151",
    "--color-info-800": "#1f2937",
    "--color-info-900": "#111827",
    "--color-info-950": "#0d131e",
    "--color-info-text": "var(--color-white)",
    "--color-warning-50": "#fffbeb",
    "--color-warning-100": "#fef3c7",
    "--color-warning-200": "#fde68a",
    "--color-warning-300": "#fcd34d",
    "--color-warning-400": "#fbbf24",
    "--color-warning-500": "#f59e0b",
    "--color-warning-600": "#d97706",
    "--color-warning-700": "#b45309",
    "--color-warning-800": "#92400e",
    "--color-warning-900": "#78350f",
    "--color-warning-950": "#4d220a",
    "--color-warning-text": "var(--color-white)",
    "--color-danger-50": "#fef2f2",
    "--color-danger-100": "#fee2e2",
    "--color-danger-200": "#fecaca",
    "--color-danger-300": "#fca5a5",
    "--color-danger-400": "#f87171",
    "--color-danger-500": "#ef4444",
    "--color-danger-600": "#dc2626",
    "--color-danger-700": "#b91c1c",
    "--color-danger-800": "#991b1b",
    "--color-danger-900": "#7f1d1d",
    "--color-danger-950": "#481111",
    "--color-danger-text": "var(--color-white)",
    "--border-radius-small": "0.125rem",
    "--border-radius-medium": "0.25rem",
    "--border-radius-large": "0.5rem",
    "--border-radius-x-large": "1rem",
    "--border-radius-circle": "50%",
    "--border-radius-pill": "9999px",
    "--shadow-x-small": "0 1px 0 #0d131e0d",
    "--shadow-small": "0 1px 2px #0d131e1a",
    "--shadow-medium": "0 2px 4px #0d131e1a",
    "--shadow-large": "0 2px 8px #0d131e1a",
    "--shadow-x-large": "0 4px 16px #0d131e1a",
    "--transition-x-slow": "1000ms",
    "--transition-slow": "500ms",
    "--transition-medium": "250ms",
    "--transition-fast": "150ms",
    "--transition-x-fast": "50ms",
    "--font-mono":
      'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
    "--font-sans":
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    "--font-serif": 'Georgia, "Times New Roman", serif',
    "--font-size-xx-small": "0.625rem",
    "--font-size-x-small": "0.75rem",
    "--font-size-small": "0.875rem",
    "--font-size-medium": "1rem",
    "--font-size-large": "1.25rem",
    "--font-size-x-large": "1.5rem",
    "--font-size-xx-large": "2.25rem",
    "--font-size-xxx-large": "3rem",
    "--font-size-xxxx-large": "4.5rem",
    "--font-weight-light": "300",
    "--font-weight-normal": "400",
    "--font-weight-semibold": "500",
    "--font-weight-bold": "700",
    "--letter-spacing-dense": "-0.015em",
    "--letter-spacing-normal": "normal",
    "--letter-spacing-loose": "0.075em",
    "--line-height-dense": "1.4",
    "--line-height-normal": "1.8",
    "--line-height-loose": "2.2",
    "--focus-ring-color-primary": "#0ea5e954",
    "--focus-ring-color-success": "#22c55e54",
    "--focus-ring-color-info": "#6b728054",
    "--focus-ring-color-warning": "#f59e0b54",
    "--focus-ring-color-danger": "#ef444454",
    "--focus-ring-width": "3px",
    "--button-font-size-small": "var(--font-size-x-small)",
    "--button-font-size-medium": "var(--font-size-small)",
    "--button-font-size-large": "var(--font-size-medium)",
    "--input-height-small": "1.875rem",
    "--input-height-medium": "2.5rem",
    "--input-height-large": "3.125rem",
    "--input-background-color": "var(--color-white)",
    "--input-background-color-hover": "var(--color-white)",
    "--input-background-color-focus": "var(--color-white)",
    "--input-background-color-disabled": "var(--color-gray-100)",
    "--input-border-color": "var(--color-gray-300)",
    "--input-border-color-hover": "var(--color-gray-400)",
    "--input-border-color-focus": "var(--color-primary-500)",
    "--input-border-color-disabled": "var(--color-gray-300)",
    "--input-border-width": "1px",
    "--input-border-radius-small": "var(--border-radius-medium)",
    "--input-border-radius-medium": "var(--border-radius-medium)",
    "--input-border-radius-large": "var(--border-radius-medium)",
    "--input-font-family": "var(--font-sans)",
    "--input-font-weight": "var(--font-weight-normal)",
    "--input-font-size-small": "var(--font-size-small)",
    "--input-font-size-medium": "var(--font-size-medium)",
    "--input-font-size-large": "var(--font-size-large)",
    "--input-letter-spacing": "var(--letter-spacing-normal)",
    "--input-color": "var(--color-gray-700)",
    "--input-color-hover": "var(--color-gray-700)",
    "--input-color-focus": "var(--color-gray-700)",
    "--input-color-disabled": "var(--color-gray-900)",
    "--input-icon-color": "var(--color-gray-400)",
    "--input-icon-color-hover": "var(--color-gray-600)",
    "--input-icon-color-focus": "var(--color-gray-600)",
    "--input-placeholder-color": "var(--color-gray-400)",
    "--input-placeholder-color-disabled": "var(--color-gray-600)",
    "--input-spacing-small": "var(--spacing-small)",
    "--input-spacing-medium": "var(--spacing-medium)",
    "--input-spacing-large": "var(--spacing-large)",
    "--input-label-font-size-small": "var(--font-size-small)",
    "--input-label-font-size-medium": "var(--font-size-medium)",
    "--input-label-font-size-large": "var(--font-size-large)",
    "--input-label-color": "inherit",
    "--input-help-text-font-size-small": "var(--font-size-x-small)",
    "--input-help-text-font-size-medium": "var(--font-size-small)",
    "--input-help-text-font-size-large": "var(--font-size-medium)",
    "--input-help-text-color": "var(--color-gray-400)",
    "--toggle-size": "1rem",
    "--overlay-background-color": "#37415180",
    "--panel-background-color": "var(--color-white)",
    "--panel-border-color": "var(--color-gray-200)",
    "--tooltip-border-radius": "var(--border-radius-medium)",
    "--tooltip-background-color": "var(--color-gray-900)",
    "--tooltip-color": "var(--color-white)",
    "--tooltip-font-family": "var(--font-sans)",
    "--tooltip-font-weight": "var(--font-weight-normal)",
    "--tooltip-font-size": "var(--font-size-small)",
    "--tooltip-line-height": "var(--line-height-dense)",
    "--tooltip-padding": "var(--spacing-xx-small) var(--spacing-x-small)",
    "--tooltip-arrow-size": "5px",
    "--tooltip-arrow-start-end-offset": "8px",
    "--z-index-drawer": "700",
    "--z-index-dialog": "800",
    "--z-index-dropdown": "900",
    "--z-index-toast": "950",
    "--z-index-tooltip": "1000",
  });

  const updateVars = (e) => {
    e.preventDefault();
    const formData = R.compose(
      R.reject(R.propEq("id", "")),
      R.map((i) => ({ [i.id]: i.value }))
    )(e.target.elements);
    const styles = R.reduce((a, b) => ({ ...a, ...b }), {}, formData);
    setStyles(styles);

    setOutput(":root{\n" + JSON.stringify(styles) + "\n}");

    // R.forEachObjIndexed((v,k)=> document.documentElement.style.setProperty(k, v), styles);
  };

  const handleChange = (e, v) => {
    e.preventDefault();
    setStyles({ ...styles, [v]: e.target.value });
  };

  return styles ? (
    <div className="layout" style={styles}>
      <div className="layout__header">
        <div className="grid grid--bleed">
          <div className="section section--x-large">
            <div className="component">
              <h1>Barebones grid layout</h1>
              <button
                className="btn"
                onClick={() => {
                  setShow(true);
                }}
                style={{
                  background: "var(--color-primary-300)",
                  fontSize: "var(--button-font-size-large)",
                  padding: "var(--spacing-medium",
                  borderRadius: "var(--border-radius-large)",
                }}
              >
                Show Output
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="section show"
        style={{ display: !show ? "none" : "block" }}
      >
        <button
          className="btn"
          onClick={() => {
            setShow(false);
          }}
          style={{
            background: "var(--color-primary-300)",
            fontSize: "var(--button-font-size-large)",
            padding: "var(--spacing-medium",
            borderRadius: "var(--border-radius-large)",
          }}
        >
          Hide Output
        </button>
        <br /> <br />
        <code>{output}</code>
      </div>
      <div className="layout__main">
        <div className="layout__sidebar">
          <div className="section">
            <form onSubmit={(e) => updateVars(e)}>
              {R.compose(
                R.reject(R.isEmpty),
                R.toPairs
              )(styles).map((i) => (
                <label htmlFor={i[0]}>
                  {i[0]}
                  <input
                    id={i[0]}
                    placeholder={i[0]}
                    value={styles[i[0]]}
                    onChange={(e) => handleChange(e, i[0])}
                  />
                </label>
              ))}
              <button
                style={{
                  background: "var(--color-primary-300)",
                  fontSize: "var(--button-font-size-large)",
                  padding: "var(--spacing-medium",
                  borderRadius: "var(--border-radius-large)",
                }}
                type="submit"
              >
                Update
              </button>
            </form>
          </div>
        </div>

        <div className="layout__content">
          <div className="grid">
            <div className="section">
              <span style={{ fontFamily: "var(--font-sans)" }}>
                The quick brown fox jumped over the lazy dog.
              </span>
            </div>

            <div className="section">
              <span style={{ fontFamily: "var(--font-serif)" }}>
                The quick brown fox jumped over the lazy dog.
              </span>
            </div>

            <div className="section">
              <span style={{ fontFamily: "var(--font-mono)" }}>
                The quick brown fox jumped over the lazy dog.
              </span>
            </div>
          </div>
          <div className="grid">
            <div
              className="section"
              style={{
                background: "var(--color-primary-50)",
                color: "var(--color-black)",
              }}
            >
              <span style={{ fontSize: "var(--font-size-xx-small)" }}>Aa</span>
            </div>

            <div
              className="section"
              style={{
                background: "var(--color-primary-200)",
                color: "var(--color-black)",
              }}
            >
              <span style={{ fontSize: "var(--font-size-x-small)" }}>Aa</span>
            </div>

            <div
              className="section"
              style={{
                background: "var(--color-primary-400)",
                color: "var(--color-white)",
              }}
            >
              <span style={{ fontSize: "var(--font-size-small)" }}>Aa</span>
            </div>

            <div
              className="section"
              style={{
                background: "var(--color-primary-600)",
                color: "var(--color-white)",
              }}
            >
              <span style={{ fontSize: "var(--font-size-medium)" }}>Aa</span>
            </div>

            <div
              className="section"
              style={{
                background: "var(--color-primary-900)",
                color: "var(--color-white)",
              }}
            >
              <span style={{ fontSize: "var(--font-size-large)" }}>Aa</span>
            </div>
          </div>
          <div className="grid">
            <div className="section">
              <span style={{ fontSize: "var(--font-size-x-large)" }}>Aa</span>
            </div>

            <div className="section">
              <span style={{ fontSize: "var(--font-size-xx-large)" }}>Aa</span>
            </div>

            <div className="section">
              <span style={{ fontSize: "var(--font-size-xxx-large)" }}>Aa</span>
            </div>

            <div className="section">
              <span style={{ fontSize: "var(--font-size-xxxx-large)" }}>
                Aa
              </span>
            </div>
          </div>
          <div className="grid">
            <div className="section">
              <span style={{ fontWeight: "var(--font-weight-light)" }}>
                The quick brown fox jumped over the lazy dog.
              </span>
            </div>
            <div className="section">
              <span style={{ fontWeight: "var(--font-weight-normal)" }}>
                The quick brown fox jumped over the lazy dog.
              </span>
            </div>
            <div className="section">
              <span style={{ fontWeight: "var(--font-weight-semibold)" }}>
                The quick brown fox jumped over the lazy dog.
              </span>
            </div>
            <div className="section">
              <span style={{ fontWeight: "var(--font-weight-bold)" }}>
                The quick brown fox jumped over the lazy dog.
              </span>
            </div>
          </div>
          <div className="grid">
            <div className="section">
              <span
                style={{
                  letterSpacing: "var(--letter-spacing-dense)",
                }}
              >
                The quick brown fox jumped over the lazy dog.
              </span>
            </div>
            <div className="section">
              <span
                style={{
                  letterSpacing: "var(--letter-spacing-normal)",
                }}
              >
                The quick brown fox jumped over the lazy dog.
              </span>
            </div>
            <div className="section">
              <span
                style={{
                  letterSpacing: "var(--letter-spacing-loose)",
                }}
              >
                The quick brown fox jumped over the lazy dog.
              </span>
            </div>
          </div>
          <div className="grid">
            <div className="section">
              <div style={{ lineHeight: "var(--line-height-dense)" }}>
                The quick brown fox jumped over the lazy dog.
                <br />
                The quick brown fox jumped over the lazy dog.
                <br />
                The quick brown fox jumped over the lazy dog.
              </div>
            </div>

            <div className="section">
              <div style={{ lineHeight: "var(--line-height-normal)" }}>
                The quick brown fox jumped over the lazy dog.
                <br />
                The quick brown fox jumped over the lazy dog.
                <br />
                The quick brown fox jumped over the lazy dog.
              </div>
            </div>

            <div className="section">
              <div style={{ lineHeight: "var(--line-height-loose)" }}>
                The quick brown fox jumped over the lazy dog.
                <br />
                The quick brown fox jumped over the lazy dog.
                <br />
                The quick brown fox jumped over the lazy dog.
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="section section--large">100</div>
          </div>
          <div className="grid grid--30-70">
            <div className="section section--medium">30</div>
            <div className="section section--medium">70</div>
          </div>
          <div className="grid">
            <div className="section">50</div>
            <div className="section">50</div>
          </div>
          <div className="grid">
            <div className="section">33</div>
            <div className="section">33</div>
            <div className="section">33</div>
          </div>
          <div className="grid">
            <div className="section">25</div>
            <div className="section">25</div>
            <div className="section">25</div>
            <div className="section">25</div>
          </div>
          <div className="grid">
            <div className="section">20</div>
            <div className="section">20</div>
            <div className="section">20</div>
            <div className="section">20</div>
            <div className="section">20</div>
          </div>
        </div>
      </div>
      <div className="layout__footer">
        <div className="grid grid--bleed">
          <div className="section section--x-large">Footer</div>
        </div>
      </div>
    </div>
  ) : (
    <p>Vars needed</p>
  );
}

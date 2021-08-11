import { useState } from "react";
import "./scss/styles.scss";
import * as R from "ramda";

export default function App() {
  const [styles, setStyles] = useState({
    "--calculated-padding": "1.2rem",
    "--calculated-padding-md": "2.2rem",
    "--calculated-padding-l": "3.2rem",
    "--calculated-padding-xl": "4.2rem",
    "--calculated-gutter": "0.5rem",
  });

  const updateVars = (e) => {
    e.preventDefault();
    const formData = R.compose(
      R.reject(R.propEq("id", "")),
      R.map((i) => ({ [i.id]: i.value }))
    )(e.target.elements);
    const styles = R.reduce((a, b) => ({ ...a, ...b }), {}, formData);
    setStyles(styles);
    // R.forEachObjIndexed((v,k)=> document.documentElement.style.setProperty(k, v), styles);
  };
  const handleChange = (e, v) => {
    e.preventDefault();
    setStyles({ ...styles, [v]: e.target.value });
  };

  return (
    <div className="layout" style={styles}>
      <div ClassName="layout__header">
        <div className="grid grid--bleed">
          <div className="section section--x-large">
            <div className="component">
              <h1>Barebones grid layout</h1>
              <p>
                Page layout with minimal markup and css and opinionated markup
                and styling rules to accelerate design and development
                workflows.
              </p>
              <ul>
                <li>
                  All container spacing is based off a single "gutter" value
                </li>
                <li>
                  Separation of layout and grid system to remain flexible while
                  avoiding style bloat
                </li>
                <li>Grid gap can be removed to further simplify layout</li>
                <li>
                  Container padding is based of multiples of the "gutter" value
                  with small, medium large and extra-large modifiers (1x, 2x,
                  3x, 4x)
                </li>
                <li>
                  All text sizes are based off of a percentage of viewport
                </li>
                <li>All text spacing is set in em</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="layout__main">
        <div className="layout__sidebar">
          <div className="section">
            <div className="components">
              <form onSubmit={(e) => updateVars(e)}>
                <label htmlfor="--calculated-gutter">
                  Gutter
                  <input
                    id="--calculated-gutter"
                    placeholder="Gutter"
                    value={styles["--calculated-gutter"]}
                    onChange={(e) => handleChange(e, "--calculated-gutter")}
                  />
                </label>
                <label htmlfor="--calculated-padding">
                  Small Section
                  <input
                    id="--calculated-padding"
                    placeholder="Section Small"
                    value={styles["--calculated-padding"]}
                    onChange={(e) => handleChange(e, "--calculated-padding")}
                  />
                </label>
                <label htmlfor="--calculated-padding-md">
                  Medium Section
                  <input
                    id="--calculated-padding-md"
                    placeholder="Section Medium"
                    value={styles["--calculated-padding-md"]}
                    onChange={(e) => handleChange(e, "--calculated-padding-md")}
                  />
                </label>
                <label htmlfor="--calculated-padding-l">
                  Large Section
                  <input
                    id="--calculated-padding-l"
                    placeholder="Section Large"
                    value={styles["--calculated-padding-l"]}
                    onChange={(e) => handleChange(e, "--calculated-padding-l")}
                  />
                </label>
                <label htmlfor="--calculated-padding-xl">
                  Extra Large Section
                  <input
                    id="--calculated-padding-xl"
                    placeholder="Section Extra Large"
                    value={styles["--calculated-padding-xl"]}
                    onChange={(e) => handleChange(e, "--calculated-padding-xl")}
                  />
                </label>
                {/* <button type="submit">Update</button> */}
              </form>
            </div>
            <div className="grid grid--70-30">
              <div className="section">
                <div className="components">70</div>
              </div>
              <div className="section">
                <div className="components">30</div>
              </div>
            </div>
            <div className="grid">
              <div className="section">
                <div className="components">50</div>
              </div>
              <div className="section">
                <div className="components">50</div>
              </div>
            </div>
          </div>
        </div>
        <div className="layout__content">
          <div className="section section--large">100</div>
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
      <div ClassName="layout__footer">
        <div className="grid grid--bleed">
          <div class="section section--x-large">Footer</div>
        </div>
      </div>
    </div>
  );
}

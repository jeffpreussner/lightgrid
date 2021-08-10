import "./scss/styles.scss";

export default function App() {
  return (
    <div className="layout">
      <div ClassName="layout__header">
        <div className="grid grid--bleed">
          <div className="section section--x-large">
            <h1>Barebones grid layout</h1>
            <p>
              Page layout with minimal markup and css and opinionated markup and
              styling rules to accelerate design and development workflows.
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
                with small, medium large and extra-large modifiers (1x, 2x, 3x,
                4x)
              </li>
              <li>All text sizes are based off of a percentage of viewport</li>
              <li>All text spacing is set in em</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="layout__main">
        <div className="layout__sidebar">
          <div className="section">
            <h1>heading 1</h1>
            <h2>heading 2</h2>
            <h3>heading 3</h3>
            <h4>heading 4</h4>
            <h5>heading 5</h5>
            <h6>heading 6</h6>
            <p>
              Vestibulum volutpat pretium libero. Suspendisse faucibus, nunc et
              pellentesque egestas, lacus ante convallis tellus, vitae iaculis
              lacus elit id tortor. Integer tincidunt. Phasellus volutpat, metus
              eget egestas mollis, lacus lacus blandit dui, id egestas quam
              mauris ut lacus.
            </p>
            <p>
              Fusce commodo aliquam arcu. Vestibulum turpis sem, aliquet eget,
              lobortis pellentesque, rutrum eu, nisl. Sed libero. Cras non
              dolor.
            </p>
          </div>
          <div className="grid grid--70-30">
            <div className="section">70</div>
            <div className="section">30</div>
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
            <div className="section">50</div>
            <div className="section">50</div>
          </div>
          <div className="grid">
            <div className="section">100</div>
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

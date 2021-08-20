import { useState, useEffect, useReducer } from "react";
import "./scss/styles.scss";
import * as R from "ramda";
import vars from "./vars";
import slugify from "slugify";
import AddField from "./components/AddField/AddField";
import Btn from "./components/Btn/Btn";
// import { Button } from "carbon-components-react";

export default function App() {
  const [output, setOutput] = useState(":root{}");
  const reducer = (prevState, updatedProperty) => ({
    ...prevState,
    ...updatedProperty,
  });

  const [state, setState] = useReducer(reducer, {
    codeVisible: false,
    groupVisible: R.map((i) => ({ [i.id]: false }))(vars),
    vars: vars,
  });
  console.log(state.vars);
  //as a string
  // const allVars = R.join(
  //   "\n",
  //   R.map(
  //     // (i) => `${i.name}: ${i.value};`
  //     (i) => ({ [i.name]: i.value })
  //   )(R.compose(R.flatten, R.map(R.prop("data")))(state.vars))
  // );

  const allVars = R.reduce(
    (a, b) => ({ ...a, ...b }),
    {},
    R.map((i) => ({ [i.name]: i.value }))(
      R.compose(R.flatten, R.map(R.prop("data")))(state.vars)
    )
  );

  const [inline, setInline] = useState(true);
  const updateVars = (e) => {
    e.preventDefault();
    const formData = R.compose(
      R.reject(R.propEq("id", "")),
      R.map((i) => ({ [i.id]: i.value }))
    )(e.target.elements);
    setInline(R.reduce((a, b) => ({ ...a, ...b }), {}, formData));
    setOutput(":root{\n" + JSON.stringify(inline) + "\n}");
    // R.forEachObjIndexed((v,k)=> document.documentElement.style.setProperty(k, v), styles);
  };

  const handleChange = (g, n, v) => {
    const vars = [...state.vars];
    const groupIndex = R.findIndex(R.propEq("id", g))(vars);
    const nameIndex = R.findIndex(R.propEq("name", n))(vars[groupIndex].data);
    setState({
      vars: R.assocPath(
        [groupIndex, "data", nameIndex],
        { name: n, value: v },
        vars
      ),
    });
  };

  const handleAddFieldSubmit = (e, groupId, name, val) => {
    e.stopPropagation();
    e.preventDefault();
    const index = R.findIndex(R.propEq("id", groupId))(state.vars);
    const newVars = [...state.vars];
    newVars[index] = setState({
      var: {
        ...state.vars,
        [groupId]: {
          data: {
            ...state.vars[groupId].data,
            [name]: val,
          },
        },
      },
    });
    return false;
  };

  useEffect(() => {
    console.log(state);
  }, [state]);
  return allVars ? (
    <div className="layout" style={allVars}>
      <div className="layout__header">
        <div className="grid grid--bleed">
          <div className="section section--x-large">
            <h1>Velir Theme Roller</h1>
            <Btn
              classes="btn--primary"
              onClick={() => {
                setState({ codeVisible: true });
              }}
            >
              Show Output
            </Btn>
          </div>
        </div>
      </div>
      <div
        className="section show"
        style={{ display: !state.codeVisible ? "none" : "block" }}
      >
        <Btn
          onClick={() => {
            setState({ codeVisible: false });
          }}
        >
          Hide Output
        </Btn>
        <br /> <br />
        <code>{output}</code>
      </div>
      <div className="layout__main">
        <div className="layout__sidebar">
          <div className="section">
            <form onSubmit={(e) => updateVars(e)}>
              {vars.map((group, i) => (
                <div key={slugify(group.id)}>
                  <Btn
                    classes="btn--ui-accordion"
                    id={`${slugify(group.name)}-toggle`}
                    onClick={(e) =>
                      setState({
                        groupVisible: {
                          [group.id]: !state.groupVisible[group.id],
                        },
                      })
                    }
                  >
                    {group.name}
                  </Btn>
                  <ul
                    id={`${slugify(group.name)}-dropdown`}
                    style={{
                      display: state.groupVisible[group.id] ? "block" : "none",
                    }}
                  >
                    {group.data.map((i) => (
                      <li>
                        <label htmlFor={i.name}>
                          {i.name}
                          <input
                            id={i.name}
                            placeholder={i.name}
                            onChange={(e) =>
                              handleChange(group.id, i.name, e.target.value)
                            }
                          />
                        </label>
                      </li>
                    ))}
                    <li>
                      <AddField
                        btnText="Add variable"
                        groupId={group.id}
                        handleSubmit={handleAddFieldSubmit}
                      />
                    </li>
                  </ul>
                </div>
              ))}
              <Btn classes="btn--primary" type="submit">
                Update
              </Btn>
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
                background: "var(--color-primary-100)",
                color: "var(--color-white)",
              }}
            >
              <span style={{ fontSize: "var(--font-size-x-small)" }}>Aa</span>
            </div>
            <div
              className="section"
              style={{
                background: "var(--color-primary-150)",
                color: "var(--color-white)",
              }}
            >
              <span style={{ fontSize: "var(--font-size-small)" }}>Aa</span>
            </div>
          </div>
          <div className="grid">
            <div
              className="section"
              style={{
                background: "var(--color-secondary-50)",
                color: "var(--color-white)",
              }}
            >
              <span style={{ fontSize: "var(--font-size-medium)" }}>Aa</span>
            </div>
            <div
              className="section"
              style={{
                background: "var(--color-secondary-100)",
                color: "var(--color-white)",
              }}
            >
              <span style={{ fontSize: "var(--font-size-medium)" }}>Aa</span>
            </div>
            <div
              className="section"
              style={{
                background: "var(--color-secondary-150)",
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

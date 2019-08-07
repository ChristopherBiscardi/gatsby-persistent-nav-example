const React = require("react");
const { Link } = require("gatsby");
const Layout = props => {
  return (
    <div>
      <nav>
        <Link to="/">home</Link>
        <Link to="/docs">docs</Link>
        <Link to="/examples">examples</Link>
      </nav>
      <div>{props.children}</div>
    </div>
  );
};
exports.wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};

const LayoutA = props => (
  <div>
    <h2>Docs</h2>
    <div>{props.children}</div>
  </div>
);
exports.wrapPageElement = ({ element, props }) => {
  console.log(props.location);
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  if (props.location.pathname.startsWith("/docs")) {
    return (
      <LayoutA {...props}>
        <div style={{ position: "absolute", height: "100%", display: "flex" }}>
          <div style={{ overflowY: "auto" }}>
            {[...Array(100).keys()].map(v => (
              <li>
                <Link to={`/docs${["/", "/things", "/stuff"][v % 3]}`}>
                  {v}
                </Link>
              </li>
            ))}
          </div>
        </div>
        {element}
      </LayoutA>
    );
  }
};

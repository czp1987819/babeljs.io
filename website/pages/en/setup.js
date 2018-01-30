const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const siteConfig = require(process.cwd() + "/siteConfig.js");

const StepFour = () => {
  return (
    <div className="step-four">
      <h2 id="#step-title"><span className="step-no">4</span> Create <code>.babelrc</code> configuration file</h2>
      <p>
        Great! You've configured Babel but you haven't made it actually <em>do</em> anything. Create a <a href="/docs/usage/babelrc">.babelrc</a> config in your project root and enable some <a href="/docs/plugins">plugins</a>.
      </p>
      <p>
        To start, you can use the <a href="https://babeljs.io/docs/plugins/preset-env/">env preset</a>, which enables transforms for ES2015+
      </p>
      <p>
        In order to enable the preset you have to define it in your <code>.babelrc</code> file, like this:
      </p>
      <p>
        <strong>Note</strong>: Running a Babel 6.x project using npm 2.x can cause performance problems because of the way npm 2.x installs dependencies. This problem can be eliminated by either switching to npm 3.x or running npm 2.x with the <a href="https://docs.npmjs.com/cli/dedupe">dedupe</a> flag. To check what version of npm you have run
      </p>
    </div>
  );
}

class Setup extends React.Component {
  constructor(props) {
    super(props);
  }
  selectItem(groupIndex, itemIndex) {
    console.log(groupIndex, " ", itemIndex);
  }
  render() {
    const tools = siteConfig.tools;
    const showCase = tools.map((types, i) => {
      const showTools = Object.keys(types.items).map((tool, j) => {
        const isActive = false;
        return (
          <a
            key={j}
            href={`#${tool}`}
            className={isActive ? "tools-button active" : "tools-button"}
            onClick={this.selectItem.bind(this, i, j)}
          >
            {types.items[tool]}
          </a>
        );
      });
      return (
        <div className="tools-group" key={i}>
          <h5>{types.name}</h5>
          {showTools}
        </div>
      );
    });
    return (
      <div className="mainContainer">
        <div className="page-header text-center">
          <h1>Using Babel</h1>
          <p>How to use Babel with your tool of choice.</p>
        </div>
        <Container padding={["bottom"]}>
          <div className="step">
            <div className="step-one">
              <h2>
                <span className="step-no">1</span>
                {" Choose your tool (try CLI)"}
              </h2>
              {showCase}
            </div>
            <StepFour />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Setup;

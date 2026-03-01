import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Scores from "./components/Scores";
import * as result from "./data";
function App() {
  return (
    <>
      <Header img={pnLogo} name="LAbuh" />

      <main className="scores-container">
        
          <Scores course_name="java" props={result.JAVA_RESULTS} />
          <Scores course_name="HTML" props={result.HTML_RESULTS} />
          <Scores course_name="English" props={result.ENGLISH_RESULTS} />
          <Scores course_name="Python" props={result.PYTHON_RESULTS} />

      </main>
    </>
  );
}

export default App;

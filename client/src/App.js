import TextEditor from "./TextEditor";
import "./styles.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id" exact>
          <TextEditor />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

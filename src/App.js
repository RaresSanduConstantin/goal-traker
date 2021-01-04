import { Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import CalendarScreen from "./pages/CalendarScreen";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/calendar" component={CalendarScreen} />
      </Switch>
    </div>
  );
};

export default App;

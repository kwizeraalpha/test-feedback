import "./index.css"
import FeedbackList from "./component/FeedbackList";
import Header from "./component/Header";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import {BrowserRouter as Router, Route} from "react-router-dom"
import AboutPages from "./pages/AboutPages";
import AboutIconLink from "./component/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";




function App() {

  return (
<FeedbackProvider>
  <Router>
  <Header />
    <div className="container">
    
   <Route exact path="/">
    <FeedbackForm />
    <FeedbackStats />
    <FeedbackList />
    </Route>
    <Route path='/about' component={AboutPages} />
   
    <AboutIconLink />
    </div>
    </Router>
   
    </FeedbackProvider> 
  );
}

export default App;

import Layout from './components/layout/Layout';
import RoundSummary from './components/roundsummary/RoundSummary';
import PredictionMaker from './components/predictionmaker/PredictionMaker';

function App() {
  return (
    <Layout>
      <PredictionMaker />
      {/* <RoundSummary /> */}
    </Layout>
  );
}

export default App;

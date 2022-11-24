import './App.scss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <div>
          <ItemListContainer />
        </div>
      </Layout>
    </div>
  );
}

export default App;

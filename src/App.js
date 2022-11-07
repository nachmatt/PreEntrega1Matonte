import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <NavBar>
        {/* debe tener una mini instancia del carrito
            (un estado del contador total de productos)
            puede luego abrir un modal o routearte al carrito
            o ambas
        */}
      </NavBar>
      <ItemListContainer greeting='hola mundo!'>
        {/*  */}
      </ItemListContainer>
      <Nosotros>
        {/*  */}
      </Nosotros>
      <Contacto>
        {/*  */}
      </Contacto>
      <Footer>
        {/*  */}
      </Footer>

    </div>
  );
}

export default App;

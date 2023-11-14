import './App.css';
import ListCapsules from './components/listCapsules';
import Footer from './components/footer';
import Header from './components/header';
function App() {
  return (
    <>

      <Header />
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Featuring SpaceX</h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
            <p className="mt-8 md:mt-12">
              <button type="button"
                className="
                py-4 px-12
                bg-blue-500
                focus:border-blue-500
                rounded
                hover:bg-blue-600
                text-white"
              >Let's go</button>
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="py-4 rounded items-right">
              <img className="rounded" src="https://picsum.photos/536/354" alt="featured" />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <ListCapsules />
        </div>
        <hr className="my-4 border-t border-gray-300" />

        <Footer />

      </section>

    </>

  );
}

export default App;

import Crossicon from "./components/icons/Crossicon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div 
    className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen bg-gray-300">

      <header className="container mx-auto px-4 pt-8  ">

        <div className="flex justify-between">
            <h1 className="text-3xl font-bold tracking-[0.3em] upercase text-white">Todo</h1>
        <button>
         <MoonIcon className="fill-gray-400" />
        </button>
        </div>
      
        <form 
        className="bg-white rounded-md overflow-hidden py-4  flex gap-4 items-center px-4 mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input type="text"
           className="w-full text-gray-400 outline-none"
           placeholder="create a new todo" />
        </form>
      </header>


      <main className="container mx-auto px-4 mt-8">

        <div className="rounded-md  bg-white [&>article]:p-4">
          
        <article className="flex gap-4  border-b  border-b-gray-400">
          <button className="flew-none rounded-full border-2 w-5 h-5 inline-block"></button>
          <p className="text-gray-600 grow">complete online javascript curse in bluwweb</p>
          <button className="flex-none">
           <Crossicon />  
          </button>
        </article>
        <article className="flex gap-4  border-b  border-b-gray-400">
          <button className="flew-none rounded-full border-2 w-5 h-5 inline-block"></button>
          <p className="text-gray-600 grow">complete online javascript curse in bluwweb</p>
          <button className="flex-none">
           <Crossicon />  
          </button>
        </article>

        <section className="py-4 px-4 flex justify-between">
          <span className="text-gray-400">5 items left</span>
          <button className="text-gray-400">Clear completed</button>
        </section>
        </div>
        </main>
       
        <section className="container mx-auto px-4 mt-8 ">
          <div className="bg-white p-4 rounded-md flex justify-center gap-4 ">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
          </div>
       
        </section>
     
        <section className="mt-8">
        <p className="text-center"> Drag and drop to reorder list</p> 
        </section>
    </div>

  )


}
export default App;


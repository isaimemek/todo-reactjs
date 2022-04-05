import {
  Header,
  Body,
  Footer,
  SelectionProvider,
  TodosProvider,
} from "./components";

function App() {
  return (
    <div className="todoapp">
      <TodosProvider>
        <SelectionProvider>
          <Header />
          <Body />
          <Footer />
        </SelectionProvider>
      </TodosProvider>
    </div>
  );
}

export default App;

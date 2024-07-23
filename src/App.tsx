import FormGroup from './assets/components/FormGroup';
import data from './assets/inputs.json';
const inputs = data.inputs as InputGroup[];

function App() {
  return (
    <main className="p-4 flex flex-row justify-center items-center">
      <form className="basis-[768px]">
        {inputs.map((group) => {
          return <FormGroup key={group.id} input={group} />;
        })}
      </form>
    </main>
  );
}

export default App;

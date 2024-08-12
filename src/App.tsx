import Form from './assets/components/Form';
import RadioGroup from './assets/components/RadioGroup';
import Radio from './assets/components/Radio';
import WordInput from './assets/components/WordInput';
import { FormContextProvider } from './assets/contexts/FormContextProvider';

function App() {
  return (
    <main className="p-4 h-full flex flex-col justify-center items-center [&>*:not(:first-child)]:mt-4">
      <h1>Dictionary</h1>
      <FormContextProvider>
        <Form>
          <RadioGroup id="query" label="Type of Query">
            <Radio id="synonym" label="Synonym of:" />
            <Radio id="definition" label="Definition of:" />
            <Radio id="antonym" label="Antonym of:" />
          </RadioGroup>
          <WordInput />
        </Form>
      </FormContextProvider>
    </main>
  );
}

export default App;

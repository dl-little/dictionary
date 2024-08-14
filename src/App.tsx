import Form from './components/Form';
import Results from './components/Results';
import RadioGroup from './components/RadioGroup';
import Radio from './components/Radio';
import WordInput from './components/WordInput';
import { FormContextProvider } from './contexts/FormContextProvider';

function App() {
  return (
    <main className="p-4 lg:p-8 h-full flex flex-col justify-start items-start [&>*:not(:first-child)]:mt-4 gap-5">
      <h1>Dictionary</h1>
      <FormContextProvider>
        <section className="w-full flex justify-between gap-5 flex-wrap">
          <Form>
            <RadioGroup id="query" label="Type of Query">
              <Radio id="synonyms" label="Synonym of:" />
              <Radio id="definitions" label="Definition of:" />
              <Radio id="antonyms" label="Antonym of:" />
            </RadioGroup>
            <WordInput />
          </Form>
          <Results />
        </section>
      </FormContextProvider>
    </main>
  );
}

export default App;

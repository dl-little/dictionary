import { FormEventHandler } from 'react';
import Radio from './assets/components/radio';

function App() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
  };

  return (
    <main className="p-4 h-full flex flex-col justify-center items-center [&>*:not(:first-child)]:mt-4">
      <h1>Dictionary</h1>
      <form
        className="max-w-[768px] w-full [&>*:not(:first-child)]:mt-4"
        onSubmit={handleSubmit}
      >
        <Radio />
      </form>
    </main>
  );
}

export default App;

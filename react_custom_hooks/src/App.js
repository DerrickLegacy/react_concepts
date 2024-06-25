import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Buttons from './custom_hook_1/Buttons';
import Cat from './custom_hook_2/Cat';
import RandomColor from './custom_hook_3/RandomColor';
import LoadImages from './custom_hook_4/LoadImages';


function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        refetchInterval: false,
        onError: (error) => {
          console.error('An error occurred:', error);
        },

      }
    }
  })


  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"></link>

      <QueryClientProvider client={client}>
        <Buttons />
        <Cat />
        <RandomColor />
        <LoadImages />
      </QueryClientProvider>
    </div>
  );
}

export default App;

import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"

function App() {
  return (
    <div>      
    <ApolloProvider client={client}>
      <Event />
    </ApolloProvider>
    </div>
  )
}


export default App
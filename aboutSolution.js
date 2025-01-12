```javascript
// pages/aboutSolution.js
export default function About({ pageProps }) {
  // Check if pageProps exists and contains someData before accessing it.
  const someData = pageProps && pageProps.someData ? pageProps.someData : 'Default Value';
  console.log(someData);
  return (
    <div>
      <h1>About Page</h1>
      <p>Some data: {someData}</p>
    </div>
  );
}
export async function getServerSideProps() {
  // Fetch data from an API or a database, for example.
  const someData = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());
  return {
    props: {
      pageProps: { someData }
    }
  };
}
```
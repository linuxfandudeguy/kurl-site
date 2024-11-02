import './bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header text-center bg-primary text-white p-4">
        <h1>Kurl Documentation</h1>
        <p className="lead">
          Kurl is a command-line tool designed to make HTTP requests simple and efficient.
        </p>
      </header>
      <main className="container mt-4">
        <section>
          <h2>Getting Started</h2>
          <p>
            To install Kurl, run the following command:
          </p>
          <pre>
            <code>
           wget https://get-kurl.vercel.app/bin/kurl_1.0.deb
           sudo dpkg -i kurl_1.0.deb
           </code>
          </pre>
          <p>
            After installation, you can start using Kurl to make HTTP requests:
          </p>
          <pre>
            <code>kurl https://api.example.com/data</code>
          </pre>
        </section>
        
        <section className="mt-5">
          <h2>Features</h2>
          <ul className="list-group">
            <li className="list-group-item">Simple command-line syntax</li>
            <li className="list-group-item">Supports GET, POST, PUT, DELETE methods</li>
            <li className="list-group-item">Custom headers and options</li>
            <li className="list-group-item">Easy integration with scripts</li>
          </ul>
        </section>

        <section className="mt-5">
          <h2>Examples</h2>
          <p>Here are some examples of how to use Kurl:</p>
          <pre>
            <code>
              {`# Make a GET request\nkurl https://api.example.com/data\n\n# Make a POST request\nkurl -X POST -d '{"key":"value"}' https://api.example.com/submit`}
            </code>
          </pre>
        </section>

        <section className="mt-5">
          <h2>Contributing</h2>
          <p>
            We welcome contributions! Please check our <a href="https://github.com/linuxfandudeguy/kurl" target="_blank" rel="noopener noreferrer">GitHub repository</a> for more details.
          </p>
        </section>
      </main>

      <footer className="text-center bg-light mt-4 p-3">
        <p>© {new Date().getFullYear()} Kurl Documentation</p>
      </footer>
    </div>
  );
}

export default App;

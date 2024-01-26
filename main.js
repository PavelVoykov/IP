import Header from './header.js';
  function Hello() {
    return <a href="/register.html">Register</a>;
  }

  const container = document.getElementById('mydiv');
  const root = ReactDOM.createRoot(container);
  root.render(<Hello />);
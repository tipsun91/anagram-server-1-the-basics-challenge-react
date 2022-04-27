const React = require('react');

module.exports = function Home({ word }) {
  return (
    <main className="container">
      <h1>
        {word}
      </h1>
      <p>The anagrams of &quot;{word}&quot; are ...</p>
    </main>
  );
};

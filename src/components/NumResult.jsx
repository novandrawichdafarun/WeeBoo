export default function NumResult({ animes }) {
  const resultText = animes.length === 1 ? 'result' : 'results';

  return (
    <p className="search-results">
      Found <strong>{animes.length}</strong> {resultText}
    </p>
  );
}


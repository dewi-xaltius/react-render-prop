import  MouseTracker  from './MouseTracker';

function App() {
  return (
    <MouseTracker render={({ x, y }) => (
      <h1>The mouse position is ({x}, {y})</h1>
    )} />
  );
}

export default App;

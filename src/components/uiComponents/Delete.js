import React, { useState } from 'react';

export default function App() {
  const values = [
    { id: 1, text: 'LI-1' },
    { id: 2, text: 'LI-2' },
    { id: 3, text: 'LI-3' },
    { id: 4, text: 'LI-4' },
  ];
  const [activeId, setActiveId] = useState();

  return (
    <div className="App">
      <ul>
        {values.map((val) => (
          <li onClick={() => setActiveId(val.id)} aria-hidden>
            {val.text} -- {activeId === val.id ? 'Active' : 'Inactive'}
          </li>
        ))}
      </ul>
    </div>
  );
}

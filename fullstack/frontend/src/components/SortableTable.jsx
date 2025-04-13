import { useState } from 'react';

function SortableTable({ data, columns }) {
  const [sortKey, setSortKey] = useState('');
  const [asc, setAsc] = useState(true);
  const [query, setQuery] = useState('');

  const handleSort = (key) => {
    setAsc(prev => (key === sortKey ? !prev : true));
    setSortKey(key);
  };

  const filtered = data.filter(row =>
    Object.values(row).some(val =>
      String(val).toLowerCase().includes(query.toLowerCase())
    )
  );

  const sorted = [...filtered].sort((a, b) => {
    if (!sortKey) return 0;
    const aVal = String(a[sortKey]).toLowerCase();
    const bVal = String(b[sortKey]).toLowerCase();
    return asc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="p-2 border rounded mb-2 w-full"
      />
      <table className="w-full border table-auto">
        <thead className="bg-gray-200">
          <tr>
            {columns.map(col => (
              <th key={col.key} onClick={() => handleSort(col.key)} className="cursor-pointer">
                {col.label} {sortKey === col.key ? (asc ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, idx) => (
            <tr key={idx} className="text-center border-t">
              {columns.map(col => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SortableTable;

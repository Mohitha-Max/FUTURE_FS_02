function CategoryFilter({ selected, setSelected }) {
  const categories = [
    "All",
    "Electronics",
    "Wearables",
    "Indoor Plants",
  ];

  return (
    <div className="flex gap-3 mb-6">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => setSelected(c)}
          className={`px-4 py-1 rounded ${
            selected === c
              ? "bg-blue-600 text-white"
              : "bg-white border"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

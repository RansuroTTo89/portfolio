const SORT_OPTIONS = [
  { value: "", label: "По умолчанию" },
  { value: "title-asc", label: "По названию (А-Я)" },
  { value: "title-desc", label: "По названию (Я-А)" },
  { value: "price-asc", label: "По цене (сначала дешёвые)" },
  { value: "price-desc", label: "По цене (сначала дорогие)" },
  { value: "stock-asc", label: "По количеству (по возрастанию)" },
  { value: "stock-desc", label: "По количеству (по убыванию)" },
];

export default function SortControl({ value, onChange }) {
  return (
    <div className="sort-control">
      <label htmlFor="sort-select">Сортировка:</label>
      <select
        id="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

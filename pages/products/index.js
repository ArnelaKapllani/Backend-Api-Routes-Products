import useSWR from "swr";

export default function ProductsPage() {
  const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR("/api/products", fetcher);

  if (error) {
    return <div>Error loading products</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

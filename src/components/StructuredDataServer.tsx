export function StructuredDataServer({ data, id }: { data: any; id?: string }) {
  if (!data) return null;

  return (
    <script
      id={id ? `structured-data-${id}` : undefined}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
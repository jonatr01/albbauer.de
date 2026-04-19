export default function SectionCard({ title, body }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

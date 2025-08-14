export default function Empty({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-dashed p-8 text-center text-slate-500">
      {text}
    </div>
  );
}
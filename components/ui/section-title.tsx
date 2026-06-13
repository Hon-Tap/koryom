interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
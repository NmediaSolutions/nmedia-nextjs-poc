import Link from "next/link";

export default function CtaZone({
  title,
  text,
  btn1,
  btn2,
}: {
  title: string;
  text: string;
  btn1: { text: string; href: string };
  btn2?: { text: string; href: string };
}) {
  return (
    <section className="bg-beige">
      <div className="wrapper py-96 tablet:py-48 text-center max-w-reduced mx-auto">
        <h2>{title}</h2>
        <p className="text-18">{text}</p>
        <div className="flex items-center justify-center gap-16 flex-wrap mt-24">
          <Link href={btn1.href} className="btn-primary no-underline">
            {btn1.text}
          </Link>
          {btn2 && (
            <Link href={btn2.href} className="btn-outline no-underline">
              {btn2.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

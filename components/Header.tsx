import Image from 'next/image';

export default function Header() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <header className="border-b bg-white px-8 py-6 shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center gap-4">
        <Image
          src="/vernal-utah-temple.png"
          alt="Vernal Utah Temple"
          width={100}
          height={100}
        />

        <div>
          <h1 className="text-2xl font-bold">
            Roosevelt 10th Ward
          </h1>
          <p className="text-sm text-gray-600">
            Date: {currentDate}
          </p>
        </div>
      </div>
    </header>
  );
}
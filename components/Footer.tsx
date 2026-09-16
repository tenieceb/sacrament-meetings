export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-gray-800 py-6 text-white">
      <div className="mx-auto max-w-5xl px-8 text-center">
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()} | Teniece Busenbark | All rights reserved
        </p>
      </div>
    </footer>
  );
}
import Link from 'next/link';

export default function Header() {
  const currentDate = new Date().toLocaleDateString();
    return (
    <header>
      <h1>Roosevelt 10th Ward</h1>
      <p>Date: {currentDate}</p>
    </header>
  );
}
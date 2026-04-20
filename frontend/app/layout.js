import './globals.css';

export const metadata = {
  title: 'ALB.BIZ',
  description: 'ALB.BIZ delivery scaffold powered by Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

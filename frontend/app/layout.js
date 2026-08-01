import '../src/index.css';
import '../src/App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const metadata = {
  title: 'HandyReact',
  description: 'HandyReact portfolio built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

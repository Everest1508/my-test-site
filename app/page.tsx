import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBlock0 from '@/components/sections/SectionBlock0';
import SectionBlock1 from '@/components/sections/SectionBlock1';
import SectionBlock2 from '@/components/sections/SectionBlock2';
import SectionBlock3 from '@/components/sections/SectionBlock3';

export default function Home() {
  return (
    <>
      <Header />
        <SectionBlock0 />
        <SectionBlock1 />
        <SectionBlock2 />
        <SectionBlock3 />
      <Footer />
    </>
  );
}

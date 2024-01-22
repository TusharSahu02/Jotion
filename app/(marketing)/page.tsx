import Footer from "./_components/footer";
import Heading from "./_components/heading";

export default function MarketinPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
      </div>
      <Footer />
    </div>
  );
}

import Footer from "@/components/Shared/footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <div className="h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;

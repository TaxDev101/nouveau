import AppContent from "../AppContent.jsx";
import Footer from "../footer/Footer.jsx";
import Navbar from "../navbar/Navbar.jsx";
import Setting from "../setting/Setting.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";

function Layout() {
  return (
    <>
      <main className="main" id="top">
        <div className="container" data-layout="container">
          <Sidebar />
          <div className="content">
            <Navbar />
            <AppContent />
            <Footer />
          </div>
        </div>
      </main>
      <Setting />
    </>
  );
}

export default Layout;

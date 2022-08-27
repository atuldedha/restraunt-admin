import { Router } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    if (router.pathname === "/restaurantform") {
      setShowSidebar(false);
    }
  }, [router.pathname]);
  return (
    <div className="relative flex">
      {showSidebar && (
        <div className="absolute left-0 z-10">
          <Sidebar />
        </div>
      )}

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

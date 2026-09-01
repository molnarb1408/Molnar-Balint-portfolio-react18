import "./Top.scss";
import { useEffect } from "react";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    function scrollFunction() {
      const button = document.getElementById("topButton");
      if (!button) return;
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.visibility = "visible";
      } else {
        button.style.visibility = "hidden";
      }
    }

    scrollFunction(); // kezdeti állapot
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
}
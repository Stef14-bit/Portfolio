import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import winLoading from "../../assets/winLoading.gif";

const LoadingScreen = () => {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {showLoading ? (
        <div className={styles.loader}>
          <img
            src={winLoading}
            width="100%"
            height="100%"
            alt="loading screen"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default LoadingScreen;

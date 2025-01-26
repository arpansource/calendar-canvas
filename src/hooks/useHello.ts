import React from "react";
const useHello = () => {
  React.useEffect(() => {
    console.log("hi & hello updated");
  }, []);
};
export default useHello;

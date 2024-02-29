import { useEffect, useState } from "react";

export const useClient = () => {
  const [isClient, setIsclient] = useState(false);

  useEffect(() => {
    setIsclient(true);
  }, []);

  return isClient;
};

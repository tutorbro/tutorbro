import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function _error({ statusCode }) {
  const { asPath } = useRouter();
  useEffect(() => {
    if (asPath.includes("/careers")) {
      window.location.href = "/careers";
    } else {
      window.location.href = "/";
    }
  }, []);

  return <p>redirecting...</p>;
}

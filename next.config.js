const { ANALYZE } = process.env;
module.exports = {
  generateBuildId: () => "tutorbro",
  output: "export",
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
  webpack: (config, { dev }) => {
    config.resolve.fallback = { tls: false, fs: false };
    /* Enable only in Production */
    if (!dev) {
      // Analyzer
      if (ANALYZE) {
      }
    }

    return config;
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/careers": { page: "/careers" },
      "/chat": { page: "/chat" },
      "/payments": { page: "/payments" },
      "/payment": { page: "/payment" },
      "/payments/payment-success": { page: "/payments/payment-success" },
    };
  },
};

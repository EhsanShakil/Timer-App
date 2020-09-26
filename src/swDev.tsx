const swDev = () => {
  const url = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(url)
      .then(() => console.log("Service Worker Registered Successfully"))
      .catch(() => console.log("Service Worker Not Registered"));
  }
};

export default swDev;

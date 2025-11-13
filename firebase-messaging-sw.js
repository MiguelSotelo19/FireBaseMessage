// Importamos las versiones compat de Firebase para SW
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyBo0rHu-ppC7k3P2UBi2nwYUruvK84yLIo",
  authDomain: "pwa-sotelo.firebaseapp.com",
  projectId: "pwa-sotelo",
  storageBucket: "pwa-sotelo.firebasestorage.app",
  messagingSenderId: "65727558551",
  appId: "1:65727558551:web:5542ffe93bbe9e7e568ad2"
});

const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
    icon: "/icon-192.png"
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
import('./bootstrap').then(({ mount }) => {
  const localRoot = document.getElementById('login-app');
  mount({
    mountPoint: localRoot!,
    routingStrategy: 'browser',
  });
});

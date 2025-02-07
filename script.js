const music = MusicKit.configure({
  developerToken: 'MY_DEVELOPER_TOKEN', // replace
  app: {
    name: 'AppleMusicKitExample',
    build: '1978.4.1'
  }
})

document.getElementById('auth').addEventListener('click', () => {
  music.authorize().then(musicUserToken => {
    console.log(`Authorized, music user token: ${musicUserToken}`);
    navigator.clipboard.writeText(musicUserToken).then(() => {
      console.log('Music user token copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy music user token to clipboard:', err);
    });
  }).catch(error => {
    console.error('Authorization failed:', error);
  });
})

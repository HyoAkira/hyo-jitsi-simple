function createRoom(){
 const frame = document.querySelector("#jitsi-container");
 frame.style.display="block";
 const roomName = prompt("Oda adı ney?");
  const domain = 'meet.tedomum.net';
  const options = {
      width: 700,
      height: 700,
    roomName: roomName,
    parentNode: document.querySelector('#jitsi-container'),
    interfaceConfigOverwrite: {
      filmStripOnly: true, // Yalnızca film şeridini gösterir
      SHOW_JITSI_WATERMARK: false, // Jitsi logosunu kaldırır
      SHOW_WATERMARK_FOR_GUESTS: false, // Misafirler için su damlası logosunu kaldırır
      TOOLBAR_ALWAYS_VISIBLE: false, // Araç çubuğunu gizler
      DEFAULT_REMOTE_DISPLAY_NAME: 'Katılımcı' // Uzaktaki katılımcıların adını özelleştirir
    },
    configOverwrite: {
      disableDeepLinking: true,
      disableInviteFunctions: true,
      disablePrejoinPage: true,
      toolbarButtons: [
        'microphone',
        'camera',
        'closedcaptions',
        'desktop',
        'fullscreen',
        'hangup',
        'profile',
        'settings',
        'raisehand',
        'videoquality',
        'filmstrip',
        'feedback',
        'stats',
        'shortcuts',
        'tileview',
        'videobackgroundblur',
        'download',
        'help',
        'mute-everyone',
        'security'
      ],
      settingsMenu: [
        'devices',
        'language',
        'moderator',
        'profile',
        'feedback',
        'videoquality',
        'filmstrip',
        'tileview',
        'download',
        'help',
        'mute-everyone',
        'security'
      ],
      SHOW_BRAND_WATERMARK: false,
      SHOW_WATERMARK_FOR_GUESTS: false
    }
  };

  const api = new JitsiMeetExternalAPI(domain, options);
  api.addEventListener('videoConferenceLeft', () => {
   frame.style.display="none";
  });
}
   

  
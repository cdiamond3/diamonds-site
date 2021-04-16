var embed = new Twitch.Embed('twitch-embed', {
    channel: 'd1am0nds'
  });
  
  embed.addEventListener(Twitch.Embed.VIDEO_READY, function() {
    console.log('The video is ready');
  });

  
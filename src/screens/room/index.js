import React from 'react';
import YouTube from 'react-native-youtube';

export default function ({ route, navigation }) {
  const { idVideo } = route.params;
  return (
    <YouTube
      apiKey="AIzaSyDUIRO7Y2bHbtDaALwIX-Xe58FhlHsDPDA"
      videoId={idVideo} // The YouTube video ID
      play // control playback of video with true/false
      fullscreen // control whether the video should play in fullscreen or inline
      loop // control whether the video should loop when ended
      style={{ alignSelf: 'stretch', flex: 1 }}
    />
  );
}

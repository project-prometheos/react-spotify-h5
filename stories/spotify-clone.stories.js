import React from "react";
import SpotifyClone from "./spotify-clone.tsx";

export default {
  title: "Spotify Clone",
  component: SpotifyClone,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  render: () => <SpotifyClone />,
  name: "Spotify Web Player",
};

import React, { Component } from 'react'
import AudioPlayer from '../src/index'
import './spotify-clone.scss'

interface Track {
  id: string
  name: string
  artist: string
  duration: string
  src: string
  image?: string
}

interface Playlist {
  id: string
  name: string
  description: string
  tracks: Track[]
  image?: string
}

interface SpotifyCloneState {
  currentTrackIndex: number
  currentPlaylist: Playlist
  isPlaying: boolean
  volume: number
}

const sampleTracks: Track[] = [
  {
    id: '1',
    name: 'Blinding Lights',
    artist: 'The Weeknd',
    duration: '3:20',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: '2',
    name: 'Save Your Tears',
    artist: 'The Weeknd',
    duration: '3:35',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: '3',
    name: 'Levitating',
    artist: 'Dua Lipa',
    duration: '3:23',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
]

const playlists: Playlist[] = [
  {
    id: 'top-hits',
    name: "Today's Top Hits",
    description: 'The most played songs on Spotify right now',
    tracks: sampleTracks,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMGJhbmQlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTk1MTQ1MjV8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'rapcaviar',
    name: 'RapCaviar',
    description: 'New music and big tracks from hip hop',
    tracks: sampleTracks,
    image: 'https://images.unsplash.com/photo-1631061434620-db65394197e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbGl2ZSUyMG11c2ljJTIwc3RhZ2V8ZW58MXx8fHwxNzU5NTE0NTI5fDA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'chill-hits',
    name: 'Chill Hits',
    description: 'Chill tracks for the perfect vibe',
    tracks: sampleTracks,
    image: 'https://images.unsplash.com/photo-1652626627248-2f659cdbd6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5bGlzdCUyMGNvdmVyJTIwbXVzaWMlMjBtb29kfGVufDF8fHx8MTc1OTUxNDUzMnww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'pop-rising',
    name: 'Pop Rising',
    description: 'The biggest songs in pop are right here',
    tracks: sampleTracks,
    image: 'https://images.unsplash.com/photo-1629923759854-156b88c433aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyJTIwbXVzaWMlMjB2aW55bHxlbnwxfHx8fDE3NTk1MDk1NTZ8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'rock-classics',
    name: 'Rock Classics',
    description: 'Rock legends & epic guitar solos',
    tracks: sampleTracks,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMGJhbmQlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTk1MTQ1MjV8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'indie-mix',
    name: 'Indie Mix',
    description: 'The best indie tracks, updated weekly',
    tracks: sampleTracks,
    image: 'https://images.unsplash.com/photo-1631061434620-db65394197e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbGl2ZSUyMG11c2ljJTIwc3RhZ2V8ZW58MXx8fHwxNzU5NTE0NTI5fDA&ixlib=rb-4.1.0&q=80&w=400',
  },
]

const quickPlayPlaylists = [
  { name: "Today's Top Hits", image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMGJhbmQlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTk1MTQ1MjV8MA&ixlib=rb-4.1.0&q=80&w=400' },
  { name: 'RapCaviar', image: 'https://images.unsplash.com/photo-1631061434620-db65394197e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbGl2ZSUyMG11c2ljJTIwc3RhZ2V8ZW58MXx8fHwxNzU5NTE0NTI5fDA&ixlib=rb-4.1.0&q=80&w=400' },
  { name: 'Chill Hits', image: 'https://images.unsplash.com/photo-1652626627248-2f659cdbd6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5bGlzdCUyMGNvdmVyJTIwbXVzaWMlMjBtb29kfGVufDF8fHx8MTc1OTUxNDUzMnww&ixlib=rb-4.1.0&q=80&w=400' },
  { name: 'Pop Rising', image: 'https://images.unsplash.com/photo-1629923759854-156b88c433aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyJTIwbXVzaWMlMjB2aW55bHxlbnwxfHx8fDE3NTk1MDk1NTZ8MA&ixlib=rb-4.1.0&q=80&w=400' },
  { name: 'Rock Classics', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMGJhbmQlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTk1MTQ1MjV8MA&ixlib=rb-4.1.0&q=80&w=400' },
  { name: 'Indie Mix', image: 'https://images.unsplash.com/photo-1631061434620-db65394197e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbGl2ZSUyMG11c2ljJTIwc3RhZ2V8ZW58MXx8fHwxNzU5NTE0NTI5fDA&ixlib=rb-4.1.0&q=80&w=400' },
]

const sidebarPlaylists = [
  { name: 'Liked Songs', count: 234, icon: 'heart' },
  { name: 'My Playlist #1', count: 45 },
  { name: 'Chill Vibes', count: 67 },
  { name: 'Workout Mix', count: 32 },
  { name: 'Road Trip', count: 89 },
  { name: 'Focus Music', count: 23 },
  { name: 'Party Hits', count: 156 },
  { name: 'Acoustic Sessions', count: 41 },
]

class SpotifyClone extends Component<{}, SpotifyCloneState> {
  audioRef = React.createRef<HTMLAudioElement>()

  state: SpotifyCloneState = {
    currentTrackIndex: 0,
    currentPlaylist: playlists[0],
    isPlaying: false,
    volume: 0.8,
  }

  handleClickPrevious = (): void => {
    this.setState((prevState) => ({
      currentTrackIndex:
        prevState.currentTrackIndex === 0
          ? prevState.currentPlaylist.tracks.length - 1
          : prevState.currentTrackIndex - 1,
    }))
  }

  handleClickNext = (): void => {
    this.setState((prevState) => ({
      currentTrackIndex:
        prevState.currentTrackIndex < prevState.currentPlaylist.tracks.length - 1
          ? prevState.currentTrackIndex + 1
          : 0,
    }))
  }

  handlePlayPlaylist = (playlistIndex: number): void => {
    this.setState({
      currentPlaylist: playlists[playlistIndex],
      currentTrackIndex: 0,
    })
  }

  render(): React.ReactNode {
    const { currentTrackIndex, currentPlaylist } = this.state
    const currentTrack = currentPlaylist.tracks[currentTrackIndex]

    return (
      <div className="spotify-web-player">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="spotify-logo">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0C6.72042 0 0 6.72043 0 15C0 23.2975 6.72042 30 15 30C23.2975 30 30 23.2796 30 15C30.0179 6.72043 23.2975 0 15 0ZM21.8817 21.6487C21.6129 22.0968 21.0394 22.2222 20.5914 21.9534C17.0609 19.8029 12.6344 19.319 7.40142 20.5018C6.89963 20.6093 6.39784 20.3047 6.29031 19.8029C6.18279 19.3011 6.48745 18.7993 6.98924 18.6918C12.7061 17.3835 17.6165 17.9391 21.5591 20.3584C22.0251 20.6272 22.1684 21.2007 21.8817 21.6487ZM23.7276 17.5627C23.3871 18.1183 22.6702 18.2796 22.1147 17.957C18.0824 15.466 11.9355 14.7491 7.16845 16.2007C6.54121 16.3799 5.89605 16.0394 5.71684 15.4301C5.53763 14.8029 5.87813 14.1577 6.50537 13.9785C11.9534 12.3298 18.7276 13.1183 23.3691 15.9677C23.8889 16.2903 24.0681 17.0072 23.7276 17.5627ZM23.8889 13.2975C19.0502 10.4301 11.0753 10.1613 6.45161 11.5591C5.71684 11.7921 4.92831 11.362 4.69534 10.6272C4.46236 9.89247 4.89247 9.10394 5.62723 8.87097C10.9319 7.25807 19.7491 7.58065 25.3046 10.8781C25.9677 11.2724 26.1828 12.1326 25.7885 12.7957C25.4122 13.4767 24.5519 13.6918 23.8889 13.2975Z" fill="#1ED760"/>
              </svg>
              <span className="spotify-text">Spotify</span>
            </div>

            <nav className="sidebar-nav">
              <button className="nav-button active">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.25 13V8.33333C9.25 8.17862 9.18854 8.03025 9.07915 7.92085C8.96975 7.81146 8.82138 7.75 8.66667 7.75H6.33333C6.17862 7.75 6.03025 7.81146 5.92085 7.92085C5.81146 8.03025 5.75 8.17862 5.75 8.33333V13" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.25 6.58334C2.24996 6.41363 2.28694 6.24595 2.35838 6.092C2.42981 5.93806 2.53397 5.80155 2.66358 5.692L6.74692 2.192C6.95749 2.01403 7.22429 1.91639 7.5 1.91639C7.77571 1.91639 8.04251 2.01403 8.25308 2.192L12.3364 5.692C12.466 5.80155 12.5702 5.93806 12.6416 6.092C12.7131 6.24595 12.75 6.41363 12.75 6.58334V11.8333C12.75 12.1428 12.6271 12.4395 12.4083 12.6583C12.1895 12.8771 11.8928 13 11.5833 13H3.41667C3.10725 13 2.8105 12.8771 2.59171 12.6583C2.37292 12.4395 2.25 12.1428 2.25 11.8333V6.58334Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Home
              </button>
              <button className="nav-button">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.75 12.5L10.2183 9.96834" stroke="#D1D5DC" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.91667 11.3333C9.494 11.3333 11.5833 9.244 11.5833 6.66667C11.5833 4.08934 9.494 2 6.91667 2C4.33934 2 2.25 4.08934 2.25 6.66667C2.25 9.244 4.33934 11.3333 6.91667 11.3333Z" stroke="#D1D5DC" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Search
              </button>
            </nav>
          </div>

          <div className="sidebar-divider"></div>

          <div className="sidebar-library">
            <div className="library-header">
              <button className="library-button">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.83333 4.25L12.1667 12.4167" stroke="#D1D5DC" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 4.25V12.4167" stroke="#D1D5DC" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.16667 5.41667V12.4167" stroke="#D1D5DC" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.83333 3.08333V12.4167" stroke="#D1D5DC" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Your Library
              </button>
              <button className="add-button">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.16667 7.75H11.3333" stroke="#D1D5DC" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.25 3.66667V11.8333" stroke="#D1D5DC" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="sidebar-playlists">
              {sidebarPlaylists.map((playlist, index) => (
                <button
                  key={index}
                  className="playlist-item"
                  onClick={() => index === 0 && this.handlePlayPlaylist(0)}
                >
                  <div className={`playlist-icon ${playlist.icon === 'heart' ? 'heart-icon' : ''}`}>
                    {playlist.icon === 'heart' ? (
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66667 5.79167C1.66668 5.14254 1.8636 4.50868 2.23141 3.97381C2.59923 3.43894 3.12064 3.02822 3.72677 2.7959C4.33291 2.56358 4.99526 2.5206 5.62634 2.67261C6.25742 2.82463 6.82755 3.1645 7.26142 3.64734C7.29198 3.68001 7.32892 3.70606 7.36996 3.72387C7.411 3.74168 7.45526 3.75087 7.5 3.75087C7.54474 3.75087 7.589 3.74168 7.63004 3.72387C7.67108 3.70606 7.70803 3.68001 7.73858 3.64734C8.17109 3.16136 8.74135 2.81863 9.37345 2.66477C10.0056 2.51091 10.6695 2.55321 11.277 2.78604C11.8845 3.01887 12.4066 3.43118 12.774 3.96811C13.1413 4.50504 13.3364 5.14111 13.3333 5.79167C13.3333 7.1275 12.4583 8.125 11.5833 9L8.37967 12.0993C8.27097 12.2241 8.13696 12.3244 7.98653 12.3934C7.8361 12.4625 7.67269 12.4987 7.50717 12.4998C7.34165 12.5008 7.1778 12.4667 7.0265 12.3995C6.87521 12.3324 6.73993 12.2338 6.62967 12.1103L3.41667 9C2.54167 8.125 1.66667 7.13334 1.66667 5.79167Z" fill="white" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 10.75V3.16667L12.75 2V9.58333" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 12.5C4.9665 12.5 5.75 11.7165 5.75 10.75C5.75 9.7835 4.9665 9 4 9C3.0335 9 2.25 9.7835 2.25 10.75C2.25 11.7165 3.0335 12.5 4 12.5Z" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11 11.3333C11.9665 11.3333 12.75 10.5498 12.75 9.58331C12.75 8.61681 11.9665 7.83331 11 7.83331C10.0335 7.83331 9.25 8.61681 9.25 9.58331C9.25 10.5498 10.0335 11.3333 11 11.3333Z" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <div className="playlist-info">
                    <div className="playlist-name">{playlist.name}</div>
                    <div className="playlist-count">{playlist.count} songs</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Top Bar */}
          <div className="top-bar">
            <div className="nav-controls">
              <button className="nav-arrow disabled">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.75 10.5L5.25 7L8.75 3.5" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="nav-arrow disabled">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <h1 className="page-title">Good afternoon</h1>
            </div>
            <div className="user-controls">
              <button className="install-button">
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.1333 1.75H12.6333V5.25" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.21667 8.16667L12.6333 1.75" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.8833 7.58333V11.0833C10.8833 11.3928 10.7604 11.6895 10.5416 11.9083C10.3228 12.1271 10.0261 12.25 9.71663 12.25H3.29997C2.99055 12.25 2.6938 12.1271 2.47501 11.9083C2.25622 11.6895 2.1333 11.3928 2.1333 11.0833V4.66667C2.1333 4.35725 2.25622 4.0605 2.47501 3.84171C2.6938 3.62292 2.99055 3.5 3.29997 3.5H6.79997" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Install App
              </button>
              <button className="notification-button">
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.73962 12.25C6.84202 12.4273 6.9893 12.5746 7.16665 12.677C7.344 12.7794 7.54517 12.8333 7.74996 12.8333C7.95474 12.8333 8.15592 12.7794 8.33327 12.677C8.51061 12.5746 8.65789 12.4273 8.76029 12.25" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.6529 8.94017C2.57669 9.02369 2.5264 9.12756 2.50814 9.23914C2.48989 9.35071 2.50445 9.46519 2.55006 9.56865C2.59567 9.6721 2.67036 9.76007 2.76504 9.82186C2.85973 9.88365 2.97033 9.91658 3.0834 9.91667H12.4167C12.5298 9.91671 12.6404 9.8839 12.7352 9.82223C12.8299 9.76056 12.9047 9.67269 12.9504 9.5693C12.9961 9.46591 13.0108 9.35146 12.9927 9.23988C12.9746 9.12829 12.9245 9.02436 12.8484 8.94075C12.0726 8.141 11.2501 7.29108 11.2501 4.66667C11.2501 3.73841 10.8813 2.84817 10.2249 2.19179C9.56856 1.53541 8.67832 1.16667 7.75006 1.16667C6.8218 1.16667 5.93157 1.53541 5.27519 2.19179C4.61881 2.84817 4.25006 3.73841 4.25006 4.66667C4.25006 7.29108 3.42698 8.141 2.6529 8.94017Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="user-button">
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8333 12.25V11.0833C11.8333 10.4645 11.5875 9.871 11.1499 9.43342C10.7123 8.99583 10.1188 8.75 9.49996 8.75H5.99996C5.38112 8.75 4.78763 8.99583 4.35004 9.43342C3.91246 9.871 3.66663 10.4645 3.66663 11.0833V12.25" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.74996 6.41667C9.03862 6.41667 10.0833 5.372 10.0833 4.08333C10.0833 2.79467 9.03862 1.75 7.74996 1.75C6.46129 1.75 5.41663 2.79467 5.41663 4.08333C5.41663 5.372 6.46129 6.41667 7.74996 6.41667Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Page Content */}
          <div className="page-content">
            {/* Quick Play Section */}
            <section className="section quick-play-section">
              <h2 className="section-title">Good afternoon</h2>
              <div className="quick-play-grid">
                {quickPlayPlaylists.map((playlist, index) => (
                  <button
                    key={index}
                    className="quick-play-card"
                    onClick={() => this.handlePlayPlaylist(index)}
                  >
                    <div className="quick-play-image" style={{ backgroundImage: `url(${playlist.image})` }}></div>
                    <h3 className="quick-play-title">{playlist.name}</h3>
                    <button className="play-button-green">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.15833 3.16665C3.15826 2.96137 3.21237 2.75971 3.31517 2.58202C3.41798 2.40434 3.56585 2.25693 3.74385 2.15468C3.92185 2.05242 4.12367 1.99894 4.32895 1.99964C4.53423 2.00034 4.73569 2.05519 4.91299 2.15865L11.9112 6.24081C12.0879 6.34329 12.2345 6.49033 12.3365 6.66723C12.4384 6.84413 12.4922 7.0447 12.4924 7.24889C12.4926 7.45308 12.4391 7.65375 12.3375 7.83082C12.2358 8.0079 12.0894 8.15519 11.913 8.25798L4.91299 12.3413C4.73569 12.4448 4.53423 12.4996 4.32895 12.5003C4.12367 12.501 3.92185 12.4475 3.74385 12.3453C3.56585 12.243 3.41798 12.0956 3.31517 11.9179C3.21237 11.7403 3.15826 11.5386 3.15833 11.3333V3.16665Z" stroke="black" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </button>
                ))}
              </div>
            </section>

            {/* Made for You Section */}
            <section className="section playlists-section">
              <div className="section-header">
                <h2 className="section-title">Made for You</h2>
                <button className="show-all-button">Show all</button>
              </div>
              <div className="playlists-grid">
                {playlists.map((playlist, index) => (
                  <div key={playlist.id} className="playlist-card">
                    <div className="playlist-card-image-wrapper">
                      <div className="playlist-card-image" style={{ backgroundImage: `url(${playlist.image})` }}></div>
                      <button
                        className="play-button-overlay"
                        onClick={() => this.handlePlayPlaylist(index)}
                      >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.15833 3.16665C3.15826 2.96137 3.21237 2.75971 3.31517 2.58202C3.41798 2.40434 3.56585 2.25693 3.74385 2.15468C3.92185 2.05242 4.12367 1.99894 4.32895 1.99964C4.53423 2.00034 4.73569 2.05519 4.91299 2.15865L11.9112 6.24081C12.0879 6.34329 12.2345 6.49033 12.3365 6.66723C12.4384 6.84413 12.4922 7.0447 12.4924 7.24889C12.4926 7.45308 12.4391 7.65375 12.3375 7.83082C12.2358 8.0079 12.0894 8.15519 11.913 8.25798L4.91299 12.3413C4.73569 12.4448 4.53423 12.4996 4.32895 12.5003C4.12367 12.501 3.92185 12.4475 3.74385 12.3453C3.56585 12.243 3.41798 12.0956 3.31517 11.9179C3.21237 11.7403 3.15826 11.5386 3.15833 11.3333V3.16665Z" stroke="black" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <div className="playlist-card-info">
                      <h3 className="playlist-card-title">{playlist.name}</h3>
                      <p className="playlist-card-description">{playlist.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recently Played Section */}
            <section className="section playlists-section">
              <div className="section-header">
                <h2 className="section-title">Recently played</h2>
                <button className="show-all-button">Show all</button>
              </div>
              <div className="playlists-grid">
                {playlists.slice(0, 4).map((playlist, index) => (
                  <div key={playlist.id} className="playlist-card">
                    <div className="playlist-card-image-wrapper">
                      <div className="playlist-card-image" style={{ backgroundImage: `url(${playlist.image})` }}></div>
                      <button
                        className="play-button-overlay"
                        onClick={() => this.handlePlayPlaylist(index)}
                      >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.15833 3.16665C3.15826 2.96137 3.21237 2.75971 3.31517 2.58202C3.41798 2.40434 3.56585 2.25693 3.74385 2.15468C3.92185 2.05242 4.12367 1.99894 4.32895 1.99964C4.53423 2.00034 4.73569 2.05519 4.91299 2.15865L11.9112 6.24081C12.0879 6.34329 12.2345 6.49033 12.3365 6.66723C12.4384 6.84413 12.4922 7.0447 12.4924 7.24889C12.4926 7.45308 12.4391 7.65375 12.3375 7.83082C12.2358 8.0079 12.0894 8.15519 11.913 8.25798L4.91299 12.3413C4.73569 12.4448 4.53423 12.4996 4.32895 12.5003C4.12367 12.501 3.92185 12.4475 3.74385 12.3453C3.56585 12.243 3.41798 12.0956 3.31517 11.9179C3.21237 11.7403 3.15826 11.5386 3.15833 11.3333V3.16665Z" stroke="black" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <div className="playlist-card-info">
                      <h3 className="playlist-card-title">{playlist.name}</h3>
                      <p className="playlist-card-description">{playlist.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Music Player */}
          <div className="music-player-wrapper">
            <div className="music-player">
              <div className="player-track-info">
                <div className="track-image" style={{ backgroundImage: `url(${currentPlaylist.image})` }}></div>
                <div className="track-details">
                  <h4 className="track-name">{currentTrack.name}</h4>
                  <p className="track-artist">{currentTrack.artist}</p>
                </div>
                <button className="like-button active">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.91666 6.29173C1.91667 5.6426 2.11359 5.00874 2.4814 4.47387C2.84922 3.939 3.37062 3.52828 3.97676 3.29596C4.5829 3.06365 5.24525 3.02066 5.87633 3.17267C6.50741 3.32469 7.07754 3.66456 7.51141 4.1474C7.54197 4.18007 7.57891 4.20612 7.61995 4.22393C7.66099 4.24174 7.70525 4.25093 7.74999 4.25093C7.79473 4.25093 7.83899 4.24174 7.88003 4.22393C7.92107 4.20612 7.95801 4.18007 7.98857 4.1474C8.42108 3.66142 8.99134 3.3187 9.62344 3.16483C10.2555 3.01097 10.9195 3.05327 11.527 3.2861C12.1345 3.51893 12.6566 3.93124 13.024 4.46817C13.3913 5.0051 13.5864 5.64117 13.5833 6.29173C13.5833 7.62756 12.7083 8.62506 11.8333 9.50006L8.62966 12.5993C8.52096 12.7242 8.38695 12.8244 8.23652 12.8935C8.08609 12.9626 7.92268 12.9988 7.75716 12.9999C7.59164 13.0009 7.42778 12.9667 7.27649 12.8996C7.1252 12.8324 6.98992 12.7338 6.87966 12.6104L3.66666 9.50006C2.79166 8.62506 1.91666 7.6334 1.91666 6.29173Z" fill="#00C950" stroke="#00C950" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="pip-button">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 6.00004V4.25004C12.5 3.94062 12.3771 3.64388 12.1583 3.42508C11.9395 3.20629 11.6427 3.08337 11.3333 3.08337H2.58332C2.2739 3.08337 1.97716 3.20629 1.75837 3.42508C1.53957 3.64388 1.41666 3.94062 1.41666 4.25004V10.0834C1.41666 10.725 1.94166 11.25 2.58332 11.25H4.91666" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.9167 8.33337H8.41667C7.77233 8.33337 7.25 8.85571 7.25 9.50004V11.25C7.25 11.8944 7.77233 12.4167 8.41667 12.4167H11.9167C12.561 12.4167 13.0833 11.8944 13.0833 11.25V9.50004C13.0833 8.85571 12.561 8.33337 11.9167 8.33337Z" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="player-controls">
                <div className="control-buttons">
                  <button className="control-button shuffle">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.125 8.41663L13.4583 10.75L11.125 13.0833" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.125 1.41663L13.4583 3.74996L11.125 6.08329" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1.79169 10.7499H2.9426C3.31972 10.7525 3.69185 10.6636 4.02711 10.4909C4.36236 10.3182 4.65076 10.0668 4.8676 9.75827L8.0491 4.7416C8.26594 4.43304 8.55434 4.18165 8.8896 4.00894C9.22486 3.83623 9.59698 3.74736 9.9741 3.74993H13.4584" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1.79169 3.74993H2.94202C3.37687 3.74691 3.80392 3.86546 4.17498 4.09222C4.54603 4.31898 4.84634 4.64492 5.04202 5.03327" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.4583 10.75H9.9344C9.55207 10.7461 9.17655 10.6483 8.84088 10.4652C8.50521 10.2821 8.21968 10.0193 8.0094 9.7L7.79999 9.4375" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="control-button prev" onClick={this.handleClickPrevious}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.6081 2.74964C10.7852 2.64341 10.9872 2.58607 11.1937 2.58347C11.4001 2.58086 11.6035 2.63309 11.7832 2.73481C11.9628 2.83653 12.1123 2.98411 12.2163 3.16247C12.3203 3.34083 12.375 3.54359 12.375 3.75005V10.7501C12.375 10.9565 12.3203 11.1593 12.2163 11.3376C12.1123 11.516 11.9628 11.6636 11.7832 11.7653C11.6035 11.867 11.4001 11.9192 11.1937 11.9166C10.9872 11.914 10.7852 11.8567 10.6081 11.7505L4.77654 8.25163C4.60342 8.1482 4.46007 8.00166 4.36047 7.82631C4.26087 7.65096 4.20843 7.45279 4.20825 7.25113C4.20808 7.04947 4.26018 6.85121 4.35947 6.67568C4.45876 6.50016 4.60185 6.35337 4.77479 6.24964L10.6081 2.74964Z" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1.875 11.9167V2.58337" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="control-button play-pause">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.15833 3.16665C3.15826 2.96137 3.21237 2.75971 3.31517 2.58202C3.41798 2.40434 3.56585 2.25693 3.74385 2.15468C3.92185 2.05242 4.12367 1.99894 4.32895 1.99964C4.53423 2.00034 4.73569 2.05519 4.91299 2.15865L11.9112 6.24081C12.0879 6.34329 12.2345 6.49033 12.3365 6.66723C12.4384 6.84413 12.4922 7.0447 12.4924 7.24889C12.4926 7.45308 12.4391 7.65375 12.3375 7.83082C12.2358 8.0079 12.0894 8.15519 11.913 8.25798L4.91299 12.3413C4.73569 12.4448 4.53423 12.4996 4.32895 12.5003C4.12367 12.501 3.92185 12.4475 3.74385 12.3453C3.56585 12.243 3.41798 12.0956 3.31517 11.9179C3.21237 11.7403 3.15826 11.5386 3.15833 11.3333V3.16665Z" stroke="black" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="control-button next" onClick={this.handleClickNext}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.875 2.58337V11.9167" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.14192 2.74964C3.96488 2.64341 3.76283 2.58607 3.55639 2.58347C3.34994 2.58086 3.14651 2.63309 2.96685 2.73481C2.78719 2.83653 2.63774 2.98411 2.53376 3.16247C2.42978 3.34083 2.375 3.54359 2.375 3.75005V10.7501C2.375 10.9565 2.42978 11.1593 2.53376 11.3376C2.63774 11.516 2.78719 11.6636 2.96685 11.7653C3.14651 11.867 3.34994 11.9192 3.55639 11.9166C3.76283 11.914 3.96488 11.8567 4.14192 11.7505L9.9735 8.25163C10.1466 8.1482 10.29 8.00166 10.3896 7.82631C10.4892 7.65096 10.5416 7.45279 10.5418 7.25113C10.542 7.04947 10.4899 6.85121 10.3906 6.67568C10.2913 6.50016 10.1482 6.35337 9.97525 6.24964L4.14192 2.74964Z" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="control-button repeat">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.0417 1.41663L12.375 3.74996L10.0417 6.08329" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1.875 6.66667V6.08333C1.875 5.46449 2.12083 4.871 2.55842 4.43342C2.996 3.99583 3.58949 3.75 4.20833 3.75H12.375" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.20833 13.0833L1.875 10.75L4.20833 8.41663" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.375 7.83337V8.41671C12.375 9.03555 12.1292 9.62904 11.6916 10.0666C11.254 10.5042 10.6605 10.75 10.0417 10.75H1.875" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div className="progress-bar-container">
                  <span className="time-display">0:00</span>
                  <div className="progress-bar">
                    <div className="progress-filled"></div>
                    <div className="progress-handle"></div>
                  </div>
                  <span className="time-display">3:20</span>
                </div>
              </div>

              <div className="player-volume">
                <button className="volume-button">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.41663 3.49281C6.41651 3.41156 6.39233 3.33216 6.34713 3.26464C6.30193 3.19712 6.23775 3.1445 6.16267 3.11342C6.0876 3.08235 6.005 3.0742 5.92531 3.09002C5.84561 3.10584 5.77239 3.14491 5.71488 3.20231L3.74088 5.17573C3.66469 5.25236 3.57406 5.31312 3.47423 5.35447C3.3744 5.39583 3.26735 5.41696 3.15929 5.41664H1.74996C1.59525 5.41664 1.44688 5.4781 1.33748 5.5875C1.22808 5.69689 1.16663 5.84527 1.16663 5.99998V9.49998C1.16663 9.65468 1.22808 9.80306 1.33748 9.91245C1.44688 10.0219 1.59525 10.0833 1.74996 10.0833H3.15929C3.26735 10.083 3.3744 10.1041 3.47423 10.1455C3.57406 10.1868 3.66469 10.2476 3.74088 10.3242L5.71429 12.2982C5.77181 12.3559 5.84514 12.3951 5.92499 12.411C6.00484 12.4269 6.08762 12.4188 6.16283 12.3876C6.23805 12.3565 6.30232 12.3037 6.3475 12.2359C6.39268 12.1682 6.41674 12.0886 6.41663 12.0071V3.49281Z" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.33337 6C9.71202 6.50486 9.91671 7.11892 9.91671 7.75C9.91671 8.38108 9.71202 8.99514 9.33337 9.5" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.2957 11.4623C11.7832 10.9748 12.1699 10.396 12.4337 9.75903C12.6976 9.12207 12.8334 8.43938 12.8334 7.74993C12.8334 7.06049 12.6976 6.37779 12.4337 5.74083C12.1699 5.10386 11.7832 4.52511 11.2957 4.0376" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="volume-bar-wrapper">
                  <div className="volume-bar">
                    <div className="volume-filled"></div>
                    <div className="volume-handle"></div>
                  </div>
                </div>
                <button className="queue-button">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 3.66663H1.75" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.41667 7.75H1.75" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.41667 11.8334H1.75" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.25 10.0833V3.66663" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5 11.8334C11.4665 11.8334 12.25 11.0499 12.25 10.0834C12.25 9.11688 11.4665 8.33337 10.5 8.33337C9.5335 8.33337 8.75 9.11688 8.75 10.0834C8.75 11.0499 9.5335 11.8334 10.5 11.8334Z" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="fullscreen-button">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.25 2.5H12.75V6" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.75 2.5L8.66663 6.58333" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.25 13L6.33333 8.91663" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.75 13H2.25V9.5" stroke="#99A1AF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Audio Player (using library for functionality) */}
        <div style={{ display: 'none' }}>
          <AudioPlayer
            ref={this.audioRef}
            src={currentTrack.src}
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            showSkipControls={true}
            onClickPrevious={this.handleClickPrevious}
            onClickNext={this.handleClickNext}
            onEnded={this.handleClickNext}
          />
        </div>
      </div>
    )
  }
}

export default SpotifyClone

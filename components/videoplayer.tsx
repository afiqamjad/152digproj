interface VidPlayerProps {
  src: string
}

export default function VideoPlayer({src} : VidPlayerProps) {
    return (
      <iframe
        src={src}
        allowFullScreen
        loading="lazy"
        style={{
          width: '80%',
          aspectRatio: '16 / 9',
          border: '0.18rem solid white',
        }}
      />
    );
  }
  
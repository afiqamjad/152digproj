export default function VideoPlayer() {
    return (
      <iframe
        src="https://www.youtube.com/embed/cxCW3sjELV4"
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
  
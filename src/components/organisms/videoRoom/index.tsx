const VideoRoom = () => {
  return (
    <div className="room">
      <iframe
        src={
          'https://video-app-6483-6115-dev.twil.io?passcode=66375164836115&URLRoomName=test-room&URLUserName=akila-kk'
        }
        allow="camera; microphone; fullscreen; display-capture; autoplay"
        frameBorder="0"
        height={600}
        width={'100%'}
      />
    </div>
  );
};

export { VideoRoom };

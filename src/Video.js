
const Video = ({title, dateAdded, channel, thumbnail, description}) => {
        return (
            <div className="video-container">
                <div className="video-image">
                  <img src={thumbnail} alt={title} />
                </div>
                <div className="video-info">
                  <h3>{title}</h3>
                  <p>Upload date: {dateAdded}</p>
                  <h4>Channel's Title: {channel}</h4>
                  <p>{description}</p>
                </div>
            </div>
        );
    }

export default Video;
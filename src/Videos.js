import { useState } from 'react';
import Video from './Video';

const Videos = (props) => {

    const [listaVideos, setListaVideos] = useState(props.videos);

    const deleteVideo = (videoId) => {
        let newListaVideos = listaVideos.filter(video => videoId !== video.id);
        setListaVideos(newListaVideos);
    }

    const addVideo = (nuevoVideo) => {
        setListaVideos([
            nuevoVideo,
            ...listaVideos,
        ]);
    }

    return (
        <>
        <button onClick={() => deleteVideo(2)}>Delete</button>
        <button onClick={() => addVideo({
            id: 6,
            title: "Messi usando react",
            dateAdded: "2021-11-03T14:37:33Z",
            channel: "CoderHouser",
            thumbnail: "https://todoimagenesde.com/wp-content/uploads/2016/06/messi.png12.jpeg",
            description: "Messi deslumbra en React al anotar un Hat Trick"
        })}>Add</button>
        {
            listaVideos.map((video, index) => 
              <Video
                key={index}
                title={video.title} 
                dateAdded={video.dateAdded}
                channel={video.channel}
                thumbnail={video.thumbnail}
                description={video.description} /> )
          }
          </>
    );
}

export default Videos;
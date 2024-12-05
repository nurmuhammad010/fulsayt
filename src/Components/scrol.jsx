import { Carousel } from 'react-carousel-minimal';

function Scrol() {
 const data = [
    {
      image: "https://play-lh.googleusercontent.com/fYRTuBLFPBlA7NaPgEGos8kP21cjjW8IWwKU0BmNJmLelD97q1Z_GSQWYcbD772KvdkT",
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`
    },
    {
      image: "https://marketing.uz/uz/uploads/works/covers/c429d6d175aa101e52623be8b0255c32.jpg",
      caption: "Scotland"
    },

    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },

  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={5000}
            width="650px"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Scrol;
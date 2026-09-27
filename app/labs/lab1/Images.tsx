export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />

      <br />
      My chosen image:
      <br />
      <img
        id="wd-your-image"
        src="/images/STS-130_exhaust_cloud_engulfs_Launch_Pad_39A.jpg"
        width="400px"
        alt="Space shuttle launching at night amid clouds of exhaust"
      />
      <br />
      Additional image example:
      <br />
      <img
      id="wd-ai-image"
      src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/500px-The_Earth_seen_from_Apollo_17.jpg"
      width="200px"
      alt="Earth photographed by the Apollo 17 crew"
      />
    </div>
  );
}
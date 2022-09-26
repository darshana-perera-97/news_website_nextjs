import SingleNews from "../Design/Components/SingleNews";
import TopNavBar from "../Design/Views/TopNavBar";


export default function whether() {
  return (
    <div>
      <TopNavBar name="Weather Updates" />
      <SingleNews
        link="https://www.dailynews.lk/sites/default/files/styles/node-teaser-default/public/news/2022/03/17/Advisory%20issued%20for%20Southwest%20Bay%20of%20Bengal%20Sea%20Areas.JPG?itok=vIvoEdMf"
        heading="Advisory issued for Southwest Bay of Bengal Sea Areas"
        des="The low pressure area was located in the central part of the Southwest Bay of Bengal is now lay centered over the southeastern Bay of Bengal. It is likely to move east-northeast wards towards Andaman..."
      />
      <SingleNews
        link="https://cdn.newsfirst.lk/english-uploads/2022/09/weather%20advisory(1)-692277_850x460-697680_650x250.jpg"
        heading="Showers likely in Eastern province especially for Trincomalee"
        des="The Department of Meteorology says that a few showers will occur in the Western and Sabaragamuwa provinces and Galle and Matara districts. Showers or thundershowers will occur at a few places in the Uva province and Ampara and Batticaloa districts during the evening or night. Mainly fair weather will prevail elsewhere over the island. The general public is kindly requested to take adequate precautions to minimize damages caused by temporary localized strong winds and lightning during thundershowers."
      />
    </div>
  );
}

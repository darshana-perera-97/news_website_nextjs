import SingleNews from "../Design/Components/SingleNews";
import TopNavBar from "../Design/Views/TopNavBar";

export default function foreign() {
  return (
    <div>
      <TopNavBar name="Foreign News" />
      <SingleNews
        link="https://ichef.bbci.co.uk/news/976/cpsprodpb/1426C/production/_125904528_kristalinageorgieva.jpg.webp"
        heading="The head of the International Monetary Fund has said it will downgrade its expectations for global economic growth this month."
        des=" Its most recent forecast, issued in April, was for 3.6% growth this year and next. Kristalina Georgieva said the war in Ukraine, higher than expected inflation, and the ongoing Covid pandemic are to blame. These are making the cost of living crisis worse for millions, she said. And the poorest are suffering the most, she added. It comes as inflation in the US - world's biggest economy - reached 9.1%, the highest in more than 40 years."
      />
      <SingleNews
        link="https://ichef.bbci.co.uk/news/976/cpsprodpb/9C61/production/_126333004_gettyimages-1242533006.jpg.webp"
        heading="A Chinese research ship has docked in Sri Lanka's Hambantota port despite Indian concerns."
        des="The Yuan Wang 5 was given permission to dock on the condition it would not carry out research while in Sri Lankan waters, said port officials. India had previously voiced concerns that the ship would be used to spy on its activities, said media reports. Sri Lanka's Foreign Ministry said the ship will be allowed to remain in the Chinese-run port until 22 August. Foreign security analysts quoted by Reuters describe the Yuan Wang 5 as one of China's latest generation space-tracking ships, used to monitor satellite, rocket and intercontinental ballistic missile launches."
      />
     
    </div>
  );
}

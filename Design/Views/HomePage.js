import SingleNews from "../Components/SingleNews";
import TopNavBar from "./TopNavBar";

export default function HomePage() {
  return (
    <div>
      <TopNavBar name="Local News" />
      <SingleNews
        link="https://ichef.bbci.co.uk/news/976/cpsprodpb/1626/production/_126807650_gettyimages-1242701078.jpg.webp"
        heading="Sri Lanka's annual inflation rate surged to more than 70% in August as it struggles with its worst economic crisis in over seven decades."
        des="Official data also showed food prices rose by 84.6% compared to a year ago. The South Asian nation of 22m people was plunged into financial and political chaos this year as it faced a shortage of foreign currencies.The country has been unable to afford key imports - including fuel, fertiliser and medicine.Last month, the Central Bank of Sri Lanka said it expected inflation to ease, as the country's economy slowed, after peaking at about 70%. Official figures released last week showed that the economy had contracted by 8.4% in the three months to the end of August."
      />
      <SingleNews
        link="https://ichef.bbci.co.uk/news/976/cpsprodpb/11B1E/production/_124087427_gettyimages-1230962244.jpg.webp"
        heading="Sri Lanka's former president Gotabaya Rajapaksa, who fled abroad after mass protests in July, has returned to the country."
        des="Mr Rajapaksa had been staying in Thailand on a temporary visa and flew back home via Singapore. Some Sri Lankan ministers are reported to have met him at the airport. Sri Lankans blame his government for the island's worst economic crisis in history. A collapse in foreign currency led to dire shortages of food and fuel. Protests began in April, following a sharp increase in food and fuel costs. Hundreds of thousands of people from all walks of life and all communities took part in the largely peaceful protests demanding the resignation of Mr Rajapaksa and his elder brother Mahinda, the then prime minister who quit in May."
      />
    </div>
  );
}

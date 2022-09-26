import SingleNews from "../Design/Components/SingleNews";
import TopNavBar from "../Design/Views/TopNavBar";


export default function sports() {
  return (
    <div>
      <TopNavBar name="Sports News" />
      <SingleNews
        link="https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/142A5/production/_126079528_karunaratne_babar_getty.jpg"
        heading="Pakistan in Sri Lanka 2022"
        des=" 11-13 v Sri Lanka Cricket XI, Colombo (Colts) - Match drawn  - Scorecard (external site) || 16-20 1st Test, Galle - Pakistan won by four wickets - Scorecard || 24-28 2nd Test, Galle (moved from Colombo (SSC) because of political demonstrations) - Sri Lanka won by 246 runs - Scorecard"
      />
      <SingleNews
        link="https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/298C/production/_125863601_gettyimages-1241835865.jpg"
        heading="Sri Lanka beat Australia by an innings in second Test to draw series"
        des="Sri Lanka crushed Australia by an innings and 39 runs inside four days of the second Test to draw the series 1-1. Dinesh Chandimal hit a sublime unbeaten 206 as the hosts made 554 in Galle to take a first innings lead of 190. Australia reached 52-1 at tea but then crumbled to 151 all out as Sri Lanka spinner Prabath Jayasuriya took 6-59 to finish with match figures of 12-177. It is Sri Lanka head coach Chris Silverwood's second Test series in charge since taking over in April. "
      />
    </div>
  );
}

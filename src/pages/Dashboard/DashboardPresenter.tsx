import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getUserSteamDetails } from "../../utils/api";
import styled from "styled-components";

import { DashContainer } from "../../components/ui/Layout/AppContainer";
import SearchForm from "../../components/shared/SearchForm/SearchForm";
import SideBar from "../../components/shared/SideBar/SideBar";
import SideBarMobile from "../../components/shared/SideBar/SideBarMobile";
import LoadingSpinner from "../../components/ui/Animation/LoadingSpinner/LoadingSpinner";
import ProfileCard from "../../components/core/dashboard/UserSteamDetailsCard";

type TParams = { steamID: string };

const DashboardPresenter = ({
  match,
  history
}: RouteComponentProps<TParams>) => {
  const [validID, setValidID] = useState(null);
  const steamID: string = match.params.steamID;

  useEffect(() => {
    const validateID = async () => {
      try {
        const data = await getUserSteamDetails(steamID);
        setValidID(data.steamID64);

        const name = data.name;
        document.title =
          name + " - Dashboard // Farri - Check your CS:GO Statistics";
      } catch (err) {
        // If the user enters an invalid steamID(anything) after /dashboard/{..}
        // we redirect the user to "/" or else the App would crash.
        history.push("/");
      }
    };
    validateID();
  });

  if (validID === null)
    return (
      <>
        <DashContainer>
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignSelf: "center",
              alignItems: "center"
            }}
          >
            <LoadingSpinner />
          </div>
        </DashContainer>
      </>
    );

  return (
    <>
      <SideBar steamID={steamID} {...match} />
      <SideBarMobile />
      <DashContainer>
        <SearchBarWrapper>
          <SearchForm />
        </SearchBarWrapper>
        <h1> THIS IS YOUR DASHBOARD PAGE </h1>
        <CardDiv>
          <ProfileCard steamID={steamID} />
        </CardDiv>

        <p>
          I'm baby kale chips affogato ennui lumbersexual, williamsburg paleo
          quinoa iceland normcore tumeric. Kitsch coloring book retro, seitan
          schlitz tattooed biodiesel vexillologist neutra. Synth mumblecore deep
          v, umami selfies normcore gluten-free snackwave. Seitan ramps drinking
          vinegar venmo keytar, humblebrag VHS post-ironic tacos godard
          pour-over.
        </p>
        <p>
          Sartorial kogi taxidermy, kickstarter synth yr irony ennui everyday
          carry retro helvetica stumptown cloud bread squid echo park. Etsy
          cloud bread sartorial quinoa tacos beard mumblecore shaman tumblr
          pop-up. Twee retro fingerstache af helvetica pabst 8-bit leggings
          taiyaki portland ramps tbh tumblr vinyl. Neutra humblebrag bushwick
          portland subway tile plaid, offal scenester flexitarian cliche squid
          small batch palo santo. Palo santo meh adaptogen +1 3 wolf moon,
          listicle brunch ethical fanny pack everyday carry fam. Offal
          fingerstache taxidermy, man bun venmo PBR&amp;B helvetica thundercats
          everyday carry tote bag artisan cray wolf jianbing.
        </p>
        <p>
          Taxidermy thundercats whatever austin. VHS helvetica ethical,
          dreamcatcher enamel pin YOLO shabby chic locavore man bun crucifix
          pabst chillwave pop-up vegan. Air plant mlkshk ethical echo park
          tumeric, whatever crucifix godard scenester locavore pork belly yuccie
          vape. +1 gochujang put a bird on it, pork belly whatever selfies
          vaporware occupy banh mi normcore VHS. Cornhole normcore hashtag
          tilde. Hell of yr try-hard DIY raw denim banjo, enamel pin irony
          polaroid copper mug tofu. Dreamcatcher lomo literally 90's before they
          sold out, 3 wolf moon banh mi seitan chambray cliche offal tote bag
          occupy pug.
        </p>
        <p>
          Post-ironic hot chicken salvia yr yuccie ugh cold-pressed keffiyeh
          franzen viral taxidermy mustache slow-carb crucifix vape. Taiyaki
          yuccie hell of tacos PBR&amp;B, kitsch meggings tbh truffaut
          kickstarter mixtape af kogi. Fingerstache vegan tofu waistcoat
          gentrify cray. Drinking vinegar 3 wolf moon health goth craft beer
          master cleanse. Letterpress health goth 8-bit chillwave craft beer
          brooklyn. Chicharrones master cleanse 8-bit, mumblecore copper mug
          messenger bag poutine lomo kale chips flannel. Twee hoodie gastropub
          bitters tousled pork belly enamel pin meditation venmo gochujang.
        </p>
        <p>
          Next level selfies cronut ethical. Tofu tumblr you probably haven't
          heard of them, man braid literally forage swag chillwave. Pug yr
          flannel tumeric. Coloring book yr chillwave snackwave, shoreditch
          shaman gentrify typewriter tumeric DIY copper mug small batch.
          Scenester waistcoat YOLO hexagon kombucha poke 8-bit meditation.
          Selvage scenester forage williamsburg. Hoodie fingerstache tacos
          mustache, hashtag quinoa next level sartorial craft beer retro disrupt
          lo-fi.
        </p>
        <p>
          YOLO twee keytar farm-to-table flexitarian cardigan polaroid
          lumbersexual adaptogen drinking vinegar echo park dreamcatcher. Brunch
          shoreditch dreamcatcher iPhone knausgaard plaid edison bulb
          letterpress ethical yr fanny pack. Typewriter portland woke glossier
          cronut, post-ironic migas gentrify letterpress cray brunch lyft 8-bit
          master cleanse. Pitchfork thundercats organic pour-over unicorn lomo.
        </p>
        <p>
          Ugh yr tacos aesthetic everyday carry, tumeric selvage cliche
          skateboard. Wolf truffaut enamel pin vexillologist poutine. Hoodie
          roof party pabst, cardigan letterpress af disrupt +1 subway tile
          chillwave live-edge meggings next level readymade. Master cleanse
          gentrify hashtag, stumptown fam single-origin coffee occupy
          dreamcatcher air plant viral vexillologist enamel pin meggings. Tumblr
          chambray pickled microdosing austin scenester green juice.
        </p>
      </DashContainer>
    </>
  );
};

const SearchBarWrapper = styled.div`
  display: flex;
  margin: 1rem auto;
  padding-left: -1rem;
`;

const CardDiv = styled.div`
  display: none;

  @media ${(props) => props.theme.size.small} {
    display: inline-block;
  }
`;

export default DashboardPresenter;

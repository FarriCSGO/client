import React, { useState, useEffect } from "react";
import { getUserSteamDetails } from "../../../utils/api";

import Card from "../../ui/Card/SteamDetailsCard";

interface IProps {
  steamID: string;
}

const SteamDetailsCard = (props: IProps) => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [status, setStatus] = useState("");
  const [avatarURL, setAvatarURL] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await getUserSteamDetails(props.steamID);

      setName(data.name);
      setLevel(data.steamLevel);
      setAvatarURL(data.avatarImageURL);

      if (data.onlineStatus === 0) {
        setStatus("Offline");
      }

      if (data.onlineStatus === 1 && data.playingGame) {
        setStatus(data.playingGame);
      }

      if (data.onlineStatus !== 0 && !data.playingGame) {
        setStatus("Online");
      }

      setLoading(false);
    };

    getData();
  }, [props]);

  return (
    <Card
      name={name}
      level={level}
      status={status}
      avatarURL={avatarURL}
      loading={loading}
    />
  );
};

export default SteamDetailsCard;

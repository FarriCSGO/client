import React from "react";
import styled from "styled-components";

import Loading from "../../ui/Animation/Loading";

import API from "../../../utils/API";

interface IProps {
  steamID64: string;
}

interface IState {
  loading: boolean;
  name: string;
  avatarURL: string;
  steamLevel: string;
  statusText: string;
}

class UserSteamDetailsCard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: true,
      name: "",
      avatarURL: "",
      steamLevel: "",
      statusText: ""
    };
  }

  componentDidMount = async () => {
    const data = await API.getUserSteamDetails(this.props.steamID64);

    // TODO: Make a function to set the data instead of doing it here.
    this.setState({ name: data.name });
    this.setState({ avatarURL: data.avatarImageURL });
    this.setState({ steamLevel: data.steamLevel });

    if (data.onlineStatus === 0) {
      this.setState({ statusText: "Offline" });
    }

    if (data.onlineStatus === 1 && data.playingGame) {
      this.setState({ statusText: data.playingGame });
    }

    if (data.onlineStatus !== 0 && !data.playingGame) {
      this.setState({ statusText: "Online" });
    }

    this.setState({ loading: false });
  };

  render() {
    if (this.state.loading) {
      return (
        <CardContainer>
          <AnimationDiv>
            <Loading />
          </AnimationDiv>
        </CardContainer>
      );
    }

    return (
      <CardContainer>
        <CenterItems>
          <SteamLevel>{this.state.steamLevel}</SteamLevel>
          <AvatarDiv>
            <AvatarImage
              src={this.state.avatarURL}
              alt="steam profile avatar"
            ></AvatarImage>
            <Name>{this.state.name}</Name>
          </AvatarDiv>
          <Status>{this.state.statusText}</Status>
        </CenterItems>
      </CardContainer>
    );
  }
}

const AnimationDiv = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 350px;
  height: 155px;
  left: 53px;
  top: 26px;

  background: #ffffff;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

const CenterItems = styled.div`
  width: 350px;
  // TODO: Instead of cuttin the name, append "..."
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.orange};
`;

const AvatarDiv = styled.div`
  margin: 0 1rem;
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const AvatarImage = styled.img`
  width: 64px;
  height: 64px;
  padding: 0.1rem;
  border-radius: 50px;
  border: 3px solid ${(props) => props.theme.colors.orange};
`;

const SteamLevel = styled.p`
  font-weight: bold;
  font-size: 1rem;
  height: fit-content;
  width: fit-content;
  position: relative;
  margin: 0;
  padding: 0;
  top: 0.3rem;
  right: -19.5rem;
`;

const Status = styled.p`
  font-weight: normal;
  font-size: 1.1rem;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-top: 0.75rem;
  color: ${(props) => {
    if (props.children === "Offline") return "#999999";
    else if (props.children === "Online") return "#047DC4";
    return "#39B924";
  }};
`;

export default UserSteamDetailsCard;

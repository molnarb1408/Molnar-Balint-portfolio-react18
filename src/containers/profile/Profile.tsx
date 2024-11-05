import { lazy, useState, useEffect, Suspense } from "react";
import { openSource } from "../../portfolio.tsx";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";
import { GithubProfile } from "../../types/GithubProfileCard.types.ts"

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard.tsx")
);

export default function Profile() {
  const [prof, setRepo] = useState<GithubProfile | null>(null); 

  function setProfileFunction(profileData: GithubProfile | null) { 
    setRepo(profileData);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
            throw new Error("Network response was not ok");
          })
          .then(response => {
            setProfileFunction(response.data.user as GithubProfile);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction(null); 
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);

  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    prof !== null
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}

import "./Project.scss";
import { openSource, socialMediaLinks } from "../../portfolio";
import { useStyle } from "../../hooks/useStyle";
import { lazy, Suspense, useEffect, useState } from "react";
import { GithubRepo } from "../../types/GithubRepo.types";
import Loading from "../loading/Loading";
import Button from "../../components/button/Button";

const FailedLoading = () => null;

export default function Projects() {
  const GithubRepoCard = lazy(() => import("../../components/githubRepoCard/GithubRepoCard"));
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState<GithubRepo[]>([]);
  const { isDark } = useStyle();

  function setrepoFunction(array: GithubRepo[] | string) {
    if (typeof array === "string") {
      setrepo([]);
    } else {
      setrepo(array);
    }
  }

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">GitHub - Publikus Prejectek</h1>
          <div className="repo-cards-div-main">
            {repo.map((v: GithubRepo, i: number) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"További Projektek"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}

import React, { useState, useEffect } from "react";
import { Header, Loading } from "../components";
import { SelectProfilesContainer } from "./index";
import { useFirebase } from "../hooks/FirebaseHooks";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const firebase = useFirebase();
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log("profile = ", profile);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile?.displayName]);

  return profile?.displayName ? (
    <>
      {loading ? <Loading src={user?.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">Yooo</Header>
    </>
  ) : (
    <SelectProfilesContainer user={user} setProfile={setProfile} />
  );
}

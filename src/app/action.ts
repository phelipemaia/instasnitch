import { FollowerRAW, FollowingRAW, Profile, Snitch } from "./service/Snitch";

export type FormReturn = {
  notFollowingBack: Profile[];
  error?: string;
};

export async function saveData(formData: FormData): Promise<FormReturn> {
  console.log('aquiii')
  const followersFile = formData.get("followers") as File;
  const followingFile = formData.get("following") as File;
  let notFollowingBack: Profile[] = [];

  if (!followersFile || !followingFile) {
    return { notFollowingBack, error: "Invalid files" };
  }

  const decoder = new TextDecoder("utf-8");
  let followersFileContent: FollowerRAW[];
  let followingFileContent: FollowingRAW;

  try {
    const followersFileBuffer = await followersFile.arrayBuffer();
    const followersFileString = decoder.decode(followersFileBuffer);
    followersFileContent = JSON.parse(followersFileString);

    const followingileBuffer = await followingFile.arrayBuffer();
    const followingFileString = decoder.decode(followingileBuffer);
    followingFileContent = JSON.parse(followingFileString);

    if (!Array.isArray(followersFileContent)) {
      throw new Error("Invalid follower JSON");
    }

    if (!Array.isArray(followingFileContent.relationships_following)) {
      throw new Error("Invalid following JSON");
    }

    const snitch = new Snitch(followersFileContent, followingFileContent);

    console.log(`Total followers: ${followersFileContent.length}`);
    console.log(
      `Total following: ${followingFileContent.relationships_following.length}`,
    );

    notFollowingBack = snitch.check();
  } catch (err) {
    if (err instanceof SyntaxError) {
      console.log(err);
      return { notFollowingBack, error: "Invalid file format" };
    }
  }

  return { notFollowingBack };
}

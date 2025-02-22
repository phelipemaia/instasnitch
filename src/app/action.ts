export async function saveData(formData: FormData) {
  const followersFile = formData.get("followers") as File;
  const followingFile = formData.get("following") as File;

  if (!followersFile || !followingFile) {
    return { errors: 'Invalid files' };
  }

  const decoder = new TextDecoder('utf-8');
  let followersJSON;
  let followingJSON;
  
  try {
    const followersFileBuffer = await followersFile.arrayBuffer();
    const followersFileString = decoder.decode(followersFileBuffer);
    followersJSON = JSON.parse(followersFileString);

    const followingileBuffer = await followingFile.arrayBuffer();
    const followingFileString = decoder.decode(followingileBuffer);
    followingJSON = JSON.parse(followingFileString);
  } catch (e) {
    console.log(e);
    return { errors: 'Invalid file format' };
  }

  console.log("followingJSON", followingJSON);
  console.log("followersJSON", followersJSON);

  return true;
}
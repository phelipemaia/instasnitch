export type ProfileRAW = {
  href: string;
  timestamp: Date;
  value: string;
}

export type Profile = {
  href: string;
  name: string;
}

export type FollowerRAW = {
  media_list_data: [];
  string_list_data: ProfileRAW[];
  title: string;
}

export type FollowingRAW = {
  relationships_following: {
    media_list_data: [];
    string_list_data: ProfileRAW[];
    title: string;
  }[];
}

export class Snitch {
  followers: FollowerRAW[];
  following: FollowingRAW;

  constructor(followers: FollowerRAW[], following: FollowingRAW) {
    this.followers = followers;
    this.following = following;
  }

  check() {
    const notFollowingBack: Profile[] = [];

    for (const following of this.following.relationships_following) {
      if (following.string_list_data.length > 1) {
        console.log('Following profile with more than one list data');
      }

      const isFollower = this.followers.some((follower) => {
        return follower.string_list_data.some((profile) => {
          return profile.value === following.string_list_data[0].value;
        });
      });

      if (!isFollower) {
        notFollowingBack.push({
          name: following.string_list_data[0].value,
          href: following.string_list_data[0].href,
        });
      }
    }

    return notFollowingBack;
  }
}
// level 2

const  getUsers=async ()=> {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
    le [user,Profile,p]=[...doc];
       const userProfile = {
      user,
      profile: Profile,
      posts: p
    };
    return userProfile;
  }

// Define the Profile interface
interface Profile {
    name: string;
    age: number;
    email: string;
  }
  
  // Define the updateProfile function type inline
  const updateProfile = (profile: Profile, updates: Partial<Profile>): Profile => {
    return { ...profile, ...updates };
  };
  

  
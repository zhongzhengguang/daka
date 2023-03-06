declare module '*module.css' {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

export interface UserData {
  users: Users[];
}
interface Users {
  users: [id: string, name: string, email: string, emailVerified: null, image: string];
}
